import React, { useState, useRef } from 'react';
import axios from 'axios';

const Upload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileSelect = (event) => {
    setError(null);
    setPrediction(null);
    const file = event.target.files[0];

    if (file && file.type.startsWith('image/')) {
      setSelectedFile(file);

      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setSelectedFile(null);
      setPreview(null);
      setError('Please select a valid image file');
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setError(null);
    setPrediction(null);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];

      if (file.type.startsWith('image/')) {
        setSelectedFile(file);

        // Create preview
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreview(reader.result);
        };
        reader.readAsDataURL(file);
      } else {
        setSelectedFile(null);
        setPreview(null);
        setError('Please select a valid image file');
      }
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedFile) {
      setError('Please select an image to upload');
      return;
    }

    setLoading(true);
    setPrediction(null);
    setError(null);

    const formData = new FormData();
    formData.append('image', selectedFile);

    try {
      const response = await axios.post('http://localhost:5000/api/predict', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      setPrediction(response.data);
    } catch (error) {
      console.error('Error during prediction:', error);
      setError(error.response?.data?.error || 'An error occurred during prediction. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const getBadgeClass = (label) => {
    switch (label) {
      case 'glioma':
        return 'bg-danger';
      case 'meningioma':
        return 'bg-warning text-dark';
      case 'notumor':
        return 'bg-success';
      case 'pituitary':
        return 'bg-info text-dark';
      default:
        return 'bg-secondary';
    }
  };

  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="upload-container">
          <h2 className="mb-4">Upload MRI Scan</h2>
          <p className="mb-4">
            Upload a brain MRI scan image to get an instant analysis. Our AI model will analyze
            the image and provide diagnostic predictions.
          </p>

          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}

          <div
            className="upload-area mb-4"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onClick={handleUploadClick}
          >
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileSelect}
              accept="image/*"
              style={{ display: 'none' }}
            />
            {preview ? (
              <div className="text-center">
                <img src={preview} alt="MRI Preview" className="preview-image mb-3" />
                <p>{selectedFile.name}</p>
              </div>
            ) : (
              <div className="text-center">
                <i className="fas fa-upload fa-3x mb-3"></i>
                <h5>Drag and drop your MRI scan here</h5>
                <p>or click to browse files</p>
              </div>
            )}
          </div>

          <div className="text-center">
            <button
              className="btn btn-primary btn-lg"
              onClick={handleSubmit}
              disabled={loading || !selectedFile}
            >
              {loading ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                  Analyzing...
                </>
              ) : 'Analyze MRI Scan'}
            </button>
          </div>
        </div>

        {prediction && (
          <div className="prediction-result">
            <h3 className="mb-4">Analysis Results</h3>

            <div className="prediction-card mb-4">
              <h4>
                Prediction:
                <span className={`ms-2 badge ${getBadgeClass(prediction.prediction)}`}>
                  {prediction.prediction.charAt(0).toUpperCase() + prediction.prediction.slice(1)}
                </span>
              </h4>
              <p className="mb-0">Confidence: {prediction.confidence}</p>
            </div>

            <h5 className="mb-3">Probability Distribution:</h5>
            <div className="mb-4">
              {prediction.class_names.map((className, index) => (
                <div key={className} className="mb-3">
                  <div className="d-flex justify-content-between mb-1">
                    <span className="category-name">
                      {className.charAt(0).toUpperCase() + className.slice(1)}
                    </span>
                    <span>{prediction.probabilities[index].toFixed(2)}%</span>
                  </div>
                  <div className="progress">
                    <div
                      className={`progress-bar ${getBadgeClass(className)}`}
                      role="progressbar"
                      style={{ width: `${prediction.probabilities[index]}%` }}
                      aria-valuenow={prediction.probabilities[index]}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="alert alert-info" role="alert">
              <strong>Note:</strong> This analysis is provided for informational purposes only and should not replace professional medical advice.
              Always consult with a qualified healthcare provider for diagnosis and treatment.
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Upload;

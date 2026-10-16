import React from 'react';

const About = () => {
  return (
    <div className="about-section">
      <h2>About BrainAI</h2>

      <div className="mb-5">
        <h3>Project Overview</h3>
        <p>
          BrainAI is an advanced medical imaging analysis platform designed to assist healthcare
          professionals in diagnosing brain tumors using MRI scan images. Our platform leverages
          state-of-the-art deep learning technology to provide fast and accurate predictions.
        </p>
        <img
          src="https://img.freepik.com/free-photo/ai-nuclear-energy-background-future-innovation-disruptive-technology_53876-129783.jpg"
          alt="Brain AI Technology"
          className="brain-image"
        />
      </div>

      <div className="mb-5">
        <h3>The Technology</h3>
        <p>
          BrainAI uses a Convolutional Neural Network (CNN) model that has been trained on thousands
          of MRI scan images. The model can identify four different categories:
        </p>
        <ul>
          <li><strong>Glioma</strong> - A type of tumor that occurs in the brain and spinal cord</li>
          <li><strong>Meningioma</strong> - A tumor that forms on membranes that cover the brain and spinal cord</li>
          <li><strong>No Tumor</strong> - Healthy brain scans without abnormalities</li>
          <li><strong>Pituitary Tumor</strong> - A tumor that forms in the pituitary gland</li>
        </ul>
        <div className="mt-4">
          <span className="tech-badge">Deep Learning</span>
          <span className="tech-badge">Computer Vision</span>
          <span className="tech-badge">Medical Imaging</span>
          <span className="tech-badge">Neural Networks</span>
          <span className="tech-badge">PyTorch</span>
        </div>
      </div>

      <div className="mb-5">
        <h3>Our Model</h3>
        <p>
          The CNN model architecture includes:
        </p>
        <ul>
          <li>Multiple convolutional layers with ReLU activation</li>
          <li>Max pooling layers to reduce spatial dimensions</li>
          <li>Fully connected layers for final classification</li>
        </ul>
        <p>
          The model was trained using PyTorch and achieves high accuracy in predicting
          the correct tumor type from MRI scans.
        </p>
      </div>

      <div className="mb-5">
        <h3>Important Disclaimer</h3>
        <div className="alert alert-warning">
          <p className="mb-0">
            <strong>This tool is for educational and research purposes only.</strong> The predictions
            made by BrainAI should not be used as the sole basis for diagnosis or treatment decisions.
            Always consult with qualified healthcare professionals for proper medical advice and diagnosis.
          </p>
        </div>
      </div>

      <div>
        <h3>Project Team</h3>
        <p>
          BrainAI was developed as an AI project focusing on medical image analysis
          and deep learning applications in healthcare.
        </p>
      </div>
    </div>
  );
};

export default About;

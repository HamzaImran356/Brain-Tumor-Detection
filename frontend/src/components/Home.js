import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="hero-section">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-6 text-lg-start text-center mb-4 mb-lg-0">
              <h1 className="hero-title">Advanced MRI Scan Analysis with AI</h1>
              <p className="hero-subtitle">
                Upload your MRI scan images and get instant, accurate analysis powered by our advanced AI model.
                Detect various brain conditions including glioma, meningioma, and pituitary tumors.
              </p>
              <Link to="/upload" className="btn btn-primary btn-lg">
                Start Scanning
              </Link>
            </div>
            <div className="col-lg-6 text-center">
              <img
                src="https://img.freepik.com/free-photo/human-brain-scan-artificial-intelligence-digital-remix_53876-124663.jpg"
                alt="Human Brain MRI Scan"
                className="img-fluid rounded"
                style={{ maxHeight: '300px' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container my-5">
        <h2 className="text-center mb-5">Key Features of BrainAI</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="feature-card">
              <div className="feature-icon mx-auto">
                <i className="fas fa-brain"></i>
              </div>
              <h3>Accurate Diagnosis</h3>
              <p>
                Our AI model has been trained on thousands of MRI scans to provide highly accurate diagnosis suggestions
                for healthcare professionals.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="feature-card">
              <div className="feature-icon mx-auto">
                <i className="fas fa-bolt"></i>
              </div>
              <h3>Instant Results</h3>
              <p>
                Get analysis results in seconds, helping healthcare providers make faster decisions
                and reducing patient waiting times.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="feature-card">
              <div className="feature-icon mx-auto">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3>Detailed Analysis</h3>
              <p>
                Receive comprehensive probability scores across different potential conditions,
                providing more information for clinical decision-making.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container text-center my-5">
        <h2 className="mb-4">Ready to experience advanced MRI scan analysis?</h2>
        <Link to="/upload" className="btn btn-primary btn-lg">
          Try BrainAI Now
        </Link>
      </div>

      {/* Team Members Section */}
      <div className="container my-5">
        <h2 className="text-center mb-5">Our Team</h2>
        <div className="row g-4">
          <div className="col-md-3">
            <div className="card team-card">
              <div className="card-body text-center">
                <div className="team-avatar mb-3">
                  <i className="fas fa-user-circle fa-4x"></i>
                </div>
                <h4 className="card-title">Umer Daud</h4>
                <p className="card-text">Deep Learning Engineer</p>

              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card team-card">
              <div className="card-body text-center">
                <div className="team-avatar mb-3">
                  <i className="fas fa-user-circle fa-4x"></i>
                </div>
                <h4 className="card-title">Taha Ijaz</h4>
                <p className="card-text">ML Model Architect</p>

              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card team-card">
              <div className="card-body text-center">
                <div className="team-avatar mb-3">
                  <i className="fas fa-user-circle fa-4x"></i>
                </div>
                <h4 className="card-title">Uzair Saeed</h4>
                <p className="card-text">Full Stack Developer</p>

              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card team-card">
              <div className="card-body text-center">
                <div className="team-avatar mb-3">
                  <i className="fas fa-user-circle fa-4x"></i>
                </div>
                <h4 className="card-title">Usman Wasif</h4>
                <p className="card-text">ML Engineer</p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

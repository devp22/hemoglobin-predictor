# Hemoglobin Predictor

## Introduction

The Hemoglobin Predictor is a web application designed to predict hemoglobin levels for patients based on their previous RBC counts. This application is primarily targeted at doctors and healthcare professionals, allowing them to make informed decisions regarding patient treatment.

## Purpose

This document outlines the software requirements for the Hemoglobin Predictor application, detailing its scope, features, functional and non-functional requirements, as well as system requirements.

## Scope

The Hemoglobin Predictor application will:
- Predict hemoglobin levels based on user-inputted RBC counts.

## Overall Description

### Product Perspective

The healthcare industry generates vast amounts of data. The Hemoglobin Predictor aims to utilize this data effectively, leveraging information collected during lab visits to enhance patient care.

### Product Features

- User input for medical metrics.
- Hemoglobin level prediction.

### User Characteristics

The application is intended for:
- Physicians and healthcare professionals.

## Functional Requirements

### Use Cases

- **Prediction Tool**: Predict future health outcomes based on historical data.

### Input and Output Specifications

- **Input**: Patient data provided in a structured format (CSV).
- **Output**: Predicted hemoglobin levels 

## Non-Functional Requirements

### Performance

- The machine learning model achieves 96% accuracy on training and testing datasets.
- Predictions should be delivered in real-time with a latency of 1-2 seconds after data input.

### Usability

- The application will feature a clean, intuitive interface for ease of use.
- Clear, actionable predictions will be provided for patient hemoglobin levels.

## System Requirements

### Hardware Requirements

- Any modern computer or server capable of running Python, Flask, ReactJS, and Docker.
- Development Environment: At least 8GB of RAM, 4-core processor, and 10GB of disk space.
- Production Environment: Cloud hosting (AWS, GCP, or Azure) with autoscaling capabilities for high-traffic scenarios.

### Software Requirements

- **Backend**: Python with Flask
- **Machine Learning**: SciKit-Learn or TensorFlow
- **Frontend**: ReactJS

## Installation

To install and run the Hemoglobin Predictor, follow these steps:

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd hemoglobin-predictor

2. Build and run the Docker containers:
    docker-compose up --build

3. Access the application at http://localhost:3000

## Documentation

For more detailed documentation, refer to SRS file.
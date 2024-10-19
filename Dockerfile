# Stage 1: Build the React App
FROM node:18-alpine AS react-build

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) from src folder
COPY ./package*.json ./

# Install npm dependencies
RUN npm install

# Copy the entire src and public folders to /app
COPY ./src ./src
COPY ./public ./public

# Build the React app
RUN npm run build

# Stage 2: Set up Python Flask Backend and Serve React Frontend
FROM python:3.9-slim AS final

# Set the working directory for the backend
WORKDIR /app

# Install Flask and other Python dependencies from requirements.txt
COPY ./src/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy the backend code
COPY ./src .

# Copy the built React app from the previous stage to the backend's static folder
COPY --from=react-build /app/build ./static

# Create model
CMD ["python", "model.py"]

# Expose port 5000 for Flask
EXPOSE 5000

# Run the Flask app
CMD ["python", "app.py"]

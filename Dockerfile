# Use the official Node.js image from the Docker Hub
FROM node:18-alpine AS build

# Set working directory
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image.
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the local code to the container image.
COPY . .

# Build the React app for production
RUN npm run build

# Use a lightweight web server to serve the static files
FROM nginx:alpine

# Copy the build output to replace the default Nginx static files
COPY --from=build /usr/src/app/build /usr/share/nginx/html

# Expose the port on which the app will run
EXPOSE 80

# Command to run the app
CMD ["nginx", "-g", "daemon off;"]

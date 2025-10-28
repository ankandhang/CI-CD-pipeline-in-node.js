# Use official Node.js image
FROM node:18

# Create app directory
WORKDIR /app

# Copy package files first for efficient caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app
COPY . .

# Expose the app port
EXPOSE 5000

# Start the app
CMD ["npm", "start"]

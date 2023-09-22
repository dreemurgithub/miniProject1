# Use the official Node.js 14 base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Install SQLite and other required dependencies
RUN apt-get update && apt-get install -y

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install npm dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Run Build
RUN npm run build


# Expose the desired port (if your Node.js app listens on a specific port)
EXPOSE 3000

# Start the Node.js application
CMD ["npm", "start"]

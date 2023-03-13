# Use an official Nginx runtime as a parent image
FROM nginx:latest

# Copy the React build files to the Nginx document root
COPY build /usr/share/nginx/html

# Copy the Nginx configuration file to the appropriate directory
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose the HTTP port
EXPOSE 80
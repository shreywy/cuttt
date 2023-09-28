# Use an official Python runtime as a parent image
FROM python:3.8

# Set the working directory in the container
WORKDIR /app

# Copy the application code into the container
COPY . /app

# Install any dependencies your application may have
RUN pip install -r requirements.txt  
# You may need to adjust this based on your project structure

# Expose the port on which your application will run
EXPOSE 80 
# You can change this port if needed

# Start the Gunicorn server with your app
CMD ["gunicorn", "wsgi:app", "-b", "0.0.0.0:80"]
# Afford Med Tek Backend Submission

## Roll Number

23BQ1A4704

## Overview

This project implements the required logging middleware integration and backend API communication using Node.js, Express, Axios, and environment variables.

## Features Implemented

* Logging middleware utility
* Bearer token authentication
* Environment variable configuration using dotenv
* Depot API integration
* Vehicle API integration
* Express backend server
* GitHub repository setup

## Project Structure

src/

* app.js
* services/

  * depotService.js
  * vehicleService.js
* util/

  * logger.js

## Endpoints

GET /

Returns backend status.

GET /depots

Fetches depot data from the evaluation service.

GET /vehicles

Fetches vehicle data from the evaluation service.

## Technologies Used

* Node.js
* Express.js
* Axios
* Dotenv

## Notes

Logging functionality has been integrated into the backend as required by the assessment setup instructions.

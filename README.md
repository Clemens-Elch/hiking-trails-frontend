# Exercise 4-404 React Hiking Trails

React frontend web application for displaying hiking trails, trail details, comments, and live weather updates.

This project is part of the WMC Tasksheet Module 4 – 03: `Exercise_4_404_react_hiking_trails`.

## Features

- Home page with welcome message
- Navigation with routes for:
    - Home
    - Trails
    - Comments
- Hiking trails list loaded from a REST backend
- Trail detail page with:
    - Name
    - Region
    - Description
    - Image
    - Duration, length, and intensity table
- Comments overview
- Trail-specific comments
- Add new comments for a trail
- Weather footer using WebSocket messages

## Tech Stack

- React
- Vite
- React Router
- CSS
- REST API
- WebSocket

## Backend

The backend is provided separately as `backend.bat`.

It runs on:

```txt
http://localhost:8080
# File Upload Assignment

A file upload application between a lightning-fast React frontend and a robust FastAPI backend.

## What's This About?

This is a full-stack file upload application built as an assignment project. Users can drag, drop, and upload files through an elegant interface, while the backend handles them with grace and efficiency.

### Features

- **Instant Upload Feedback**: Real-time loading indicators that keep users in the loop
- **Beautiful UI**: Clean, modern design with smooth animations
- **Error Handling**: Graceful error messages when things don't go as planned
- **CORS-Ready**: Pre-configured to work seamlessly between frontend and backend

## Tech Stack

### Frontend
- **React 19** - The latest and greatest
- **Vite (Rolldown)** - Lightning-fast build tooling
- **Vanilla CSS** - Because sometimes simple is elegant

### Backend
- **FastAPI** - Modern Python web framework
- **Uvicorn** - ASGI server for blazing speed
- **Python Multipart** - File upload handling

## Getting Started

### Prerequisites
- Node.js (for the frontend)
- Python 3.7+ (for the backend)
- A virtual environment (recommended)

### Quick Start

**1. Start the Backend** 
```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

**2. Start the Frontend** 
```bash
cd frontend
npm install
npm run dev
```

**3. Open Your Browser** 
Navigate to `http://localhost:5174` and start uploading!

## Project Structure

``` 
Assignment_/
├── backend/
│   ├── main.py              # FastAPI application
│   └── requirements.txt     # Python dependencies
├── frontend/
│   ├── src/
│   │   ├── App.jsx         # Main upload component
│   │   ├── App.css         # Styling
│   │   └── main.jsx        # Entry point
│   └── package.json        # Node dependencies
└── venv/                   # Python virtual environment
```

## How It Works

1. **User selects a file** through the sleek file input
2. **Frontend validates** and displays a loading indicator
3. **File is sent** to the backend via POST request
4. **Backend processes** the file (with a 2-second delay to showcase the loading state)
5. **Success message** appears with file details

## API Endpoints

### `POST /upload`
Upload a file to the server.

- **Request**: `multipart/form-data` with file field
- **Response**: `{"status": "success", "filename": "...", "size": ...}`
- **Interactive Docs**: Visit `http://localhost:8000/docs` for Swagger UI

## Development Notes

- Frontend runs on port **5173** 
- Backend runs on port **8000**
- Hot reload is enabled for both frontend and backend
- CORS is configured to allow localhost origins

## Learning Points

This project demonstrates:
- Full-stack application architecture
- React hooks (`useState`, async handling)
- FastAPI async endpoints
- File upload handling
- CORS configuration
- Modern frontend tooling (Vite/Rolldown)
- Loading states and user feedback

## Common Issues

**CORS Errors?**
Make sure the backend's `allow_origins` includes `http://localhost:5173`

**Backend won't start?**
Check that port 8000 isn't already in use

**Frontend shows blank page?**
Verify the backend is running and accessible

---

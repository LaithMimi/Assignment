from fastapi import FastAPI, File, UploadFile,  HTTPException #asgi server framework, needs uvicorn to run 
from fastapi.middleware.cors import CORSMiddleware # to handle cross-origin requests
import asyncio # for asynchronous programming


app = FastAPI()

# CORS configuration to allow requests from frontend
app.add_middleware(CORSMiddleware,
    allow_origins=["http://localhost:5174", "http://localhost:3000"], # which frontend origins are allowed
    allow_methods=["post"],
    allow_headers=["*"],
)

@app.post("/upload")
async def upload_file(file: UploadFile = File(...)):
    try:
        data = await file.read()
        # simulate processing time so frontend shows loading
        await asyncio.sleep(2)
        return {"status": "success", "filename": file.filename, "size": len(data)}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

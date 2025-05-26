from fastapi import FastAPI

app = FastAPI()

# Import and include your routers here
# from .routes import some_router
# app.include_router(some_router)

@app.get("/")
def read_root():
    return {"message": "Personal AI Coach backend is running."} 
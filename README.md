# sit737-2025-prac6.1p

## How to Run the App

### Prerequisites

- [Node.js](https://nodejs.org/)
- [Docker Desktop](https://www.docker.com/)
- [Git](https://git-scm.com/)
- VS Code or any code editor

---

### Step-by-Step Instructions

#### 1. Clone or Create Project

If not already done, create a project folder and place all files, including the video, as shown in the structure above.

#### 2. Place the Video

Put your video (e.g. `SampleVideo_1280x720_1mb.mp4`) inside the `public/` folder.

#### 3. Build the Docker Image

```bash
docker-compose build

```bash
docker-compose up

#### 4. Apply Kubernetes Deployment & Service

kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
kubectl get pods
kubectl get svc

#### 5. Access the App in Browser

kubectl get svc video-app-service

#### 6. Then visit

http://localhost:3000


#### Files Included

app.js
package.json
Dockerfile
public/SampleVideo_1280x720_1mb.mp4
deployment.yaml
service.yaml
README.md

#### Task Outcome

Successfully deployed Dockerized Node.js video app on Kubernetes.
Able to access and interact with the application in browser.
All deliverables pushed to GitHub repository and documented properly.

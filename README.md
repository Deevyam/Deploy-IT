# Deploy IT/Vercel Clone

### Prerequisite

- Node.JS: Basics
- Redis:Basics
- Learn Docker:
  - Part 1: [Docker in One Shot - Part 1](https://youtu.be/31k6AtW-b3Y?si=FIPffAKieiBGgo5c)[Important]
  - Part 2: [Docker in One Shot - Part 2](https://youtu.be/xPT8mXa-sJg?si=-6z_HkJZXsvrvSpO)[Important]
- Docker with AWS ECS and ECR: [Real World Docker Deployments with AWS](https://youtu.be/AiiFbsAlLaI?si=dKrFZFr7fLBXKSab)[Importent]

### Setup Guide

This Project contains following services and folders:

- `api-server`: HTTP API Server for REST API's
- `build-server`: Docker Image code which clones, builds and pushes the build to S3
- `s3-reverse-proxy`: Reverse Proxy the subdomains and domains to s3 bucket static assets

### Local Setup

1. Run `npm install` in all the 3 services i.e. `api-server`, `build-server` and `s3-reverse-proxy`
2. Docker build the `build-server` and push the image to AWS ECR.
3. Setup the `api-server` by providing all the required config such as TASK ARN and CLUSTER arn.
4. Run `node index.js` in `api-server` and `s3-reverse-proxy`

At this point following services would be up and running:

| S.No | Service            | PORT    |
| ---- | ------------------ | ------- |
| 1    | `api-server`       | `:9000` |
| 2    | `socket.io-server` | `:9002` |
| 3    | `s3-reverse-proxy` | `:8000` |

### Architecture
![Screenshot 2024-07-20 115048](https://github.com/user-attachments/assets/f85a4745-8fe9-41dd-aae0-6386b44d3cf4)

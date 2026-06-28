# Clarity CI Website

Official website for Clarity CI - a consulting firm specializing in SaaS and middleware solutions.

## Tech Stack

- **Frontend**: React + TypeScript + Vite
- **Styling**: CSS3 with CSS Variables
- **Routing**: React Router
- **Icons**: Lucide React
- **Deployment**: Docker + Kubernetes (K3s)
- **CI/CD**: GitHub Actions

## Development

### Prerequisites

- Node.js 20+
- npm

### Setup

```bash
# Clone the repository
git clone https://github.com/clarityci-tech/clarityci-website.git
cd clarityci-website

# Install dependencies
npm install

# Start development server
npm run dev
```

The development server will start at `http://localhost:5173`.

### Build

```bash
npm run build
```

The built files will be in the `dist` directory.

## Docker

### Build Image

```bash
docker build -t clarityci-website .
```

### Run Container

```bash
docker run -p 8080:80 clarityci-website
```

## Kubernetes Deployment

### Prerequisites

- K3s cluster running
- kubectl configured
- cert-manager installed with letsencrypt-prod cluster issuer

### Deploy

```bash
# Apply all manifests
kubectl apply -f k8s/

# Or deploy individually
kubectl apply -f k8s/namespace.yaml
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml
kubectl apply -f k8s/ingress.yaml
```

### Verify Deployment

```bash
kubectl get pods -n clarityci
kubectl get svc -n clarityci
kubectl get ingress -n clarityci
```

## CI/CD Pipeline

The GitHub Actions workflow automatically:

1. Builds the React application
2. Lints the code
3. Builds and pushes Docker image to GitHub Container Registry
4. Deploys to K3s cluster (on main branch only)

### Required Secrets

- `KUBECONFIG`: Base64 encoded kubeconfig for K3s cluster access (configured on self-hosted runner)

## Project Structure

```
clarityci-website/
├── .github/
│   └── workflows/
│       └── deploy.yml          # CI/CD pipeline
├── k8s/
│   ├── namespace.yaml          # Kubernetes namespace
│   ├── deployment.yaml         # Deployment manifest
│   ├── service.yaml            # Service manifest
│   └── ingress.yaml            # Ingress with TLS
├── src/
│   ├── components/             # Reusable components
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── pages/                  # Page components
│   │   ├── Home.tsx
│   │   ├── Services.tsx
│   │   ├── TimeScheme.tsx
│   │   ├── About.tsx
│   │   └── Contact.tsx
│   ├── App.tsx                 # Main app component
│   └── main.tsx                # Entry point
├── Dockerfile                  # Docker image definition
├── nginx.conf                  # Nginx configuration
└── README.md                   # This file
```

## Pages

- **Home**: Overview of Clarity CI with stats and features
- **Services**: Detailed service offerings and tech stack
- **TimeSCHEME**: Product page for the scheduling solution
- **About**: Company story, values, and timeline
- **Contact**: Contact form and company information

## License

© 2024 Clarity CI. All rights reserved.
# CI/CD Test

# Retail Sentinel AI - Demo Prototype

AI-powered anomaly detection platform for retail operations monitoring.

## Features

- Real-time anomaly detection dashboard
- Severity-based anomaly classification
- Root cause analysis with confidence scoring
- Actionable recommendations
- Auto-refreshing data (simulated)
- Responsive design

## Quick Start

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Open browser to `http://localhost:5173`

## Demo Data

The prototype uses simulated data that updates every 5 seconds to demonstrate:
- Multiple anomaly types (Inventory, Pricing, Sales, Transactions, Stock-out)
- Different severity levels (Critical, High, Medium, Low)
- Root cause analysis
- Recommended actions
- System health metrics

## Tech Stack

- React 18
- Vite
- Lucide React (icons)
- CSS3

## AWS Deployment Options

This prototype can be deployed using:
- **AWS Amplify**: Full-stack hosting with CI/CD
- **Amazon S3 + CloudFront**: Static site hosting
- **Amazon ECS**: Containerized deployment
- **AWS Lambda + API Gateway**: Serverless backend (for future API integration)

## Next Steps

For production implementation, refer to `.kiro/specs/retail-sentinel-ai/` for:
- Complete requirements document
- Detailed design document
- Implementation tasks with property-based testing

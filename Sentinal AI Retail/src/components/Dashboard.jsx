import React from 'react'
import { AlertTriangle, Activity, TrendingUp, Clock } from 'lucide-react'
import AnomalyCard from './AnomalyCard'
import MetricsCard from './MetricsCard'
import './Dashboard.css'

const Dashboard = ({ anomalies, metrics }) => {
  if (!metrics) {
    return <div className="loading">Loading dashboard...</div>
  }

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Retail Sentinel AI</h1>
        <p>Real-time Anomaly Detection & Monitoring</p>
      </header>

      <div className="metrics-grid">
        <MetricsCard
          icon={<AlertTriangle />}
          title="Total Anomalies"
          value={metrics.totalAnomalies}
          color="#f59e0b"
        />
        <MetricsCard
          icon={<AlertTriangle />}
          title="Critical"
          value={metrics.criticalCount}
          color="#ef4444"
        />
        <MetricsCard
          icon={<Activity />}
          title="System Health"
          value={`${metrics.systemHealth}%`}
          color="#10b981"
        />
        <MetricsCard
          icon={<Clock />}
          title="Avg Response"
          value={`${metrics.avgResponseTime}s`}
          color="#3b82f6"
        />
      </div>

      <div className="anomalies-section">
        <h2>Active Anomalies</h2>
        <div className="anomalies-list">
          {anomalies.length === 0 ? (
            <div className="no-anomalies">
              <TrendingUp size={48} />
              <p>No active anomalies detected</p>
            </div>
          ) : (
            anomalies.map(anomaly => (
              <AnomalyCard key={anomaly.id} anomaly={anomaly} />
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default Dashboard

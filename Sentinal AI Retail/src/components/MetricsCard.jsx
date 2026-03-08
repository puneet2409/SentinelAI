import React from 'react'
import './MetricsCard.css'

const MetricsCard = ({ icon, title, value, color }) => {
  return (
    <div className="metrics-card">
      <div className="metrics-icon" style={{ color }}>
        {icon}
      </div>
      <div className="metrics-content">
        <p className="metrics-title">{title}</p>
        <p className="metrics-value">{value}</p>
      </div>
    </div>
  )
}

export default MetricsCard

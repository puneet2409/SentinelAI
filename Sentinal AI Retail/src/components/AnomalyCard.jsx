import React, { useState } from 'react'
import { AlertCircle, ChevronDown, ChevronUp, MapPin, Clock, Lightbulb, Search } from 'lucide-react'
import './AnomalyCard.css'

const AnomalyCard = ({ anomaly }) => {
  const [expanded, setExpanded] = useState(false)

  const getSeverityColor = (severity) => {
    const colors = {
      Critical: '#ef4444',
      High: '#f59e0b',
      Medium: '#3b82f6',
      Low: '#6b7280'
    }
    return colors[severity] || '#6b7280'
  }

  const getTimeAgo = (timestamp) => {
    const minutes = Math.floor((Date.now() - new Date(timestamp)) / 60000)
    if (minutes < 1) return 'Just now'
    if (minutes < 60) return `${minutes}m ago`
    const hours = Math.floor(minutes / 60)
    return `${hours}h ago`
  }

  return (
    <div className="anomaly-card">
      <div className="anomaly-header" onClick={() => setExpanded(!expanded)}>
        <div className="anomaly-main">
          <AlertCircle 
            size={24} 
            style={{ color: getSeverityColor(anomaly.severity) }}
          />
          <div className="anomaly-info">
            <h3>{anomaly.type}</h3>
            <div className="anomaly-meta">
              <span className="meta-item">
                <MapPin size={14} />
                {anomaly.store}
              </span>
              <span className="meta-item">
                <Clock size={14} />
                {getTimeAgo(anomaly.detectedAt)}
              </span>
              <span 
                className="severity-badge"
                style={{ 
                  backgroundColor: getSeverityColor(anomaly.severity) + '20',
                  color: getSeverityColor(anomaly.severity)
                }}
              >
                {anomaly.severity}
              </span>
            </div>
          </div>
        </div>
        <button className="expand-btn">
          {expanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
      </div>

      {expanded && (
        <div className="anomaly-details">
          <div className="detail-section">
            <p className="detail-label">
              <AlertCircle size={16} />
              Description
            </p>
            <p className="detail-text">{anomaly.description}</p>
          </div>

          <div className="detail-section">
            <p className="detail-label">
              <Search size={16} />
              Root Cause Analysis
            </p>
            <p className="detail-text">{anomaly.rootCause}</p>
            <div className="confidence-bar">
              <div className="confidence-label">Confidence: {anomaly.confidence}%</div>
              <div className="confidence-track">
                <div 
                  className="confidence-fill"
                  style={{ width: `${anomaly.confidence}%` }}
                />
              </div>
            </div>
          </div>

          <div className="detail-section recommendation">
            <p className="detail-label">
              <Lightbulb size={16} />
              Recommended Action
            </p>
            <p className="detail-text">{anomaly.recommendation}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnomalyCard

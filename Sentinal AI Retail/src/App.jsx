import React, { useState, useEffect } from 'react'
import Dashboard from './components/Dashboard'
import { generateMockData } from './utils/mockData'
import './App.css'

function App() {
  const [anomalies, setAnomalies] = useState([])
  const [metrics, setMetrics] = useState(null)

  useEffect(() => {
    // Simulate real-time data updates
    const updateData = () => {
      const data = generateMockData()
      setAnomalies(data.anomalies)
      setMetrics(data.metrics)
    }

    updateData()
    const interval = setInterval(updateData, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="app">
      <Dashboard anomalies={anomalies} metrics={metrics} />
    </div>
  )
}

export default App

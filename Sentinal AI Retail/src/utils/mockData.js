// Generate mock data for demo purposes
export const generateMockData = () => {
  const stores = ['Store A', 'Store B', 'Store C', 'Store D']
  const anomalyTypes = [
    'Inventory Discrepancy',
    'Pricing Anomaly',
    'Sales Drop',
    'Unusual Transaction Pattern',
    'Stock-out Risk'
  ]
  const severities = ['Critical', 'High', 'Medium', 'Low']
  
  const anomalies = Array.from({ length: Math.floor(Math.random() * 5) + 3 }, (_, i) => {
    const severity = severities[Math.floor(Math.random() * severities.length)]
    const type = anomalyTypes[Math.floor(Math.random() * anomalyTypes.length)]
    const store = stores[Math.floor(Math.random() * stores.length)]
    
    return {
      id: `anomaly-${Date.now()}-${i}`,
      store,
      type,
      severity,
      detectedAt: new Date(Date.now() - Math.random() * 3600000).toISOString(),
      description: generateDescription(type, store),
      rootCause: generateRootCause(type),
      recommendation: generateRecommendation(type),
      confidence: Math.floor(Math.random() * 20) + 80
    }
  })

  const metrics = {
    totalAnomalies: anomalies.length,
    criticalCount: anomalies.filter(a => a.severity === 'Critical').length,
    highCount: anomalies.filter(a => a.severity === 'High').length,
    systemHealth: Math.floor(Math.random() * 10) + 90,
    avgResponseTime: Math.floor(Math.random() * 10) + 15
  }

  return { anomalies, metrics }
}

const generateDescription = (type, store) => {
  const descriptions = {
    'Inventory Discrepancy': `${store} showing ${Math.floor(Math.random() * 50) + 10}% inventory variance`,
    'Pricing Anomaly': `Unusual pricing detected for ${Math.floor(Math.random() * 20) + 5} items in ${store}`,
    'Sales Drop': `${store} experiencing ${Math.floor(Math.random() * 30) + 10}% sales decline`,
    'Unusual Transaction Pattern': `Abnormal transaction frequency detected in ${store}`,
    'Stock-out Risk': `${Math.floor(Math.random() * 15) + 5} items at risk of stock-out in ${store}`
  }
  return descriptions[type] || `Anomaly detected in ${store}`
}

const generateRootCause = (type) => {
  const causes = {
    'Inventory Discrepancy': 'Potential data sync issue between POS and inventory system',
    'Pricing Anomaly': 'Promotion schedule conflict with regular pricing engine',
    'Sales Drop': 'Competitor promotion activity detected in nearby location',
    'Unusual Transaction Pattern': 'Possible system integration delay causing batch processing',
    'Stock-out Risk': 'Supply chain delay combined with higher than expected demand'
  }
  return causes[type] || 'Root cause analysis in progress'
}

const generateRecommendation = (type) => {
  const recommendations = {
    'Inventory Discrepancy': 'Trigger immediate inventory reconciliation and verify POS sync status',
    'Pricing Anomaly': 'Review promotion schedule and adjust pricing rules to resolve conflicts',
    'Sales Drop': 'Implement targeted promotion and monitor competitor activity',
    'Unusual Transaction Pattern': 'Check system integration health and consider real-time processing',
    'Stock-out Risk': 'Expedite reorder and consider alternative suppliers for critical items'
  }
  return recommendations[type] || 'Investigating optimal corrective action'
}

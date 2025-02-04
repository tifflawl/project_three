import { useState, useEffect } from 'react'

const DateTime = () => {
  const [time, setTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const options = {
        timeZone: 'America/New_York', // Eastern Time
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true // Adjust based on preference
      }
      setTime(new Date().toLocaleString('en-US', options))
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      <p>
        The time is <b>{time}</b>
      </p>
    </div>
  )
}

export default DateTime

import React from 'react'
import './Activity.css'
import dummyData from '../../dummyData'

function Activity() {
  return (
   <div className="activity-container">
        <div className="activity-title">
          <h1>Activity Feed</h1>
        </div>
        <div className="activity-details">
          {dummyData.map((data) => (
            <div key={data.id} className="activity-card">
              <div className="activity-profile">
                <img src={data.profile} alt="profile" />
              </div>
              <div className="activity-content">
                <div className="activity-content-top">
                  <span className='creator'>{data.created_by}</span> created < span className='activity'>{data.activity}</span>
                </div>
                <div className="activity-content-bottom">
                  <p>{new Date(data.creation_date).toLocaleString()}</p>                 
                </div>
              </div>
            </div>
          ))}
        </div>
   </div>
  )
}

export default Activity
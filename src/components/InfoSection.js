import React from 'react';
import './InfoSection.css'; // Make sure you create InfoSection.css for styling

const InfoSection = () => {
  return (
    <div className="info-section">
      <div className="general-info">
        <h3>Bike Shop Information</h3>
        <ul>
          <li><strong>Working Days:</strong> Monday to Saturday (Closed on Sundays)</li>
          <li><strong>Working Hours:</strong> 9:00 A.M. to 6:00 P.M.</li>
          <li><strong>Available Bike Models:</strong></li>
          <ul>
            <li>Speedster 1000</li>
            <li>Mountain Xtreme</li>
            <li>Urban Cruiser</li>
            <li>Electric Flash</li>
          </ul>
          <li><strong>Services:</strong> Maintenance, Repairs, Customizations</li>
          <li><strong>Contact Us:</strong> Call us at +123 456 7890 or visit our store</li>
        </ul>
      </div>
      <div className="image-section">
        <img src="https://www.muthootcap.com/wp-content/uploads/2022/11/KTM-RC-200.jpg" alt="Bike Showroom" />
      </div>
    </div>
  );
}

export default InfoSection;

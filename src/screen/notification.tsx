import React from 'react';
import './NotificationsScreen.css'; // Import your styles
import NotifcIcon from "./../assets/images/heart.png";


const notificationData = [
    { title: "Title 1", meesage: "message 1", timestamp: "2 minutes ago" },
    { title: "Title 2", meesage: "message 2", timestamp: "5 minutes ago" },
    { title: "Title 3", meesage: "message 3", timestamp: "10 minutes ago" },
    { title: "Title 3", meesage: "message 3", timestamp: "1 hour ago" },
    { title: "Title 3", meesage: "message 3", timestamp: "yesterday" },
    { title: "Title 3", meesage: "message 3", timestamp: "1 month ago" }
]

const NotificationsScreen: React.FC = () => {
    return (
        <div className="notifications-container">
            <div className="notifications-list">
                {notificationData.map((notification, index) => (
                    <div className="notification" key={index}>
                        <div className="notification-icon">
                            <img src={NotifcIcon} alt="Notification Icon" />
                        </div>
                        <div className="notification-content">
                            <h3>{notification.title}</h3>
                            <p>{notification.meesage}</p>

                        </div>
                        <div className="notification-timestamp">{notification.timestamp}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NotificationsScreen;

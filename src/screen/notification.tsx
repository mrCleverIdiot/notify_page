import React, { useEffect, useState } from 'react';
import './NotificationsScreen.css';
import NotifcIcon from './../assets/images/heart.png';
import axios from 'axios';

interface Notification {
    title: string;
    message: string;
    timestamp: string;
}

const NotificationsScreen: React.FC = () => {
    const [notificationData, setNotificationData] = useState<Notification[]>([]);

    const fetchData = async () => {
        try {
            const response = await axios.get('https://eog3obz6g1ifng9.m.pipedream.net'); // Replace with your API URL
            const data = response.data;
            console.log('fetching data:', data);
            setNotificationData(data); // Update state with fetched data
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

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
                            <p>{notification.message}</p>
                        </div>
                        <div className="notification-timestamp">{notification.timestamp}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NotificationsScreen;

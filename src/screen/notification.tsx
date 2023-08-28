import React, { useEffect, useState } from 'react';
import './NotificationsScreen.css';
import NotifcIcon from './../assets/images/heart.png';
import axios from 'axios';

interface Notification {
    title: string;
    message: string;
    timestamp: string;
}
function calculateTimeDifference(timestamp: string): string {
    const now = new Date();
    const targetTime = new Date(timestamp);

    const timeDifference = now.getTime() - targetTime.getTime();
    const minutesDifference = Math.floor(timeDifference / (1000 * 60));

    if (minutesDifference < 2) {
        return 'Just now';
    } else if (minutesDifference < 60) {
        return `${minutesDifference} minute${minutesDifference > 1 ? 's' : ''} ago`;
    } else if (minutesDifference < 1440) { // 1440 minutes in a day
        const hoursDifference = Math.floor(minutesDifference / 60);
        return `${hoursDifference} hour${hoursDifference > 1 ? 's' : ''} ago`;
    } else if (minutesDifference < 10080) { // 10080 minutes in a week
        const daysDifference = Math.floor(minutesDifference / 1440);
        return `${daysDifference} day${daysDifference > 1 ? 's' : ''} ago`;
    } else if (minutesDifference < 43200) { // 302400 minutes in a month (approx. 30 days)
        const weeksDifference = Math.floor(minutesDifference / 10080);
        return `${weeksDifference} week${weeksDifference > 1 ? 's' : ''} ago`;
    } else if (minutesDifference < 525600) { // 525600 minutes in a year
        const monthsDifference = Math.floor(minutesDifference / 43200);
        return `${monthsDifference} month${monthsDifference > 1 ? 's' : ''} ago`;
    } else {
        const yearsDifference = Math.floor(minutesDifference / 525600);
        return `${yearsDifference} year${yearsDifference > 1 ? 's' : ''} ago`;
    }
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
                        <div className="notification-timestamp">{calculateTimeDifference(notification.timestamp)}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NotificationsScreen;

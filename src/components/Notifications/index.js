import React, { useEffect, useState, useMemo } from 'react';
import { useSelector } from 'react-redux';

import api from '../../services/api';

import { Container, Badge, NotificationList, Notification } from './styles';
import { MdNotifications } from 'react-icons/md';

export default function Notifications() {
  const [notifications, setNotifications] = useState([]);
  const [visible, setVisible] = useState(false);

  const profile = useSelector((state) => state.user.profile);

  const hasUnread = useMemo(
    () => !!notifications.find((notification) => notification.read === false),
    [notifications]
  );

  useEffect(() => {
    async function loadNotifications() {
      const response = await api.get('notifications');
      const data = response.data.map((notification) => ({
        ...notification,
      }));

      setNotifications(data);
    }
    loadNotifications();
  }, []);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  async function handleMarkAsRead(id) {
    await api.put(`/notifications/${id}`);

    setNotifications(
      notifications.map((notification) =>
        notification._id === id ? { ...notification, read: true } : notification
      )
    );
  }

  return (
    <Container>
      <Badge onClick={handleToggleVisible} hasUnread={hasUnread}>
        <MdNotifications size={20} />
      </Badge>
      <NotificationList visible={visible}>
        {notifications &&
          notifications.map((notification) => (
            <Notification key={notification._id} unread={!notification.read}>
              {!notification.read ? (
                <>
                  <p>{notification.content}</p>
                  <button onClick={() => handleMarkAsRead(notification._id)}>
                    Marcar como lida
                  </button>
                </>
              ) : (
                <span>{profile.name}, todas suas notificação foram lidas!</span>
              )}
            </Notification>
          ))}
      </NotificationList>
    </Container>
  );
}

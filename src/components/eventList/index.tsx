import React from 'react'
import { Event } from '../../types/event';
import { List, Card, message } from "antd";
import { getEvents } from '../../services/eventService';

const EventList: React.FC = () => {
  const [events, setEvents] = React.useState<Event[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);

  const fetchEvents = async () => {
    try {
      const fetchedEvents = await getEvents();
      setEvents(fetchedEvents)
    } catch (error) {
      message.error("Failed to fetch events")
    } finally {
      setLoading(false)
    }
  }

  React.useEffect(() => {
    fetchEvents()
  }, [])

  return (
    <List
      loading={loading}
      grid={{ gutter: 16, column: 3 }}
      dataSource={events}
      renderItem={(event) => (
        <List.Item>
          <Card title={event.title} className="hover:shadow-lg transition-shadow">
            <p>{event.description}</p>
            <p>Date: {event.date}</p>
            <p>Location: {event.location}</p>
          </Card>
        </List.Item>
      )}
    />
  )
}

export default EventList
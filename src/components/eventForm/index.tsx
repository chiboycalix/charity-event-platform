import React from 'react';
import { Form, Input, DatePicker, Button, message } from 'antd';
import { Event } from '../../types/event';
import { createEvent } from '../../services/eventService';

const EventForm: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = async (values: any) => {
    try {
      const event: Event = {
        title: values.title,
        description: values.description,
        date: values.date.format('YYYY-MM-DD'),
        location: values.location,
      };
      await createEvent(event);
      message.success('Event created successfully');
      form.resetFields();
    } catch (error) {
      message.error('Failed to create event');
    }
  };

  return (
    <Form form={form} onFinish={onFinish} layout="vertical">
      <Form.Item name="title" label="Title" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="description" label="Description" rules={[{ required: true }]}>
        <Input.TextArea />
      </Form.Item>
      <Form.Item name="date" label="Date" rules={[{ required: true }]}>
        <DatePicker />
      </Form.Item>
      <Form.Item name="location" label="Location" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Create Event
        </Button>
      </Form.Item>
    </Form>
  );
};

export default EventForm;
import React from 'react'
import { Layout as AntLayout, Menu } from "antd";
import { Link } from 'react-router-dom';

const { Header, Content, Footer } = AntLayout;

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <AntLayout className='min-h-screen'>
      <Header className="bg-blue-600">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" className="bg-blue-600">
          <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
          <Menu.Item key="2"><Link to="/events">Events</Link></Menu.Item>
          <Menu.Item key="3"><Link to="/volunteers">Volunteers</Link></Menu.Item>
        </Menu>
      </Header>
      <Content className='p-8'>
        <div className='bg-white p-6 min-h-[280px]'>{children}</div>
      </Content>
      <Footer className="text-center">Charity Event Platform ©2024</Footer>
    </AntLayout>
  )
}

export default Layout
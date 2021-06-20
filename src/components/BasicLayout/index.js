import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import Content from '../Content/index'
import 'antd/dist/antd.css';

import './index.css';

class BasicLayout extends Component {
  render() {
    return (
      <Layout>
        <Layout.Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <div className="logo" />
          {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">首頁</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu> */}
        </Layout.Header>
        <Layout.Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            {/* <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item> */}
          </Breadcrumb>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 800 }}>
            <Content />
          </div>
        </Layout.Content>
        <Layout.Footer style={{ textAlign: 'center' }}>©2021</Layout.Footer>
      </Layout>
    )
  }
}

export default BasicLayout;

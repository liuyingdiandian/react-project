import React from "react";
import { Router, Route, Switch } from "dva/router";
import { Layout, Menu, Breadcrumb } from "antd";
import IndexPage from "./pages/IndexPage";
import Products from "./pages/Products";
const { Header, Content, Footer } = Layout;

function RouterConfig({ history }) {
  return (
    <Layout>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <div className="logo" />
        <Menu.Item theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu.Item>
      </Header>
      <Content
        className="site-layout"
        style={{ padding: "0 50px", marginTop: 64 }}
      >
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>

        <Router history={history}>
          <Switch>
            <Route path="/" exact component={IndexPage} />
            <Route path="/products" exact component={Products} />
          </Switch>
        </Router>
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 380 }}
        ></div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
    // <div
    //   className="site-layout-background"
    //   style={{ padding: 24, minHeight: 380 }}
    // >
    //   <Router history={history}>
    //     <Switch>
    //       <Route path="/" exact component={IndexPage} />
    //       <Route path="/products" exact component={Products} />
    //     </Switch>
    //   </Router>
    // </div>
  );
}

export default RouterConfig;

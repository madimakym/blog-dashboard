import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from 'antd';
import Sidebar from './components/Sidebar';
import Header from "./components/Header";
import PostList from "./pages/post/post-list";


function App() {
  return (
    <BrowserRouter>
      <Layout className="layout">
        <input type="checkbox" id="sidebar-toggle" />
        <Sidebar />
        <div className="main-content">
          <Header />
          <main>
            <div className="site-layout-content">
              <Routes>
                <Route path="/post" element={<PostList />} />
              </Routes>
            </div>
          </main>
        </div>
      </Layout>
    </BrowserRouter>
  );
}



export default App;
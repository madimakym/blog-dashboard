import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from 'antd';
import Sidebar from './components/Sidebar';
import Header from "./components/Header";
import PostList from "./pages/post/post-list";
import CategoryList from "./pages/category/category-list";
import CategoryCreate from "./pages/category/category-create";
import CategoryEdit from "./pages/category/category-edit";


function App() {
  return (
    <BrowserRouter>
      <Layout className="layout">
        <input type="checkbox" id="sidebar-toggle" />
        <Sidebar />
        <div className="main-content">
          <Header />
          <main>
            <Routes>
              <Route path="/category" element={<CategoryList />} />
              <Route path="/category/create" element={<CategoryCreate />} />
              <Route path="/category/edit/:id" element={<CategoryEdit />} />
              <Route path="/post" element={<PostList />} />
            </Routes>
          </main>
        </div>
      </Layout>
    </BrowserRouter>
  );
}



export default App;
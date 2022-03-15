import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from 'antd';
import Sidebar from './components/Sidebar';
import Header from "./components/Header";
import PostList from "./pages/post/post-list";
import CategoryList from "./pages/category/category-list";
import CategoryCreate from "./pages/category/category-create";
import CategoryEdit from "./pages/category/category-edit";
import PostCreate from "./pages/post/post-create";
import PostEdit from "./pages/post/post-edit";


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
              <Route path="/post/create" element={<PostCreate />} />
              <Route path="/post/edit/:id" element={<PostEdit />} />
            </Routes>
          </main>
        </div>
      </Layout>
    </BrowserRouter>
  );
}



export default App;
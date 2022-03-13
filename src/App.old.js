import { BrowserRouter, Route, Routes, Navigate, Outlet } from "react-router-dom";
import { Layout, Breadcrumb } from 'antd';
import Sidebar from './components/Sidebar';


function App() {
  return (

    // <Layout className="layout">
    //   <input type="checkbox" id="sidebar-toggle" />
    //   <Sidebar />
    //   <div className="main-content">
    //     <header>
    //       <div className="search-wrapper">
    //         <span className="ti-search"></span>
    //         <input type="search" placeholder="Search" />
    //       </div>

    //       <div className="social-icons">
    //         <span className="ti-bell"></span>
    //         <span className="ti-comment"></span>
    //         <div></div>
    //       </div>
    //     </header>
    // <main>
    //   <Breadcrumb style={{ margin: '16px 0' }}>
    //     <Breadcrumb.Item>Home</Breadcrumb.Item>
    //     <Breadcrumb.Item>List</Breadcrumb.Item>
    //     <Breadcrumb.Item>App</Breadcrumb.Item>
    //   </Breadcrumb>
    //   <div className="site-layout-content">Content</div>
    // </main>
    //   </div>
    // </Layout>
    <BrowserRouter>
      <Routes>
        {/* <Route exact path="/" element={<HomePage />} />
        <Route exact path="/how-it-works" element={<HowItWorksPage />} /> */}
        <main>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content">Content</div>
        </main>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
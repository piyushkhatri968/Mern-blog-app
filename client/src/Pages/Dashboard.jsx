import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DashSidebar from "../Components/DashSidebar";
import DashProfile from "../Components/DashProfile";
import DashPosts from "../Components/DashPosts";
import DashUsers from "../Components/DashUsers";
import DashComments from "../Components/DashComments";
import DashboardComp from "../Components/DashboardComp";
const Dashboard = () => {
  const location = useLocation();
  const [tab, setTab] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
    
  }, [location.search]);

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="md:w-64">
        {/* SideBar */}
        <DashSidebar />
      </div>

      {/* Profile .... */}
      {tab === "profile" && <DashProfile />}

      {/* Posts .... */}
      {tab === "posts" && <DashPosts />}

      {/* Users .....*/}
      {tab === "users" && <DashUsers />}

      {/* Comments */}
      {tab === "comments" && <DashComments />}

      {/* dashboard component */}
      {tab === "dash" && <DashboardComp />}
    </div>
  );
};

export default Dashboard;

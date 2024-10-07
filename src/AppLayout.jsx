import React, { useState, useEffect, useContext } from "react";
import {
  MenuOutlined,
  RightOutlined,
  CloseOutlined,
  NotificationOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, Modal, theme } from "antd";
import fluent from "../assets/fluent";
import gala from "../assets/gala";
import layer from "../assets/layer";
import Vector from "../assets/vector";
import Dashboard from "./Dashboard";
import Overview from "./Overview";
import { FormDataContext } from "../utils/FormDataContext";
import Form from "./Form";
import CampaignDetails from "./CampaignDetails";
import Search from "./Search";
import Mobile from "./Mobile";
import Notification from "../assets/notification";

const { Content, Sider } = Layout;

const mainNavItems = [
  "Dashboard",
  "Campaigns",
  "Messages",
  "Earning History",
  "Settings",
];
const icons = [HomeOutlined, NotificationOutlined, fluent, layer, gala];

const ITEMS = [
  {
    url: "https://tinypic.host/images/2024/10/04/Logo.png",
    title: "TechGuru Tech Revie..",
  },
  {
    url: "https://tinypic.host/images/2024/10/04/Logoc44eb3b5a49a9e9d.png",
    title: "BeautyBlend Makeu...",
  },
  {
    url: "https://tinypic.host/images/2024/10/05/Logo.png",
    title: "Wanderlust Adventure Series",
  },
  {
    url: "https://tinypic.host/images/2024/10/04/Logo-2.png ",
    title: "Fitness Fusion Workout Challenge",
  },
  {
    url: "https://tinypic.host/images/2024/10/05/Logo03a957a11006bfdc.png",
    title: "Home Harmony DI...",
  },
];

const items2 = mainNavItems.map((label, index) => {
  const key = `item${index + 1}`;
  const icon = icons[index];
  return {
    key,
    icon: React.createElement(icon),
    label,
  };
});

const AppLayout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const { campaigns } = useContext(FormDataContext);
  const [selectedKey, setSelectedKey] = useState("item1");

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const toggleSidebar = () => {
    setSidebarOpen((prevState) => !prevState);
  };

  const toggleModal = () => {
    setModalOpen((prev) => !prev);
  };

  const truncateTitle = (title, maxLength = 20) => {
    if (title.length > maxLength) {
      return title.slice(0, maxLength) + "...";
    }
    return title;
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSidebarOpen(true);
      } else {
        setSidebarOpen(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Layout
      style={{ minHeight: "100vh", paddingBottom: "30px" }}
      className="font-sf-pro"
    >
      {/* Hamburger Menu Button / Close Button */}
      <button
        className="absolute top-4 right-4 md:hidden p-4 text-primary z-10"
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? <CloseOutlined /> : <MenuOutlined />}
      </button>

      <div className="md:hidden flex absolute top-4 left-4 items-center justify-between w-[60%]">
        <img
          src="https://tinypic.host/images/2024/10/05/Profile.png "
          alt="logo"
          className="w-[50px] h-[50px]"
        />
        <h1 className="text-lg text-primary font-bold p-4">Micro-Influx</h1>
      </div>

      {/* Sidebar */}
      <Sider
        style={{
          background: colorBgContainer,
          transition: "width 0.3s ease",
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          zIndex: 10,
          transform: isSidebarOpen ? "translateX(0)" : "translateX(-100%)",
          justifyContent: "space-between",
        }}
        width={isSidebarOpen ? 300 : 0}
        className={`fixed md:relative rounded-tr-2xl rounded-br-2xl ${
          isSidebarOpen ? "" : "hidden md:block"
        }`}
      >
        <div className="flex p-4 px-10 mt-6 items-center justify-between">
          <h1 className="md:text-lg text-[25px]  text-primary font-bold ">
            Micro-Influx
          </h1>
          <Notification className="md:hidden" />
        </div>

        <div className="flex-grow">
          {/* Top section */}
          <div className="flex items-center px-6">
            <div className="flex gap-2 items-center">
              <img
                src="https://tinypic.host/images/2024/10/04/Profile.png"
                alt="logo"
                className="w-[50px] h-[50px]"
              />
              <div>
                <h2 className="text-primary text-[18px] font-bold">
                  Olivia Jacobs
                </h2>
                <p>Lifestyle Influencer</p>
              </div>
            </div>
            <Vector className="ml-12" />
          </div>

          {/* Menu Section */}
          <Menu
            mode="inline"
            selectedKeys={[selectedKey]}
            style={{
              flexGrow: 1,
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
            }}
            items={items2.map((item) => ({
              ...item,
              style: {
                backgroundColor: selectedKey === item.key ? "#053559" : "",
                color: selectedKey === item.key ? "white" : "",
              },
              onClick: () => setSelectedKey(item.key),
            }))}
            className="px-6"
          />

          {/*Mobile only section*/}
          <Mobile />
        </div>

        <div className="p-4 px-8 xl:mt-20 mt-12 md:mb-4 pb-16 md:pb-0 mb-8">
          <p className="mb-2 flex items-center gap-6">
            <span>Campaign Shortcuts</span>
            <button
              className="bg-[#E7F5FF] rounded-lg py-1 px-2 text-[10px]"
              onClick={toggleModal}
            >
              View all
            </button>
          </p>
          <div>
            {ITEMS.map((item, index) => (
              <div className="flex items-center gap-2" key={index}>
                <img className="w-[50px] h-[50px]" src={item.url} alt="" />
                <p>{truncateTitle(item.title)}</p>
                <RightOutlined />
              </div>
            ))}
          </div>
        </div>
      </Sider>

      {/* Main Content */}
      <Layout style={{ transition: "margin-left 0.3s ease" }}>
        <Content
          style={{ minHeight: 280 }}
          className="md:px-[24px] overflow-y-scroll"
        >
          <Dashboard />
          <Overview />
          <Search />

          {/* Display CampaignDetails if data exists */}
          <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-2 md:gap-4 xl:mt-[-70px]  md:mt-[-20px] xl:mr-[20px]">
            {campaigns.length > 0 &&
              campaigns.map((data, index) => (
                <CampaignDetails key={index} data={data} index={index} />
              ))}
          </div>
        </Content>
      </Layout>

      {/* Modal for Adding Campaigns */}
      <Modal
        title="Add New Campaign"
        visible={isModalOpen}
        onCancel={toggleModal}
        footer={null}
        destroyOnClose
      >
        <Form onSubmit={toggleModal} />
      </Modal>
    </Layout>
  );
};

export default AppLayout;

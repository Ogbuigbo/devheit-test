import React, { useState } from "react";
import Plus from "../assets/plus";
import Message from "../assets/message";
import Notification from "../assets/notification";
import { Modal } from "antd";
import Form from "./Form";

function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="mt-[40px] md:flex justify-between items-center hidden">
      <h1 className="text-primary text-lg">Dashboard</h1>

      <div className="flex items-center gap-4 xl:pr-10">
        <button
          onClick={showModal}
          className="bg-primary flex items-center gap-2 rounded-lg px-4 py-2 cursor-pointer"
        >
          <Plus />
          <p className="text-white">Create a New Campaign</p>
        </button>

        <div
          className={`modal-backdrop ${isModalOpen ? "active" : ""}`}
          onClick={handleCancel}
        ></div>

        <Modal
          title="Create a New Campaign"
          open={isModalOpen}
          onCancel={handleCancel}
          footer={null}
          destroyOnClose={true}
        >
          <Form onClose={handleCancel} />
        </Modal>

        <div className="lg:flex gap-4 items-center hidden ">
          <Message />
          <Notification />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

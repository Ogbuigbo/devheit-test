import React, { useState } from "react";
import Elipse from "../assets/elipse";
import Facebook from "../assets/darksocials/darkface";
import Youtube from "../assets/darksocials/darkyoutube";
import Instagram from "../assets/darksocials/darkgram";
import Tok from "../assets/darksocials/darktok";
import Twitter from "../assets/darksocials/darktwit";
import Save from "../assets/save";
import { Modal } from "antd";
import Form from "./Form";

// AFunction that helps abbreviate the first two words of the campaign title
const abbreviateTitle = (title) => {
  const words = title.split(" ");
  return words
    .slice(0, 2)
    .map((word) => word.charAt(0).toUpperCase())
    .join("");
};

const CampaignDetails = ({ data, index }) => {
  const abbreviatedTitle = abbreviateTitle(data.campaignTitle);

  const colors = [
    "#FF5733",
    "#33FF57",
    "#3357FF",
    "#F1C40F",
    "#8E44AD",
    "#E67E22",
    "#3498DB",
  ];
  const bgColor = colors[index % colors.length];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="  shadow-md bg-white p-6  rounded-lg flex flex-col gap-4">
      <div className="flex relative items-center gap-2 ">
        <div
          className="rounded-lg w-10 h-10 flex items-center justify-center font-bold"
          style={{ backgroundColor: bgColor, color: "white" }}
        >
          {abbreviatedTitle}
        </div>

        <div>
          <h1 className="font-bold text-primary">{data.campaignTitle}</h1>
          <div className="flex gap-2 text-[14px]">
            <p>{data.brandName}</p>
            <Elipse />
            <span>Product Review</span>
          </div>
        </div>

        <div className="flex absolute top-[-1px] right-[-1px] gap-3">
          <p className="text-[10px]">Posted 2 day ago</p>
          <Save />
        </div>
      </div>

      <p>{data.description}</p>

      <div>
        <h2 className="text-primary">Channels</h2>
        <div className="flex gap-1 items-center mt-2">
          <Facebook onClick={() => toggleChannel("Facebook")} />
          <Tok onClick={() => toggleChannel("Tok")} />
          <Instagram onClick={() => toggleChannel("Instagram")} />
          <Youtube onClick={() => toggleChannel("Youtube")} />
          <Twitter onClick={() => toggleChannel("Twitter")} />
          <p className="text-primary">+2 more</p>
        </div>
      </div>

      <div className="text-primary flex justify-between">
        <div className="flex flex-col">
          <h1>Budget</h1>
          <p className="text-xl font-bold">{data.budget}</p>
        </div>
        <button
          onClick={showModal}
          className="bg-primary text-white py-3 px-6 mt-4 rounded-lg"
        >
          Apply Now
        </button>

        {/* Modal Component */}
        <Modal
          title="Create a New Campaign"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={null}
          destroyOnClose={true}
          bodyStyle={{ padding: 0 }}
        >
          <Form onClose={handleCancel} />
        </Modal>
      </div>
    </div>
  );
};

export default CampaignDetails;

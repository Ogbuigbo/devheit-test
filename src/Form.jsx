import React, { useState, useContext } from "react";
import { Select } from "antd";
import { FormDataContext } from "../utils/FormDataContext";

function Form({ onClose }) {
  const [campaignTitle, setCampaignTitle] = useState("");
  const [brandName, setBrandName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [budget, setBudget] = useState("");
  const [channels, setChannels] = useState([]);
  const { addCampaign } = useContext(FormDataContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      campaignTitle,
      brandName,
      category,
      description,
      budget,
      channels,
    };

    addCampaign(formData); // Add the new campaign to the context

    // Reset form fields
    setCampaignTitle("");
    setBrandName("");
    setCategory("");
    setDescription("");
    setBudget("");
    setChannels([]);

    onClose(); // Close the modal after form submission
  };

  const toggleChannel = (channel) => {
    setChannels((prevChannels) => {
      if (prevChannels.includes(channel)) {
        return prevChannels.filter((c) => c !== channel);
      } else {
        return [...prevChannels, channel];
      }
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-4">
        <div className="flex flex-col gap-2">
          <label className="flex items-center">Campaign Title</label>
          <input
            className="w-full border-gray p-2 placeholder-[#828282] font-semibold text-sm border outline-none text-[20px]"
            placeholder="Enter name here"
            type="text"
            value={campaignTitle}
            onChange={(e) => setCampaignTitle(e.target.value)}
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="flex items-center">Brand Name</label>
          <input
            className="w-full border-gray p-2 placeholder-[#828282] font-semibold text-sm border outline-none text-[20px]"
            placeholder="Enter your brand name here"
            type="text"
            value={brandName}
            onChange={(e) => setBrandName(e.target.value)}
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="flex items-center">Campaign Category</label>
          <Select
            showSearch
            style={{ width: "100%" }}
            placeholder="Select your company category"
            optionFilterProp="label"
            onChange={(value) => setCategory(value)}
            options={[
              { value: "Entertainment", label: "Entertainment" },
              { value: "Movie", label: "Movie" },
              { value: "Games", label: "Games" },
            ]}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="flex items-center">Campaign Description</label>
          <textarea
            className="w-full border-gray px-4 pt-2 placeholder-[#828282] font-semibold text-sm border outline-none text-[20px]"
            placeholder="Enter your campaign description here"
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="flex items-center">Select Preferred Channels</label>
          <div className="flex gap-4 mt-2">
            {/* Add your channel icons here */}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="flex items-center">Campaign Budget</label>
          <input
            className="w-full border-gray p-2 placeholder-[#828282] font-semibold text-sm border outline-none text-[20px]"
            placeholder="Enter your campaign budget"
            type="text"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            required
          />
        </div>

        <div className="flex items-baseline justify-center ">
          <button
            type="submit"
            className="bg-primary text-white p-2 mt-4 rounded px-12"
          >
            Create New Campaign
          </button>
        </div>
      </div>
    </form>
  );
}

export default Form;

import React, { useState, useContext } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { FormDataContext } from "../utils/FormDataContext";
import { Select } from "antd";
import Grid from "../assets/view";
import List from "../assets/list";

const SearchCampaigns = () => {
  const { campaigns } = useContext(FormDataContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [submittedSearch, setSubmittedSearch] = useState("");

  const handleSearchInputChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedSearch(searchTerm);
  };

  const filteredCampaigns = campaigns.filter((campaign) =>
    campaign.campaignTitle.toLowerCase().includes(submittedSearch)
  );

  return (
    <div className="mt-16 md:mt-2 lg:px-8 px-2 flex flex-col gap-6">
      <div className="w-full flex md:justify-between justify-center mt-[20px] items-center">
        <h1 className="text-lg font-medium hidden md:flex text-primary">
          Explore Campaigns
        </h1>

        {/* Form for search input */}
        <form
          onSubmit={handleSubmit}
          className="flex justify-between flex-row-reverse md:flex-row py-1 bg-[#E7F5FF] xl:w-[450px] md:w-[350px] w-full pl-4 rounded-lg"
        >
          <input
            type="text"
            placeholder="Search Description"
            className="bg-[#E7F5FF] outline-none w-full"
            value={searchTerm}
            onChange={handleSearchInputChange}
          />
          <button type="submit" className="md:bg-primary py-2 px-4 rounded-lg">
            <SearchOutlined className="md:text-white text-primary " />
          </button>
        </form>
      </div>

      <div className="lg:flex justify-between items-center hidden">
        <div>
          <p>
            Search results: <span className="font-medium text-primary">432 Blog</span> post
            campaigns
          </p>
        </div>

        <div className="flex items-center gap-4">
          <p className="">Sort by:</p>
          <Select
            showSearch
            style={{ width: "150px" }}
            placeholder="Category"
            optionFilterProp="label"
            options={[
              { value: "Entertainment", label: "Entertainment" },
              { value: "Movie", label: "Movie" },
              { value: "Games", label: "Games" },
            ]}
            bordered={false}
            className="custom-select " // Used a custom class for styling
          />
          <div className="flex gap-2">
            <Grid />
            <List />
          </div>
        </div>
      </div>

      <div className="p-4 xl:mb-8">
        {submittedSearch && filteredCampaigns.length > 0 ? (
          <ul className="list-disc pl-6">
            {filteredCampaigns.map((campaign, index) => (
              <li key={index} className="text-lg">
                {campaign.campaignTitle} -{" "}
                <span className="font-semibold">Your blog is here!</span>
              </li>
            ))}
          </ul>
        ) : (
          submittedSearch && <p>No campaigns found for "{submittedSearch}"</p>
        )}
      </div>
    </div>
  );
};

export default SearchCampaigns;

import React, { createContext, useState, useEffect } from "react";

export const FormDataContext = createContext();

export const FormDataProvider = ({ children }) => {
  // Defined some initial dummy data for campaigns
  const initialDummyCampaigns = [
    {
      campaignTitle: "Epic Social Buzz",
      brandName: "Samsung",
      category: "Technology",
      description:
        "Aliquam massa donec proin sit duis magna eu maecenas. Ultricies id mattis lobortis proin congue proin elementum. Sed ac porttitor metus ante et suspesstn ....",
      budget: "$1000 - $2,000",
      channels: ["Facebook", "Youtube"],
    },
    {
      campaignTitle: "Epic Social Buzz",
      brandName: "Samsung",
      category: "Technology",
      description:
        "Aliquam massa donec proin sit duis magna eu maecenas. Ultricies id mattis lobortis proin congue proin elementum. Sed ac porttitor metus ante et suspesstn ....",
      budget: "$1000 - $2,000",
      channels: ["Facebook", "Youtube"],
    },
    {
      campaignTitle: "Viral Social Sparks",
      brandName: "Samsung",
      category: "Technology",
      description:
        "Aliquam massa donec proin sit duis magna eu maecenas. Ultricies id mattis lobortis proin congue proin elementum. Sed ac porttitor metus ante et suspesstn ....",
      budget: "$1000 - $2,000",
      channels: ["Facebook", "Youtube"],
    },
  ];

  const [campaigns, setCampaigns] = useState(() => {
    const storedCampaigns = localStorage.getItem("campaigns");
    return storedCampaigns
      ? JSON.parse(storedCampaigns)
      : initialDummyCampaigns;
  });

  const addCampaign = (campaign) => {
    setCampaigns((prevCampaigns) => {
      const updatedCampaigns = [...prevCampaigns, campaign];
      // Store updated campaigns in localStorage
      localStorage.setItem("campaigns", JSON.stringify(updatedCampaigns));
      return updatedCampaigns;
    });
  };

  useEffect(() => {
    localStorage.setItem("campaigns", JSON.stringify(campaigns));
  }, [campaigns]);

  return (
    <FormDataContext.Provider value={{ campaigns, addCampaign }}>
      {children}
    </FormDataContext.Provider>
  );
};

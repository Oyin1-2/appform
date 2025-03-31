import React from "react";
import { useLocation } from "react-router";

function NextPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const planIndex = queryParams.get("plan");
  const paymentType = queryParams.get("payment");

  // Plans data
  const plans = [
    { name: "Arcade", monthly: "$9/mo", yearly: "$90/yr", icon: "/images/lie.svg" },
    { name: "Advanced", monthly: "$12/mo", yearly: "$120/yr", icon: "/images/consol.svg" },
    { name: "Pro", monthly: "$15/mo", yearly: "$150/yr", icon: "/images/game.svg" }
  ];

  // Error handling if invalid params are passed
  if (planIndex === null || isNaN(planIndex) || paymentType === null) {
    return <div className="p-6 text-red-500">Error: Invalid selection!</div>;
  }

  const index = parseInt(planIndex, 10);
  
  // Ensure index is within valid range
  if (index < 0 || index >= plans.length) {
    return <div className="p-6 text-red-500">Error: Invalid plan selected!</div>;
  }

  const selectedPlan = plans[index];

  // Determine the price based on the selected payment type
  const price = paymentType === "yearly" ? selectedPlan.yearly : selectedPlan.monthly;

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-6">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-white max-w-md">
        <h1 className="text-3xl font-bold mb-4">Your Selected Plan: {selectedPlan.name}</h1>
        <img src={selectedPlan.icon} alt={selectedPlan.name} className="w-16 h-16 mb-4" />
        <p className="text-lg">Price: {price}</p>
      </div>
    </div>
  );
}

export default NextPage;

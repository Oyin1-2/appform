import { useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";

function Plan() {
  // Start with monthly selected by default.
  const [isMonthly, setIsMonthly] = useState(true);
  // Initialize selectedPlan as null to indicate nothing is selected.
  const [selectedPlan, setSelectedPlan] = useState(null);
  const navigate = useNavigate();

  const plans = [
    {
      name: "Arcade",
      monthly: "$9/mo",
      yearly: "$90/yr",
      icon: "/images/lie.svg",
    },
    {
      name: "Advanced",
      monthly: "$12/mo",
      yearly: "$120/yr",
      icon: "/images/consol.svg",
    },
    {
      name: "Pro",
      monthly: "$15/mo",
      yearly: "$150/yr",
      icon: "/images/game.svg",
    },
  ];

  function handleSubmit(e) {
    e.preventDefault();
    // Ensure a plan is selected
    if (selectedPlan !== null) {
      // Pass selectedPlan and payment type as query parameters.
      navigate(
        `/next-page?plan=${selectedPlan}&payment=${isMonthly ? "monthly" : "yearly"}`
      );
    } else {
      alert("Please select a plan before proceeding!");
    }
  }

  return (
    <div className="font-main p-6 flex flex-col items-center text-white bg-gradient-to-br from-gray-900 to-black min-h-screen relative overflow-hidden ">
      <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
        Select Your Plan
      </h1>
      <p className="text-xl text-gray-400 mt-2">
        Choose monthly or yearly billing.
      </p>

      {/* Toggle Switch */}
      <div className="flex items-center justify-center mt-6 bg-gray-800 p-2 rounded-full shadow-md">
        <motion.button
          type="button"
          className="relative w-16 h-8 bg-gray-600 rounded-full flex items-center p-1"
          onClick={() => setIsMonthly(!isMonthly)}
          whileTap={{ scale: 0.9 }}
        >
          <motion.span
            className="w-6 h-6 bg-white rounded-full shadow-md"
            animate={{ x: isMonthly ? 0 : 32 }}
            transition={{ type: "spring", stiffness: 300 }}
          ></motion.span>
        </motion.button>
      </div>

      {/* Plans Section */}
      <div className="flex flex-wrap justify-center gap-6 mt-8">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            className={`w-64 h-72 bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-2xl shadow-lg p-6 flex flex-col items-center cursor-pointer transition-all duration-500 border-2 relative overflow-hidden
              ${selectedPlan === index ? "border-blue-500 shadow-blue-500/50 scale-105" : "border-transparent"}
              hover:border-blue-400 hover:scale-105`}
            onClick={() => setSelectedPlan(index)}
          >
            <img src={plan.icon} alt={plan.name} className="w-16 h-16 z-10" />
            <h1 className="text-2xl font-bold mt-4 z-10">{plan.name}</h1>
            <p className="text-lg text-white mt-2 z-10">
              {isMonthly ? plan.monthly : plan.yearly}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="w-full flex justify-between mt-12 px-6">
        <motion.button
          type="button"
          onClick={() => navigate(-1)}
          className="border border-gray-500 text-gray-300 px-6 py-3 rounded-xl transition duration-300 hover:bg-gray-700 hover:text-white"
          whileHover={{ scale: 1.05 }}
        >
          Go Back
        </motion.button>

        <motion.button
          type="button"
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-6 py-3 rounded-xl transition duration-300 hover:bg-blue-700"
          whileHover={{ scale: 1.05 }}
        >
          Next Step
        </motion.button>
      </div>
    </div>
  );
}

export default Plan;

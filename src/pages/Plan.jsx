import { useState } from "react";
import { useNavigate } from "react-router";

function Plan() {
  const [isMonthly, setIsMonthly] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const navigate = useNavigate();

  const plans = [
    { name: "Arcade", monthly: "$9/mo", yearly: "$90/yr", icon: "/images/lie.svg" },
    { name: "Advanced", monthly: "$12/mo", yearly: "$120/yr", icon: "/images/consol.svg" },
    { name: "Pro", monthly: "$15/mo", yearly: "$150/yr", icon: "/images/game.svg" }
  ];

  function handleSubmit(e) {
    e.preventDefault();
    
    if (selectedPlan !== null) {
      navigate("/add-on");
    } else {
      alert("Please select a plan before proceeding!");
    }
  }

  console.log(plans)
  
  return (
    <div className="font-main p-6">
      <h1 className="text-4xl text-blue font-bold">Select your plan</h1>
      <p className="text-xl text-gray-500 mt-1">
        You have the option of monthly or yearly billing.
      </p>

      <div className="flex items-center justify-center mt-6">
        <span className={`mr-2 font-medium ${isMonthly ? "text-black" : "text-gray-400"}`}>
          Monthly
        </span>
        <button
          type="button"
          className="relative w-12 h-6 bg-blue-900 rounded-full transition duration-300"
          onClick={() => setIsMonthly(!isMonthly)}
        >
          <span
            className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 ${
              isMonthly ? "translate-x-0" : "translate-x-6"
            }`}
          ></span>
        </button>
        <span className={`ml-2 font-medium ${isMonthly ? "text-gray-400" : "text-black"}`}>
          Yearly
        </span>
      </div>

      <div className="flex justify-between w-[90%] h-[30vh] mt-8 mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`w-[28%] h-[100%] rounded-xl border border-gray-300 flex flex-col pl-6 pt-6 cursor-pointer transition-all duration-300 
              ${selectedPlan === index ? "bg-gray-200 border-blue-500" : "bg-white"}`}
            onClick={() => setSelectedPlan(index)}
          >
            <img src={plan.icon} alt={plan.name} className="w-16 h-16 bg-red-500 rounded-full" />
            <h1 className="text-2xl text-blue font-bold mt-4">{plan.name}</h1>
            <p className="text-xl text-gray-500 mt-2">{isMonthly ? plan.monthly : plan.yearly}</p>
          </div>
        ))}
      </div>

      <div className="w-full flex justify-between mt-12">
        <button 
          type="button" 
          onClick={() => navigate(-1)} 
          className="border-[1px] border-black text-black px-8 rounded-xl py-3 cursor-pointer"
        >
          Go Back
        </button>

        <button 
          type="button" 
          onClick={handleSubmit} 
          className="bg-blue text-white px-8 rounded-xl py-3 cursor-pointer"
        >
          Next Step
        </button>
      </div>
    </div>
  );
}

export default Plan;

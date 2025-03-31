import { useState } from "react";
import { useNavigate } from "react-router";

function Info() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const navigate = useNavigate();
  function handlesumbit(e) {
    e.preventDefault();

    if (name && email && number) {
      navigate("/plan");
    } else {
      alert("Fill out form before proceeding!");
    }
  }

  return (
    <div className="font-main bg-gradient-to-r from-blue-500 to-purple-600 h-screen flex flex-col justify-center items-center mb-8 ">
      <h1 className="text-4xl text-white font-bold mb-4">Personal Info</h1>
      <p className="text-lg text-white opacity-80 mb-6">
        Please provide your name, email address, and phone number.
      </p>

      <form
        onSubmit={handlesumbit}
        className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-96 space-y-6"
      >
        <div className="flex flex-col">
          <label htmlFor="name" className="text-gray-700 font-semibold mb-2">
            Name
          </label>
          <input
            type="text"
            placeholder="e.g Stephen King"
            id="name"
            className="border-2 border-gray-300 w-full px-4 py-3 rounded-md text-gray-700 focus:ring-2 focus:ring-blue-400 transition duration-300"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="text-gray-700 font-semibold mb-2">
            Email Address
          </label>
          <input
            type="email"
            placeholder="e.g stephenking@gmail.com"
            id="email"
            className="border-2 border-gray-300 w-full px-4 py-3 rounded-md text-gray-700 focus:ring-2 focus:ring-blue-400 transition duration-300"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="phone" className="text-gray-700 font-semibold mb-2">
            Phone Number
          </label>
          <input
            type="text"
            placeholder="e.g +234 815 9756 109"
            id="phone"
            className="border-2 border-gray-300 w-full px-4 py-3 rounded-md text-gray-700 focus:ring-2 focus:ring-blue-400 transition duration-300"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>

        <button
          className="bg-blue-600 text-white px-8 py-3 rounded-xl w-full mt-6 hover:bg-blue-700 transition duration-300"
          type="submit"
        >
          Next Step
        </button>
      </form>
    </div>
  );
}

export default Info;

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
    <div className="font-main">
      <h1 className="text-4xl text-blue font-bold">Personal Info</h1>
      <p className="text-sm text-gray-500 mt-1">
        Please provide your name, email address, and phone number.
      </p>

      <form
        onSubmit={handlesumbit}
        className="mt-5 flex flex-col justify-start items-start w-full h-[450px] "
      >
        <div className="flex flex-col justify-center items-start w-full ">
          <label for="name" className="text-blue font-medium">
            Name
          </label>
          <input
            type="text"
            placeholder="e.g Stephen King"
            id="name"
            className="border-[1px] border-gray-300 w-full px-3 py-3 rounded-md text-gray-400 text-sm mt-1 "
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-col justify-center items-start mt-5 w-full ">
          <label for="email" className="text-blue font-medium">
            Email Address
          </label>
          <input
            type="email"
            placeholder="e.g stephenking@gmail.com"
            id="emai"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-[1px] border-gray-300 w-full px-3 py-3 rounded-md text-gray-400 text-sm mt-1 "
          />
        </div>
        <div className="flex flex-col justify-center items-start mt-5 w-full ">
          <label for="phone" className="text-blue font-medium">
            Name
          </label>
          <input
            type="text"
            placeholder="e.g +234 815 9756 109"
            id="phone"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            className="border-[1px] border-gray-300 w-full px-3 py-3 rounded-md text-gray-400 text-sm mt-1 "
          />
        </div>

        <button
          className="bg-blue text-white px-8 rounded-xl py-3 self-end mt-auto cursor-pointer"
          type="submit"
        >
          Next Step
        </button>
      </form>
    </div>
  );
}

export default Info;

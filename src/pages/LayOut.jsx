import { NavLink, Outlet } from "react-router";

function Layout() {
  return (
    <header className="w-full h-screen flex justify-center items-center">
      <div className="w-[92%] h-full lg:w-[90%] block lg:grid grid-cols-[300px_1fr] ">
        <div className="bg-[url(/images/bg-sidebar-mobile.svg)] py-16 lg:bg-[url(/images/bg-sidebar-desktop.svg)] bg-cover bg-center flex-col h-[20%] lg:h-[100%] flex-row w-full lg:w-[100%] lg:h-[20%]">
          <ul>
            <li>
              <NavLink to="/info">
                <div
                  className="w-full flex justify-center items-center gap-15 shadow-lg space-y-20
                         transform transition-transform duration-500 hover:rotate-12 hover:scale-110 hover:bg-red-500 hover:text-white"
                >
                  <p
                    className="w-[40px] h-[40px] rounded-full border-[1px] border-white flex justify-center items-center shadow-lg 
                         transform transition-transform duration-500 hover:rotate-12 hover:scale-110 hover:bg-red-500 sm:flex-row"
                  >
                    1
                  </p>
                  <div>
                    <p className=" hidden lg:block">STEP 1</p>
                    <h2 className=" hidden lg:block">YOUR INFO</h2>
                  </div>
                </div>
              </NavLink>
              <NavLink to="/plan">
                <div
                  className="w-full flex justify-center items-center  gap-15 shadow-lg space-y-20
                         transform transition-transform duration-500 hover:rotate-12 hover:scale-110 hover:bg-red-500 hover:text-white"
                >
                  <p
                    className="w-[40px] h-[40px] rounded-full border-[1px] border-white flex justify-center items-center shadow-lg 
                         transform transition-transform duration-500 hover:rotate-12 hover:scale-110 hover:bg-red-500 sm:flex-row"
                  >
                    2
                  </p>
                  <div>
                    <p className=" hidden lg:block">STEP 2</p>
                    <h2 className=" hidden lg:block">SELECT PLAN</h2>
                  </div>
                </div>
              </NavLink>
              <NavLink to="/add-on">
                <div
                  className="w-full flex justify-center items-center  gap-15 shadow-lg space-y-20
                         transform transition-transform duration-500 hover:rotate-12 hover:scale-110 hover:bg-red-500 hover:text-white"
                >
                  <p
                    className=" w-[40px] h-[40px] rounded-full border-[1px] border-white flex justify-center items-center shadow-lg space-y-20
                         transform transition-transform duration-500 hover:rotate-12 hover:scale-110 hover:bg-red-500 sm:flex-row"
                  >
                    3
                  </p>
                  <div>
                    <p className=" hidden lg:block">STEP 3</p>
                    <h2 className=" hidden lg:block">ADD ONS</h2>
                  </div>
                </div>
              </NavLink>
              <NavLink to="/summary">
                <div className="w-full flex justify-center items-center  gap-20 shadow-lg transform transition-transform duration-500 hover:rotate-12 hover:scale-110 hover:bg-red-500 hover:text-white bg-green-500 ">
                  <p
                    className="w-[40px] h-[40px] rounded-full border-[1px] border-white flex justify-center items-center  shadow-lg space-y-20
                         transform transition-transform duration-500 hover:rotate-12 hover:scale-110 hover:bg-red-500 sm:flex-col"
                  >
                    4
                  </p>
                  <div>
                    <p className=" hidden lg:block">STEP 4</p>
                    <h2 className=" hidden lg:block">SUMMARY</h2>
                  </div>
                </div>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="px-40 py-16">
          <Outlet />
        </div>
      </div>
    </header>
  );
}

export default Layout;

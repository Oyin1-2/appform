import { NavLink, Outlet } from "react-router";

function Layout() {
  return (
    <div className="h-screen ">
    
      <div className="flex flex-col lg:flex-row ">

        <nav className="w-full lg:w-1/4 h-[20%] lg:h-screen bg-[url('/images/bg-sidebar-mobile.svg')] lg:bg-[url('/images/bg-sidebar-desktop.svg')] bg-cover bg-center p-6">

      
          <ul className="flex flex-row justify-around lg:flex-col lg:justify-start space-x-4 lg:space-x-0 lg:space-y-4">
            <li>
              <NavLink to="/info">
                <div className="flex items-center space-x-4 p-2 rounded hover:bg-red-500 hover:text-white transition-colors">
                  <span className="w-10 h-10 flex items-center justify-center border rounded-full">
                    1
                  </span>
                  <div className="hidden lg:block">
                    <p className="text-sm">STEP 1</p>
                    <h2 className="font-semibold">YOUR INFO</h2>
                  </div>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/plan">
                <div className="flex items-center space-x-4 p-2 rounded hover:bg-red-500 hover:text-white transition-colors">
                  <span className="w-10 h-10 flex items-center justify-center border rounded-full">
                    2
                  </span>
                  <div className="hidden lg:block">
                    <p className="text-sm">STEP 2</p>
                    <h2 className="font-semibold">SELECT PLAN</h2>
                  </div>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/add-on">
                <div className="flex items-center space-x-4 p-2 rounded hover:bg-red-500 hover:text-white transition-colors">
                  <span className="w-10 h-10 flex items-center justify-center border rounded-full">
                    3
                  </span>
                  <div className="hidden lg:block">
                    <p className="text-sm">STEP 3</p>
                    <h2 className="font-semibold">ADD ONS</h2>
                  </div>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/summary">
                <div className="flex items-center space-x-4 p-2 rounded bg-green-500 hover:bg-red-500 hover:text-white transition-colors">
                  <span className="w-10 h-10 flex items-center justify-center border rounded-full">
                    4
                  </span>
                  <div className="hidden lg:block">
                    <p className="text-sm">STEP 4</p>
                    <h2 className="font-semibold">SUMMARY</h2>
                  </div>
                </div>
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;

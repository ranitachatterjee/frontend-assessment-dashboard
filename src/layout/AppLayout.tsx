
//toggle between login and logout button
const menuItems = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    path: "/",
  },
  {
    label: "Lead Management",
    icon: Users,
    children: [
      {
        label: "Assigned Leads",
        icon: FileSpreadsheet,
        path: "/assigned-leads",
      },
      {
        label: "Contacted Leads",
        icon: FileSpreadsheet,
        path: "/contacted-leads",
      },
      {
        label: "Closed Leads",
        icon: FileSpreadsheet,
        path: "/closed-leads",
      },
    ],
  },
];

import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import logo1 from "../assets/logo1.png";
import shree from "../assets/shree.png";
import {
  LayoutDashboard,
  Menu,
  FilePlus,
  
  FileSpreadsheet,
  ChevronDown,
  ChevronRight,
  Users,
  User,
  X,
  Sun,
  Moon,
  LogIn,
  LogOut
} from "lucide-react";
import { Bell, Mail } from "lucide-react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Footer from "./Footer";

export default function AppLayout() {
  const [sidebarExpanded, setSidebarExpanded] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [employeeOpen, setEmployeeOpen] = useState(false);
  // Initialize darkMode from localStorage immediately, not in useEffect
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
  });
  const [hoverLogo, setHoverLogo] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  // const isEmployeeActive = location.pathname === "/create-employee";

  const isEmployeeActive = menuItems
  .find(item => item.label === "Employee")
  ?.children?.some(child => child.path === location.pathname);
  const isSubmenuOpen = employeeOpen;
  /* ================= THEME INIT ================= */

  // Remove the useEffect that was setting darkMode
  // The initialization is now done in useState

  // Check login status on mount and when localStorage changes
  useEffect(() => {
    const checkLoginStatus = () => {
      const loggedIn = localStorage.getItem("isLoggedIn") === "true";
      setIsLoggedIn(loggedIn);
    };
    
    checkLoginStatus();
    
    // Listen for storage changes (in case of multiple tabs)
    window.addEventListener('storage', checkLoginStatus);
    
    return () => {
      window.removeEventListener('storage', checkLoginStatus);
    };
  }, [location.pathname]); // Also check when route changes

useEffect(() => {
  setEmployeeOpen(!!isEmployeeActive);
}, [isEmployeeActive]);


  const toggleTheme = () => {
    if (darkMode) {
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    } else {
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }
  };

  // Logout handler
  const handleLogout = () => {
    // Clear authentication data
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userName");       
    localStorage.removeItem("userPassword");
    setIsLoggedIn(false);
    // Show logout message
    toast.info("Logged out successfully");
    // Navigate to login page
    navigate("/login");
  };

  // Check authentication before navigation
  const checkAuthAndNavigate = (path: string) => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    
    if (!loggedIn) {
      toast.error("Please login first to access this page");
      navigate("/login");
      return false;
    }
    
    navigate(path);
    return true;
  };

  /* ================= DYNAMIC CLASSES ================= */

  const layoutBg = darkMode ? "bg-gray-800" : "bg-gray-100";
  const headerBg = darkMode ? "bg-gray-600" : "bg-gray-100";
  const sidebarBg = darkMode ? "bg-gray-600" : "bg-gray-100";
  const textColor = darkMode ? "text-white" : "text-gray-900";
  const headerText = darkMode ? "text-white" : "text-gray-900";
  const activeBg = darkMode ? "bg-slate-700" : "bg-gray-300";
  const hoverBg = darkMode ? "hover:bg-slate-700" : "hover:bg-gray-200";
  const activeText = darkMode ? "text-white" : "text-gray-900";
  
  return (
    <div
      className={`h-screen flex ${layoutBg} transition-colors duration-300 overflow-hidden`}
    >
      {/* ================= MOBILE OVERLAY ================= */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* ================= SIDEBAR ================= */}
      <aside
        className={`
          ${sidebarBg} ${darkMode? "text-white" : "text-gray-900"} flex flex-col
          fixed md:relative top-0 left-0 h-screen z-50
          transition-all duration-300 shadow-lg
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
          ${sidebarExpanded ? "md:w-52" : "md:w-16"}
          w-64
        `}
      >
       



<div className="flex items-center justify-between h-14 px-4 border-b border-slate-700 md:hidden relative">

  {/* LEFT → LOGO */}
  <img src={logo} alt="logo" className="h-6 z-10" />

  {/* ✅ CENTER → LOGO1 */}
  <div className="absolute left-1/2 -translate-x-1/2">
    <img src={logo1} alt="logo1" className="h-4 object-contain" />
  </div>

  {/* RIGHT → CLOSE BUTTON */}
  <button onClick={() => setMobileOpen(false)} className="z-10">
    <X size={22} />
  </button>

</div>
        <div
          className="hidden md:flex items-center h-14 border-b border-slate-700 px-3 transition-all relative duration-300 justify-between"
        >
          {/* ================= LEFT SIDE ================= */}
          <div className="relative flex items-center w-10 h-10">

            {/* COLLAPSED MODE */}
            {!sidebarExpanded && (
              <div className="group relative flex items-center justify-center w-10 h-10">
                
                {/* LOGO */}
                <img
                  src={logo}
                  alt="Logo"
                  className="w-10 transition-opacity duration-200 group-hover:opacity-0"
                />

                {/* MENU ICON ON HOVER */}
                <button
                  onClick={() => {
                    setSidebarExpanded(true);
                    if (isEmployeeActive) {
                      setEmployeeOpen(true);
                    } else {
                      setEmployeeOpen(false);
                    }
                  }}
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                >
                  <Menu size={20} />
                </button>
              </div>
            )}

            {/* EXPANDED MODE LOGO */}
            {sidebarExpanded && (
              <img
                src={logo}
                alt="Logo"
                className="w-10 transition-all duration-300"
              />
            )}
          </div> 

           {/* ✅ CENTER LOGO1 (NEW) */}
  {sidebarExpanded && (
    <div className="absolute left-1/2 -translate-x-1/2">
      <img src={logo1} alt="logo1" className="h-6 object-contain" />
    </div>
  )}

          {/* ================= RIGHT SIDE ================= */}
          {sidebarExpanded && (
            <button
              onClick={() => setSidebarExpanded(false)}
              className="p-1"
            >
              <Menu
                size={20}
                className="transition-transform duration-300 rotate-90"
              />
            </button>
          )}
        </div>

        <div className="flex flex-col mt-6 space-y-2 flex-1">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            const hasChildren = item.children;

            return (
              <div key={index}>
                {/* Dashboard (no children) */}
                {!hasChildren && (
                  <div
                    onClick={(e) => {
                      e.preventDefault();
                      const loggedIn = localStorage.getItem("isLoggedIn") === "true";
                      
                      if (!loggedIn) {
                        toast.error("Please login first to access this page");
                        navigate("/login");
                        return;
                      }
                      
                      if (!sidebarExpanded) {
                        setSidebarExpanded(true);
                      }
                      navigate(item.path);
                    }}
                    className={`flex items-center gap-3 px-4 py-2 transition ${hoverBg} cursor-pointer ${
                      isActive ? `${activeBg} ${activeText}` : ""
                    }`}
                  >
                    <Icon size={20} />
                    {(sidebarExpanded || mobileOpen) && (
                      <span>{item.label}</span>
                    )}
                  </div>
                )}

                {/* Parent with submenu */}
                {hasChildren && (
                  <>
                    <div
                      onClick={() => {
                        // Check auth before allowing navigation to submenu
                        const loggedIn = localStorage.getItem("isLoggedIn") === "true";
                        
                        if (!loggedIn) {
                          toast.error("Please login first to access this page");
                          navigate("/login");
                          return;
                        }

                        // If sidebar collapsed → expand + open submenu
                        if (!sidebarExpanded) {
                          setSidebarExpanded(true);
                          setEmployeeOpen(true);
                          return;
                        }

                        // If already expanded → toggle submenu
                        setEmployeeOpen(prev => !prev);
                      }}
                      className={`flex items-center justify-between px-4 py-2 cursor-pointer transition ${hoverBg} ${
                        isEmployeeActive ? `${activeBg} ${activeText}` : ""
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon size={20} />
                        {(sidebarExpanded || mobileOpen) && (
                          <span>{item.label}</span>
                        )}
                      </div>

                      {(sidebarExpanded || mobileOpen) && (
                        <div
                          onClick={(e) => {
                            e.stopPropagation();
                            setEmployeeOpen((prev) => !prev);
                          }}
                        >
                          {employeeOpen ? (
                            <ChevronDown size={18} />
                          ) : (
                            <ChevronRight size={18} />
                          )}
                        </div>
                      )}
                    </div>

                    {employeeOpen && (sidebarExpanded || mobileOpen) && (
                      <div>
                        {item.children.map((child, i) => {
                          const ChildIcon = child.icon;

                          return (
                            <div
                              key={i}
                              onClick={(e) => {
                                e.preventDefault();
                                const loggedIn = localStorage.getItem("isLoggedIn") === "true";
                                
                                if (!loggedIn) {
                                  toast.error("Please login first to access this page");
                                  navigate("/login");
                                  return;
                                }
                                
                                navigate(child.path);
                              }}
                              className={`ml-8 flex items-center gap-2 px-2 py-2 transition ${hoverBg} cursor-pointer ${
                                location.pathname === child.path ? `${activeBg} ${activeText}` : ""
                              }`}
                            >
                              <ChildIcon size={18} />
                              <span>{child.label}</span>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </>
                )}
              </div>
            );
          })}
        </div>
        {/* ================= STICKY LOGIN BUTTON AT BOTTOM ================= */}
        {/* <div className="sticky bottom-0 mt-auto border-t border-slate-700">
          <div
            onClick={(e) => {
              e.preventDefault();
              navigate("/login");
            }}
            className={`flex items-center gap-3 px-4 py-3 transition ${hoverBg} cursor-pointer ${
              location.pathname === "/login" ? `${activeBg} ${activeText}` : ""
            }`}
          >
            <LogIn size={20} />
            {(sidebarExpanded || mobileOpen) && (
              <span>Login</span>
            )}
          </div>
        </div> */}

      </aside>

      {/* ================= MAIN CONTENT ================= */}
      <div className={`flex-1 flex flex-col min-w-0 ${textColor}`}>
        {/* HEADER */}
        <header
          className={`${headerBg} ${headerText} relative px-4 sm:px-6 h-14 flex items-center justify-between shrink-0 transition-colors duration-300 shadow-lg`}
        >
          <button onClick={() => setMobileOpen(true)} className="md:hidden">
            <Menu size={24}  />
          </button>

          <h1 className="text-sm sm:text-lg font-semibold truncate">
            Lead Management System
          </h1>  

          {/* shree icon */}
<div className="hidden md:flex absolute left-1/2 -translate-x-1/2">
  <img src={shree} alt="shree" className="h-6 md:h-7 object-contain" />
</div>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-slate-600 hover:bg-slate-500 transition"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button> 
            <Bell className="hidden sm:block cursor-pointer" size={18} />
<Mail className="hidden sm:block cursor-pointer" size={18} />
            
            {/* Dynamic Login/Logout Button */}
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="p-2 rounded-full bg-red-500 hover:bg-red-600 transition text-white"
                title="Logout"
              >
                <LogOut size={18} />
              </button>
            ) : (
              <button
                onClick={() => navigate("/login")}
                className="p-2 rounded-full bg-blue-500 hover:bg-blue-600 transition text-white"
                title="Login"
              >
                <LogIn size={18} />
              </button>
            )}

            {isLoggedIn && (
  <>
    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm">
      {localStorage.getItem("userName")
        ?.split(" ")
        .map(n => n[0])
        .join("")
        .slice(0, 2)}
    </div>

    <span className="hidden sm:block">
      {localStorage.getItem("userName")}
    </span>
  </>
)}  
</div>
        </header>

        {/* ROUTE CONTENT */}
        <main className="flex-1 overflow-y-auto overflow-x-hidden p-4 sm:p-6 transition-colors duration-300">
          <Outlet context={{ darkMode }} />
        </main>

        {/* FOOTER (NOW CORRECTLY INSIDE) */}
        <div className="   border-gray-600  rounded-lg ">
            <Footer darkMode={darkMode}/>  
        </div>
      </div>
    </div>
  );
}
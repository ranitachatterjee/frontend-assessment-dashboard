Project Title
--------------
Lead Management Dashboard – Frontend Assessment

Overview
---------
This project is a production-ready CRM dashboard built using React + TypeScript + Tailwind CSS + Recharts.
It replicates the given Figma design and includes:

Dynamic charts
Lead management table
Authentication system
Responsive layout
Dark/Light theme
Collapsible sidebar
 Tech Stack
 ----------------
Category	Technology
Framework	React (v18+)
Language	TypeScript
Styling	    Tailwind CSS
Charts	    Recharts
Routing	    React Router v6
Notification	React Toastify
Icons	    Lucide React
State	    React Hooks + LocalStorage

Features
----------------
1. Authentication (Login / Logout)
User enters username & password
Data is stored in localStorage
isLoggedIn controls access
Protected routes restrict access
Logout clears session and redirects to login
2. Protected Routing

Implemented using ProtectedRoute

if (!isLoggedIn) return <Navigate to="/login" />

 Pages protected:
-----------------
Dashboard
Profile
Assigned Leads
Contacted Leads
Closed Leads
 3. Dynamic Dashboard (Core Feature)

All dashboard sections are connected to table data

 KPI Section (Dynamic)

Calculated from table:

KPI	Logic
Total Leads	data.length
Pending Follow Up	assigned === "Pending"
Contacted Leads	assigned === "Contacted"
Conversion Rate	converted / total * 100
 Donut Chart (Lead Status)
Hot = data.filter(d => d.status === "Hot")
Cold = data.filter(d => d.status === "Cold")
Potential = data.filter(d => d.status === "Potential")

✔ Updates automatically when data changes

 Bar Chart (Monthly Conversion)
Groups data by month
Counts:
Converted
Non Converted
month = new Date(d.date).getMonth()

✔ Fully dynamic

 Line Chart (Lead Statistics)
Monthly aggregation
Tracks:
Hot leads
Cold leads

✔ Straight line (linear type)

 Conversion Donut
conversionRate = converted / total

✔ Shows percentage dynamically

 Gauge Chart
Represents performance %
Semi-circle chart using PieChart
 Employee Table
 ----------------
Features:
80 manually created rows
Pagination (10 rows/page)
Search by:
Name
Email
Dynamic filtering
Scrollable table
Responsive layout

 Sidebar Features
--------------------
 Collapsible Sidebar
Default: collapsed
Expand on click
Hover effect (icon → menu)
 Submenu (Lead Management)
Toggle open/close
Active route highlight
 Mobile Behavior
Sidebar slides in
Overlay background
Close (X) button
 Header Features
Centered logo (desktop only)
Dark/Light toggle
Notification & Mail icons
User initials + name
Login / Logout button
 Theme Toggle (Dark / Light)
Stored in localStorage
Applied globally
Affects:
Sidebar
Header
Footer
Cards
Table
localStorage.setItem("theme", "dark")
 Responsive Design

Fully responsive across:

Device	Behavior
Desktop	Sidebar collapsible
Tablet	Adjusted grid
Mobile	Sidebar overlay + hidden logo  

File Folder Structure
---------------------
src/
│
├── layout/
│   └── AppLayout.tsx
│
├── components/
│   ├── layout/
│   │   ├── Sidebar.tsx
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   │
│   ├── ui/
│   │   ├── Card.tsx
│   │   ├── Dropdown.tsx
│   │   └── SearchInput.tsx
│   │
│   ├── dashboard/
│   │   ├── KPISection.tsx
│   │   ├── ChartsSection.tsx
│   │   ├── AnalyticsSection.tsx
│   │   └── EmployeeTable.tsx
│   │
│   ├── charts/
│   │   ├── DonutChart.tsx
│   │   ├── BarChart.tsx
│   │   ├── LineChart.tsx
│   │   └── GaugeChart.tsx
│
├── pages/
│   ├── Dashboard.tsx
│   ├── Login.tsx
│   ├── Profile.tsx
│   ├── AssignedLeads.tsx
│   ├── ContactedLeads.tsx
│   └── ClosedLeads.tsx
│
├── routes/
│   └── ProtectedRoute.tsx
│
├── utils/
│   └── dashboardData.ts
│
├── App.tsx
└── main.tsx
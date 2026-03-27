import KPISection from "../components/dashboard/KPISection";
import ChartsSection from "../components/dashboard/ChartsSection";
import AnalyticsSection from "../components/dashboard/AnalyticsSection";
import EmployeeTable from "../components/dashboard/EmployeeTable";
import { generateData } from "../utils/dashboardData";
import { useOutletContext } from "react-router-dom";
import { useMemo } from "react";

type ContextType = {
  darkMode: boolean;
};
const Dashboard = () => {
    const data = useMemo(() => generateData(), []);
     const { darkMode } = useOutletContext<ContextType>();
  return (
    <div className="space-y-4">
       <KPISection data={data} />
      <ChartsSection data={data} />
      <AnalyticsSection data={data} darkMode={darkMode} />
      <EmployeeTable data={data} darkMode={darkMode} />
    </div>
  );
};

export default Dashboard;
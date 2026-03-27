import Card from "../ui/Card";
import Dropdown from "../ui/Dropdown";
import CustomLineChart from "../charts/LineChart";
import GaugeChart from "../charts/GaugeChart";

const AnalyticsSection = ({ data, darkMode }: { data: any[]; darkMode: boolean }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      
      {/* LEFT - LINE CHART */}
      <div className="lg:col-span-2">
        <Card title="Lead Statistics">
          <CustomLineChart data={data} />
        </Card>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex flex-col gap-4">

        {/* GAUGE */}
        <div className="bg-white rounded-lg shadow-sm pt-2 pl-2 pr-2 transition-all duration-300 ease-in-out
hover:scale-[1.02] hover:shadow-lg">
          
          <div className="flex justify-between items-center border-b border-gray-300 pb-2 mb-2 ">
            <h3 className="text-sm font-semibold">Current Month Target</h3>
            <Dropdown darkMode={darkMode} />
          </div>

         <div className="mt-2">
            <GaugeChart />
         </div>
        </div>

        {/* CALL TIME */}
        <div className="bg-white rounded-lg shadow-sm p-4 flex flex-col gap-4  transition-all duration-300 ease-in-out
hover:scale-[1.02] hover:shadow-lg">

          <div className="flex justify-between items-center border-b border-gray-300 pb-2 mb-2 ">
            <h3 className="text-sm font-semibold">Average Call Time</h3>
            <Dropdown />
          </div>

          {/* MAIN TIME */}
          <div className="text-center">
            <p className="text-xs text-gray-500">Call Time</p>
            <p className="text-lg font-semibold text-cyan-600">
              5hr 31 min 14 sec
            </p>
          </div>

          {/* SUB DATA */}
          <div className="flex divide-x text-center text-sm">
            
            <div className="flex-1 px-2">
              <p className="text-gray-500 text-xs">
                Call Time on Conversion
              </p>
              <p className="font-medium">
                3hr 45 min 09 sec
              </p>
            </div>

            <div className="flex-1 px-2">
              <p className="text-gray-500 text-xs">
                Call Time on Non Conversion
              </p>
              <p className="font-medium">
                1hr 46 min 5 sec
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default AnalyticsSection;
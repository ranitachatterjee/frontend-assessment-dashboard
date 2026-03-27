

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Converted", value: 67.5 },
  { name: "Remaining", value: 32.5 },
];

const COLORS = ["#0ea5e9", "#e5e7eb"];

const ConversionDonut = () => {
  return (
    <div className="flex flex-col items-center gap-3">
      
      {/* TOP VALUES (FIX) */}
      <div className="flex justify-between w-full text-sm text-gray-500 px-2 mt-3">
        <span>Total Leads: <b className="text-gray-800">80</b></span>
        <span>Customer: <b className="text-gray-800">54</b></span>
      </div>

      {/* CHART */}
      <div className="w-full h-50 relative mt-5">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              innerRadius={65}
              outerRadius={100}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={COLORS[index]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-lg font-semibold">67.5%</p>
        </div>
      </div>
    </div>
  );
};

export default ConversionDonut;
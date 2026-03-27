

// import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

// const data = [
//   { name: "Hot Leads", value: 60, color: "#0ea5e9" },
//   { name: "Potential Leads", value: 10, color: "#38bdf8" },
//   { name: "Cold Leads", value: 10, color: "#bae6fd" },
// ];

// const DonutChart = () => {
//   return (
//     <div className="flex flex-col items-center gap-4">
      
//       {/* CHART */}
//       <div className="w-full h-56 relative mt-2">
//         <ResponsiveContainer>
//           <PieChart>
//             <Pie
//               data={data}
//               innerRadius={60}
//               outerRadius={90}
//               dataKey="value"
//             >
//               {data.map((entry, index) => (
//                 <Cell key={index} fill={entry.color} />
//               ))}
//             </Pie>
//           </PieChart>
//         </ResponsiveContainer>

//         {/* CENTER TEXT */}
//         <div className="absolute inset-0 flex flex-col items-center justify-center">
//           <p className="text-xl font-semibold">80</p>
//           <p className="text-xs text-gray-500">Total Leads</p>
//         </div>
//       </div>

//       {/* LEGEND (IMPORTANT FIX) */}
//       <div className="grid grid-cols-3 w-full border rounded-lg text-center">
//         {data.map((item, i) => (
//           <div key={i} className="p-3 flex flex-col items-center gap-1 border-r last:border-r-0">
//             <div className="flex items-center gap-2">
//               <span
//                 className="w-2.5 h-2.5 rounded-full"
//                 style={{ background: item.color }}
//               />
//               <span className="font-semibold">{item.value}</span>
//             </div>
//             <p className="text-xs text-gray-500">{item.name}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DonutChart;  
 import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

type Props = {
  data ?: any[];
};

const DonutChart = ({ data }: Props) => {
  const hot = data?.filter(d => d.status === "Hot").length;
  const potential = data?.filter(d => d.status === "Potential").length;
  const cold = data?.filter(d => d.status === "Cold").length;

  const chartData = [
    { name: "Hot Leads", value: hot, color: "#0ea5e9" },
    { name: "Potential Leads", value: potential, color: "#38bdf8" },
    { name: "Cold Leads", value: cold, color: "#bae6fd" },
  ];

  const total = data?.length;

  return (
    <div className="flex flex-col items-center gap-4">

      <div className="w-full h-56 relative mt-2">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={chartData}
              innerRadius={60}
              outerRadius={90}
              dataKey="value"
            >
              {chartData.map((entry, index) => (
                <Cell key={index} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <p className="text-xl font-semibold">{total}</p>
          <p className="text-xs text-gray-500">Total Leads</p>
        </div>
      </div>

      {/* LEGEND */}
      <div className="grid grid-cols-3 w-full border rounded-lg text-center">
        {chartData.map((item, i) => (
          <div key={i} className="p-3 flex flex-col items-center gap-1 border-r last:border-r-0">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: item.color }} />
              <span className="font-semibold">{item.value}</span>
            </div>
            <p className="text-xs text-gray-500">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonutChart;


// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
//   CartesianGrid,
// } from "recharts";

// const data = [
//   { name: "JAN", converted: 40, non: 20 },
//   { name: "FEB", converted: 30, non: 15 },
//   { name: "MAR", converted: 90, non: 30 },
//   { name: "APR", converted: 20, non: 10 },
//   { name: "MAY", converted: 10, non: 40 },
//   { name: "JUN", converted: 40, non: 30 },
//   { name: "JUL", converted: 100, non: 20 },
//   { name: "AUG", converted: 80, non: 10 },
//   { name: "SEP", converted: 120, non: 70 },
//   { name: "OCT", converted: 90, non: 30 },
//   { name: "NOV", converted: 110, non: 50 },
//   { name: "DEC", converted: 130, non: 40 },
// ];

// const CustomBarChart = () => {
//   return (
//     <div className="flex flex-col gap-3">
      
//       <div className="w-full h-59 mt-10"> {/* increased height */}
//         <ResponsiveContainer>
//           <BarChart data={data} barGap={1}  barCategoryGap="35%" margin={{ right: 10, left: -20, bottom: 0 }} >
            
//             {/* GRID LIKE FIGMA */}
//             <CartesianGrid strokeDasharray="3 3" vertical={false} />

//             {/* Y AXIS (FIX) */}
           
//             <YAxis
//   tick={{ fontSize: 10 }}
//   domain={[0, 150]}
//   ticks={[10, 30, 50, 70, 90, 110, 130, 150]}
//   width={60}   // ✅ important
// />

//             <XAxis dataKey="name" fontSize={10} />

//             <Tooltip />

//             <Bar dataKey="converted" fill="#0284c7" barSize={12} radius={[4, 4, 0, 0]} />
//             <Bar dataKey="non" fill="#ce8cccff" barSize={12} radius={[4, 4, 0, 0]} />

//           </BarChart>
//         </ResponsiveContainer>
//       </div>

//       {/* LEGEND */}
//       <div className="flex justify-center gap-6 text-sm">
//         <div className="flex items-center gap-2">
//           <span className="w-2.5 h-2.5 bg-[#0284c7] rounded-full" />
//           Converted
//         </div>
//         <div className="flex items-center gap-2">
//           <span className="w-2.5 h-2.5 bg-[#ce8cccff] rounded-full" />
//           Non-converted
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CustomBarChart;  

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

type Props = {
  data?: any[];
};

const months = [
  "JAN","FEB","MAR","APR","MAY","JUN",
  "JUL","AUG","SEP","OCT","NOV","DEC"
];

const CustomBarChart = ({ data = [] }: Props) => {

  // 🔥 CREATE MONTHLY DATA FROM TABLE
  const chartData = months.map((month, index) => {
    
    const monthData = data.filter(d => {
      const m = new Date(d.date).getMonth(); // 0-11
      return m === index;
    });

    return {
      name: month,
      converted: monthData.filter(d => d.conversion === "Converted").length,
      non: monthData.filter(d => d.conversion === "Non Converted").length,
    };
  });

  return (
    <div className="flex flex-col gap-3">
      
      <div className="w-full h-59 mt-10">
        <ResponsiveContainer>
          <BarChart
            data={chartData}
            barGap={1}
            barCategoryGap="35%"
            margin={{ right: 10, left: -20, bottom: 0 }}
          >
            
            {/* GRID */}
            <CartesianGrid strokeDasharray="3 3" vertical={false} />

            {/* Y AXIS */}
            <YAxis
              tick={{ fontSize: 10 }}
              width={60}
            />

            {/* X AXIS */}
            <XAxis dataKey="name" fontSize={10} />

            <Tooltip />

            {/* BARS */}
            <Bar
              dataKey="converted"
              fill="#0284c7"
              barSize={12}
              radius={[4, 4, 0, 0]}
            />

            <Bar
              dataKey="non"
              fill="#ce8cccff"
              barSize={12}
              radius={[4, 4, 0, 0]}
            />

          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* LEGEND */}
      <div className="flex justify-center gap-6 text-sm">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 bg-[#0284c7] rounded-full" />
          Converted
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 bg-[#ce8cccff] rounded-full" />
          Non-converted
        </div>
      </div>
    </div>
  );
};

export default CustomBarChart;


import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type Props = {
  data?: any[];
};

const months = [
  "JAN","FEB","MAR","APR","MAY","JUN",
  "JUL","AUG","SEP","OCT","NOV","DEC"
];

const CustomLineChart = ({ data = [] }: Props) => {

  //  CREATE MONTHLY DATA FROM TABLE
  const chartData = months.map((month, index) => {

    const monthData = data.filter(d => {
      const m = new Date(d.date).getMonth();
      return m === index;
    });

    return {
      name: month,
      hot: monthData.filter(d => d.status === "Hot").length,
      cold: monthData.filter(d => d.status === "Cold").length,
    };
  });

  return (
    <div className="flex flex-col gap-3">
      
      <div className="w-full h-69">
        <ResponsiveContainer>
          <LineChart
            data={chartData}
            margin={{ top: 10, right: 20, left: 10, bottom: 0 }}
          >
            {/* GRID */}
            <CartesianGrid strokeDasharray="3 3" vertical={false} />

            {/* Y AXIS */}
            <YAxis
              domain={[0, "auto"]}
              tick={{ fontSize: 10, fill: "#6b7280" }}
              width={35}
            />

            {/* X AXIS */}
            <XAxis
              dataKey="name"
              tick={{ fontSize: 10, fill: "#6b7280" }}
              padding={{ left: 10, right: 10 }}
            />

            <Tooltip />

            {/* STRAIGHT LINES (FIGMA STYLE) */}
            <Line
              type="linear"
              dataKey="hot"
              stroke="#38bdf8"
              strokeWidth={2}
              dot={{ r: 3 }}
            />

            <Line
              type="linear"
              dataKey="cold"
              stroke="#bae6fd"
              strokeWidth={2}
              dot={{ r: 3 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* LEGEND */}
      <div className="flex justify-center gap-2 text-sm">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 bg-[#38bdf8] rounded-full" />
          Hot
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 bg-[#bae6fd] rounded-full" />
          Cold
        </div>
      </div>
    </div>
  );
};

export default CustomLineChart;
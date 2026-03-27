import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { value: 20, color: "#fca5a5" },   // red
  { value: 30, color: "#fdba74" },   // orange
  { value: 50, color: "#bae6fd" },   // blue
];

const GaugeChart = () => {
  return (
    <div className="w-full h-32 relative mb-2">
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            startAngle={180}
            endAngle={0}
            innerRadius={60}
            outerRadius={90}
            dataKey="value"
            cy="100%"
          >
            {data.map((entry, i) => (
              <Cell key={i} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      {/* CENTER VALUE */}
      <div className="absolute inset-0 flex items-end justify-center mt-6 ">
        <p className="text-xl font-bold text-cyan-600">67.5%</p>
      </div>
    </div>
  );
};

export default GaugeChart;
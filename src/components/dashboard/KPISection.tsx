 
import icon1 from "../../assets/KPI-Icons/1.svg";
import icon2 from "../../assets/KPI-Icons/2.svg";
import icon3 from "../../assets/KPI-Icons/3.svg";
import icon4 from "../../assets/KPI-Icons/4.svg";
import tick from "../../assets/KPI-Icons/tick.svg";

type Props = {
  data: any[];
};

const KPISection = ({ data }: Props) => {

  //  CALCULATIONS FROM TABLE
  const totalAssigned = data.filter(d => d.assigned === "Assigned").length;

  const pending = data.filter(d => d.assigned === "Pending").length;

  const contacted = data.filter(d => d.assigned === "Contacted").length;

  const converted = data.filter(d => d.conversion === "Converted").length;

  const conversionRate = ((converted / data.length) * 100).toFixed(0);

  const kpiData = [
    { value: totalAssigned, label: "Total Lead Assigned", icon: icon1 },
    { value: pending, label: "Pending Follow Up", icon: icon2 },
    { value: contacted, label: "Contacted Lead", icon: icon3, hasTick: true },
    { value: `${conversionRate}%`, label: "Conversion Rate", icon: icon4 },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      {kpiData.map((item, index) => (
        <div
          key={index}
         className="bg-white rounded-lg p-5 flex justify-between items-start shadow-sm h-36
transition-all duration-300 ease-in-out
hover:scale-[1.02] hover:shadow-lg"
        >
          {/* TEXT */}
          <div className="flex flex-col justify-between h-full">
            <h2 className="text-cyan-600 text-3xl md:text-4xl font-bold">
              {item.value}
            </h2>
            <p className="text-gray-500 text-sm md:text-base font-medium">
              {item.label}
            </p>
          </div>

          {/* ICON */}
          <div className="relative w-10 h-10 md:w-12 md:h-12 bg-sky-100 rounded-full flex items-center justify-center">
            <img
              src={item.icon}
              alt="icon"
              className={`object-contain ${
                item.hasTick
                  ? "w-5 h-5 md:w-6 md:h-6"
                  : "w-8 h-8 md:w-9 md:h-9"
              }`}
            />

            {item.hasTick && (
              <img
                src={tick}
                alt="tick"
                className="absolute bottom-2 right-1.5 w-3 h-3"
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default KPISection;
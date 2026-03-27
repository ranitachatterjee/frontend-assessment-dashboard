import Card from "../ui/Card";
import DonutChart from "../charts/DonutChart";
import CustomBarChart from "../charts/BarChart";
import ConversionDonut from "../charts/ConversionDonut";



const ChartsSection = ({ data, darkMode }: any) => {

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
  
  {/* LEFT DONUT */}
  <div className="lg:col-span-1">
    <Card title="Leads Status" darkMode={darkMode}>
      <DonutChart data={data}/>
    </Card>
  </div>

  {/* BAR CHART (WIDER) */}
  <div className="lg:col-span-2">
    <Card title="Conversion Status" darkMode={darkMode}>
      <CustomBarChart data={data} />
    </Card>
  </div>

  {/* RIGHT DONUT (BIGGER) */}
  <div className="lg:col-span-1">
    <Card title="Conversion Rate" darkMode={darkMode}>
      <ConversionDonut />
    </Card>
  </div>

</div>
  );
};

export default ChartsSection;  


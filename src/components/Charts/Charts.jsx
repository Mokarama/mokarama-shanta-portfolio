
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";

const data = [
  { name: "5 star", value: 11500 },
  { name: "4 star", value: 8000 },
  { name: "3 star", value: 3500 },
  { name: "2 star", value: 2400 },
  { name: "1 star", value: 1500 },
];

const  Charts=()=> {
  return (
    <div style={{ width: "100%", height: 250, background: "#f9f9f9", padding: "10px", borderRadius: "8px" }}>
      <h3 style={{ marginLeft: "10px" }}>Ratings</h3>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 5, right: 30, left: 50, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" />
          <Tooltip />
          <Bar dataKey="value" fill="#ff8c00" barSize={25}>
            <LabelList dataKey="value" position="right" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
export default Charts;
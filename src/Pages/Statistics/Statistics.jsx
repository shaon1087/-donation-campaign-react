import { PieChart, Pie, Tooltip, Legend, Cell } from "recharts";

const Statistics = () => {
  const data = [
    { name: "Total Donation", value: 12 },
    { name: "Your Donation", value: 4 },
  ];

  const COLORS = ["#3498db", "#e74c3c"];

  return (
    <div className="flex justify-center items-center h-screen">
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={150}
          fill="#8884d8"
          dataKey="value"
          nameKey="name"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default Statistics;

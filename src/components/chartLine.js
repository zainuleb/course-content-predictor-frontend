import React /* , { PureComponent } */ from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  /*   Legend,
  Brush,
  AreaChart,
  Area,
  ResponsiveContainer, */
} from 'recharts';

const data = [
  {
    name: 'NLP',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'ML',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'AI',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'CMS',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Networks',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Web',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'DS',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

function Graph() {
  return (
    <div>
      <br />
      <h5>Topic Models Analysis</h5>
      <LineChart
        className="lineGraphSize"
        width={500}
        height={200}
        data={data}
        syncId="anyId"
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
      </LineChart>
    </div>
  );
}
export default Graph;

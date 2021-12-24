import React /* , { PureComponent } */ from 'react';
import { PieChart, Pie, Tooltip } from 'recharts';

const data01 = [
  { name: 'Software Engineer', value: 400 },
  { name: 'React Engineer', value: 300 },
  { name: 'Automation Engineer', value: 300 },
  { name: 'SQA Engineer', value: 200 },
  { name: 'Java Developer', value: 278 },
  { name: 'UI/UX Designer', value: 189 },
];

function MarketGraph() {
  return (
    <div>
      <br />
      <h5>Market Analysis</h5>
      <PieChart className="pieSize" width={400} height={400}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data01}
          cx="50%"
          cy="50%"
          outerRadius={150}
          fill="#8884d8"
          label
        />
        <Tooltip />
      </PieChart>
    </div>
  );
}

export default MarketGraph;

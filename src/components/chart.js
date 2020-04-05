import React from 'react';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './title';

// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}

const data = [
  createData('0am', 0),
  createData('3am', 300),
  createData('6am', 600),
  createData('9am', 800),
  createData('12pm', 1500),
  createData('3pm', 2000),
  createData('6pm', 2400),
  createData('9pm', 2400),
  createData('12am', undefined),
];

export default function Chart() {
  return (
    <React.Fragment>
      <Title>Sales Today</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="time" />
          <YAxis>
            <Label angle={270} position="left" style={{ textAnchor: 'middle' }}>
              Sales ($)
            </Label>
          </YAxis>
          <Line type="monotone" dataKey="amount" stroke="#556CD6" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}

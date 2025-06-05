import React, { useState } from 'react';
import {
  ChartComponent, SeriesCollectionDirective, SeriesDirective,
  Inject, AreaSeries, Tooltip, Legend, Category
} from '@syncfusion/ej2-react-charts';

const AreaChart = () => {
  const [clickedPoint, setClickedPoint] = useState(null);

  const areaData = [
    { x: 'Jan', y: 20 },
    { x: 'Feb', y: 40 },
    { x: 'Mar', y: 35 },
    { x: 'Apr', y: 50 },
    { x: 'May', y: 70 },
  ];

  const handlePointClick = (args) => {
    const point = areaData[args.point.index];
    setClickedPoint(point);
  };

  return (
    <div style={{ padding: '20px', marginLeft:'6%' }}>
      <h3>📊 Area Chart</h3>
      <ChartComponent
        primaryXAxis={{ valueType: 'Category' }}
        primaryYAxis={{ title: 'Value' }}
        title="Monthly Growth - Area Chart"
        tooltip={{ enable: true }}
        pointClick={handlePointClick}
        width="100%"
        height="400px"
      >
        <Inject services={[AreaSeries, Tooltip, Legend, Category]} />
        <SeriesCollectionDirective>
          <SeriesDirective
            dataSource={areaData}
            xName="x"
            yName="y"
            name="Growth"
            type="Area"
            marker={{ visible: true, width: 8, height: 8 }}
          />
        </SeriesCollectionDirective>
      </ChartComponent>

      {clickedPoint && (
        <div className="clicked-info">
          <strong>Clicked:</strong> {clickedPoint.x} — {clickedPoint.y}
        </div>
      )}
    </div>
  );
};

export default AreaChart;

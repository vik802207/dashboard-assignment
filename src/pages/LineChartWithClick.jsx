import React, { useState } from 'react';
import {
  ChartComponent, SeriesCollectionDirective, SeriesDirective,
  Inject, LineSeries, ColumnSeries, Tooltip, Legend, Category
} from '@syncfusion/ej2-react-charts';

const LineAndColumnCharts = () => {
  const [clickedLineValue, setClickedLineValue] = useState(null);
  const [clickedColumnValue, setClickedColumnValue] = useState(null);

  const lineData = [
    { x: 'Jan', y: 30 },
    { x: 'Feb', y: 45 },
    { x: 'Mar', y: 60 },
    { x: 'Apr', y: 20 },
    { x: 'May', y: 75 },
  ];

  const columnData = [
    { x: 'Jan', y: 50 },
    { x: 'Feb', y: 25 },
    { x: 'Mar', y: 35 },
    { x: 'Apr', y: 65 },
    { x: 'May', y: 40 },
  ];

  const handleLineClick = (args) => {
    const point = lineData[args.point.index];
    setClickedLineValue(point);
  };

  const handleColumnClick = (args) => {
    const point = columnData[args.point.index];
    setClickedColumnValue(point);
  };

  return (
    <div style={{ padding: '20px',marginLeft:'6%' }}>
      {/* Line Chart */}
      <h3>📈 Line Chart</h3>
      <ChartComponent
        primaryXAxis={{ valueType: 'Category' }}
        primaryYAxis={{ title: 'Value' }}
        title="Monthly Trends - Line"
        tooltip={{ enable: true }}
        pointClick={handleLineClick}
        width="100%"
        height="400px"
      >
        <Inject services={[LineSeries, Tooltip, Legend, Category]} />
        <SeriesCollectionDirective>
          <SeriesDirective
            dataSource={lineData}
            xName="x"
            yName="y"
            name="Line Data"
            type="Line"
            marker={{ visible: true, width: 10, height: 10 }}
          />
        </SeriesCollectionDirective>
      </ChartComponent>

      {clickedLineValue && (
        <div className="clicked-info">
          <strong>Line Chart:</strong> {clickedLineValue.x} — {clickedLineValue.y}
        </div>
      )}

      {/* Column Chart */}
      <h3 style={{ marginTop: '50px' }}>📊 Column Chart </h3>
      <ChartComponent
        primaryXAxis={{ valueType: 'Category' }}
        primaryYAxis={{ title: 'Value' }}
        title="Monthly Stats - Column"
        tooltip={{ enable: true }}
        pointClick={handleColumnClick}
        width="100%"
        height="400px"
      >
        <Inject services={[ColumnSeries, Tooltip, Legend, Category]} />
        <SeriesCollectionDirective>
          <SeriesDirective
            dataSource={columnData}
            xName="x"
            yName="y"
            name="Column Data"
            type="Column"
          />
        </SeriesCollectionDirective>
      </ChartComponent>

      {clickedColumnValue && (
        <div className="clicked-info">
          <strong>Column Chart:</strong> {clickedColumnValue.x} — {clickedColumnValue.y}
        </div>
      )}
    </div>
  );
};

export default LineAndColumnCharts;

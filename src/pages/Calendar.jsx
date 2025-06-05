import React, { useState } from "react";
import {
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
} from "@syncfusion/ej2-react-schedule";

import { DateRangePickerComponent } from "@syncfusion/ej2-react-calendars";
import "./Calendar.css";

const Calendar = () => {
  const [range, setRange] = useState({ start: null, end: null });

  const onRangeChange = (e) => {
    if (e.value && e.value.length === 2) {
      setRange({ start: e.value[0], end: e.value[1] });
    }
  };

  const events = [
    {
      Id: 1,
      Subject: "Team Meeting",
      StartTime: new Date(2025, 5, 5, 10, 0),
      EndTime: new Date(2025, 5, 5, 11, 0),
      CategoryColor: "#1e90ff",
    },
    {
      Id: 2,
      Subject: "Product Review",
      StartTime: new Date(2025, 5, 6, 14, 0),
      EndTime: new Date(2025, 5, 6, 15, 0),
      CategoryColor: "#e91e63",
    },
  ];

  return (
    <div className="calendar-container">
      <h2 className="calendar-title">📅 Calendar & Events</h2>

      <div className="calendar-controls">
        <label htmlFor="range">Select Date Range:</label>
        <DateRangePickerComponent
          placeholder="Choose date range"
          change={onRangeChange}
        />
      </div>

      <ScheduleComponent
        height="650px"
        selectedDate={range.start || new Date()}
        eventSettings={{ dataSource: events }}
      >
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
      </ScheduleComponent>
    </div>
  );
};

export default Calendar;

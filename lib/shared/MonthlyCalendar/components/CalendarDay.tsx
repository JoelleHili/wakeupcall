import React, { useState } from "react";

interface IDay {
  dayNumber: string;
  event?: {
    time: string;
    name: string;
  };
  isSelected?: boolean;
  isDifferentMonth?: boolean;
  isToday?: boolean;
  handleClick?: () => void
}

const CalendarDay: React.FC<IDay> = ({
  dayNumber,
  event,
  isSelected = false,
  isDifferentMonth = false,
  isToday = false,
  handleClick
}) => {
  return (
    <div
      className={`calendar-day__body ${
        isSelected && "calendar-day__selected"
      } ${isDifferentMonth && "calendar-day__different-month"}`}
      onClick={handleClick}
    >
      <span
        className={`calendar-day__number ${isToday && "calendar-day__today"}`}
      >
        {dayNumber}
      </span>

      {event ? (
        <div className="calendar-day__event">
          <span>{event.time}</span>
          <span>{event.name}</span>
        </div>
      ): <div>.</div>}
    </div>
  );
};

export default CalendarDay;

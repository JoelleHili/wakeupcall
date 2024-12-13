import React, { useState } from "react";
import CalendarDay from "./CalendarDay";

export interface IEvents {
  requestName: string;
  username: string;
  code: string;
  intensity: number;
  operation: "beep" | "vibrate" | "shock";
  dateTime: Date;
  country: string;
}

interface IMonthlyCalendar {
  events: IEvents[];
  selectedMonth: number;
  selectedYear: number;
}

const getCalendarDays = (year: number, month: number) => {
  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);

  const startOfCalendar = new Date(firstDayOfMonth);
  startOfCalendar.setDate(firstDayOfMonth.getDate() - firstDayOfMonth.getDay());

  const endOfCalendar = new Date(lastDayOfMonth);
  endOfCalendar.setDate(
    lastDayOfMonth.getDate() + (6 - lastDayOfMonth.getDay())
  );

  const days: Date[] = [];
  for (
    let current = new Date(startOfCalendar);
    current <= endOfCalendar;
    current.setDate(current.getDate() + 1)
  ) {
    days.push(new Date(current));
  }

  return days;
};

const ConvertToLocaleFormat = (date: Date) => {
  return (
    date.getDate().toString() +
    "/" +
    (date.getMonth() + 1).toString() +
    "/" +
    date.getFullYear().toString()
  );
};

const daysOfTheWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const MonthlyCalendar: React.FC<IMonthlyCalendar> = ({
  events,
  selectedMonth,
  selectedYear,
}) => {
  const days = getCalendarDays(selectedYear, selectedMonth);
  const [selectedDate, setSelectedDate] = useState<Date>();

  return (
    <>
      <div className="monthly-calendar__days-list">
        {daysOfTheWeek.map((day) => (
          <span className="monthly-calendar__day">{day}</span>
        ))}
      </div>
      <div className="monthly-calendar__body">
        {days.map((date) => {
          const dayNumber = date.getDate().toString();
          const isToday =
            ConvertToLocaleFormat(date) === new Date().toLocaleDateString();
          const isDifferentMonth = date.getMonth() !== selectedMonth;
          const isSelected =
            selectedDate && date.toDateString() === selectedDate.toDateString();

          const event = events.find(
            (e) => new Date(e.dateTime).toDateString() === date.toDateString()
          );

          return (
            <CalendarDay
              key={date.toISOString()}
              dayNumber={dayNumber}
              isToday={isToday}
              isDifferentMonth={isDifferentMonth}
              isSelected={isSelected}
              handleClick={() => setSelectedDate(date)}
              event={
                event && {
                  time: event.dateTime.getTime().toString(),
                  name: event.requestName,
                }
              }
            />
          );
        })}
      </div>
    </>
  );
};

export default MonthlyCalendar;

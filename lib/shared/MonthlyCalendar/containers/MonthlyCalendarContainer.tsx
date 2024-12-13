import React, { Dispatch, SetStateAction, useState } from "react";
import MonthlyCalender from "../components/MonthlyCalendar";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Button } from "@mui/material";

interface IMonthlyCalendarContainer {
  username: String;
}

interface IMonthSelectorButton {
  month: number;
  setMonth: Dispatch<SetStateAction<number>>;
  year: number;
  setYear: Dispatch<SetStateAction<number>>;
}

const PrevMonthButton: React.FC<IMonthSelectorButton> = (selectedDate) => (
  <Button
    className="monthly-calendar__month-selector-button"
    onClick={() => handleMonthChange(selectedDate, true)}
  >
    <ChevronLeft />
  </Button>
);

const NextMonthButton: React.FC<IMonthSelectorButton> = (selectedDate) => (
  <Button
    className="monthly-calendar__month-selector-button"
    onClick={() => handleMonthChange(selectedDate, false)}
  >
    <ChevronRight />
  </Button>
);

const handleMonthChange = (
  handleMonthChange: IMonthSelectorButton,
  isPrev: boolean
) => {
  if (isPrev) {
    if (handleMonthChange.month - 1 >= 0) {
      handleMonthChange.setMonth(handleMonthChange.month - 1);
    } else {
      handleMonthChange.setYear(handleMonthChange.year - 1);
      handleMonthChange.setMonth(11);
    }
  } else {
    if (handleMonthChange.month + 1 <= 11) {
      handleMonthChange.setMonth(handleMonthChange.month + 1);
    } else {
      handleMonthChange.setYear(handleMonthChange.year + 1);
      handleMonthChange.setMonth(0);
    }
  }
};

const months = [
  "January",
  "Febuary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const MonthCalendarContainer: React.FC<IMonthlyCalendarContainer> = ({
  username,
}) => {
  // Create Get Request that uses the username to get their events
  console.log(username);

  const today = new Date();

  const [selectedMonth, setSelectedMonth] = useState(today.getMonth());
  const [selectedYear, setSelectedYear] = useState(today.getFullYear());

  return (
    <div className="monthly-calendar__container">
      <div className="monthly-calendar__month-selector">
        <PrevMonthButton
          month={selectedMonth}
          setMonth={setSelectedMonth}
          year={selectedYear}
          setYear={setSelectedYear}
        />
        <span className="monthly-calendar__month-selector-text">
          {months[selectedMonth]} {selectedYear}
        </span>
        <NextMonthButton
          month={selectedMonth}
          setMonth={setSelectedMonth}
          year={selectedYear}
          setYear={setSelectedYear}
        />
      </div>
      <MonthlyCalender
        events={[]}
        selectedMonth={selectedMonth}
        selectedYear={selectedYear}
      />
    </div>
  );
};

export default MonthCalendarContainer;

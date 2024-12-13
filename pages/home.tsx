import React, { useState } from "react";
import { MonthlyCalender } from "../lib/shared/MonthlyCalendar";
import { WavingHand, MeetingRoom } from "@mui/icons-material";
import { Button } from "@mui/material";
import { isDesktop } from "react-device-detect";

interface IWelcomeComponent {
  username: string;
}

const WelcomeComponent: React.FC<IWelcomeComponent> = ({ username }) => {
  return (
    <div className="welcome__container">
      <WavingHand />
      <span className="welcome__text">Hello, {username}</span>
    </div>
  );
};

const LogoutButton: React.FC = () => {
  return (
    <Button className="logout__button">
      Logout
      <MeetingRoom className="logout__icon" />
    </Button>
  );
};

const HomePage: React.FC = () => {
  return (
    <>
      <div className="home__welcome">
        <WelcomeComponent username="User123" />
        <LogoutButton />
      </div>
      <div className="home__content">
        <MonthlyCalender username="" />
        {isDesktop && (
          <>
            <div className="home__divider"></div>
            <MonthlyCalender username="" />
          </>
        )}
      </div>
    </>
  );
};

export default HomePage;

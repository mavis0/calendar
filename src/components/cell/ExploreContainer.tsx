import { useState } from "react";
import { geneMonthCal } from "../../util";
import "./ExploreContainer.css";

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  const now = new Date();
  const geneOneMonthDom = (year: number, month: number) => {
    const calendar = geneMonthCal(year, month);
    const now = new Date();
    const isSameMonth = now.getFullYear() === year && now.getMonth() == month;
    return (
      <>
        <div style={{ textAlign: "center" }}>------------------------{month+1}月------------------------</div>
        {calendar.map((week, i) => (
          <div key={i} className="outer">
            {week.map((day, j) => (
              <div key={j} className="cell">
                <span
                  className={
                    isSameMonth && now.getDay() - 1 === day ? "text" : ""
                  }
                >
                  {day < 1 ? "" : day}
                </span>
              </div>
            ))}
          </div>
        ))}
      </>
    );
  };
  return (
    <>
      {geneOneMonthDom(now.getFullYear(), now.getMonth())}
      {geneOneMonthDom(now.getFullYear(), now.getMonth() + 1)}
      {geneOneMonthDom(now.getFullYear(), now.getMonth() + 2)}
    </>
  );
};

export default ExploreContainer;

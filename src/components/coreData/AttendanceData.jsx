import React from "react";
import Section from "../section/Section";
import CommonThreeDataPiences from "./CommonThreeDataPieces";

import "./styles.css";

const AttendanceData = ({ data }) => {
  let { national_average, percentage, number, rank } = data.six_to_eighteen;
  return (
    <div className="attendance-section">
      <Section title="Attendance Data For Six to Eighteen Years Old">
        <CommonThreeDataPiences
          national_average={national_average}
          percentage={percentage}
          number={number}
          rank={rank}
        />
      </Section>
    </div>
  );
};

export default AttendanceData;

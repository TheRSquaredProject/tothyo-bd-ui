import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import "./styles.css";

const CommonThreeDataPieces = ({ national_average, number, percentage, rank }) => {

  national_average = formatToTwoDecimalPlace(national_average);
  percentage = formatToTwoDecimalPlace(percentage);

  return (
    <div className="card-rows">
      <Card raised className="attendance-card">
        <CardContent>National Average: {national_average} %</CardContent>
      </Card>
      <Card raised className="attendance-card">
        <CardContent>Total Number: {number}</CardContent>
      </Card>
      <Card raised className="attendance-card">
        <CardContent>Percentage: {percentage} %</CardContent>
      </Card>
      <Card raised className="attendance-card">
        <CardContent>Rank: {rank}</CardContent>
      </Card>
    </div>
  );
};

function formatToTwoDecimalPlace(data){
   return parseFloat(data).toFixed(2);
}

export default CommonThreeDataPieces;
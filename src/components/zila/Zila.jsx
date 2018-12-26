import React , { Component } from "react";
import AttendanceData from "../coreData/AttendanceData";

class Zila extends Component {
    render() {
        let { zila } = this.props;
        return (<div>
            <AttendanceData data={zila.attendance_data} />
        </div>)
    }
}

export default Zila;
export default class Attendance{
    /**
     * Each field is an object with the following properties:
     * - {number} national_average
     * - {number} number
     * - {number} percentage
     * - {string} rank
     */
    constructor(data){
        this.six_to_ten = data.school_attendance_of_6_to_10;
        this.six_to_eighteen = data.school_attendance_of_6_to_18;
        this.eleven_to_thirteen = data.school_attendance_of_11_to_13;
        this.fourteen_to_fifteen = data.school_attendance_of_14_to_15;
    }
}
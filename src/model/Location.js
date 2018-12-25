export default class Location {
    /**
     * Each field is an object with the following properties:
     * - {number} national_average
     * - {number} number
     * - {number} percentage
     * - {string} rank
     */
    constructor(data){
        this.area = data.area;
        this.disgeocode = data.disgeocode;
        this.division = data.division;
        this.length = data.length;
        this.zila = data.zila;
    }
}
export default class Poverty {
    /**
     * Each field is an object with the following properties:
     * - {number} national_average
     * - {number} number
     * - {number} percentage
     * - {string} rank
     */
    constructor(data) {
        this.extreme_poverty = data.extreme_proverty_data;
        this.poverty = data.poverty;
    }
}
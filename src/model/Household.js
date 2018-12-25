export default class Household{
    /**
     * Each field is an object with the following properties:
     * - {number} national_average
     * - {number} number
     * - {number} percentage
     * - {string} rank
     */
    constructor(data){
        this.electricity = data.electricity;
        this.number_of_household = data.number_of_household;
        this.water = new WaterInfo(data.water);
    }
}

class WaterInfo{
    /**
     * Each field is an object with the following properties:
     * - {number} national_average
     * - {number} number
     * - {number} percentage
     * - {string} rank
     */
    constructor(data) {
        this.tapwater = data.tapwater;
        this.tubewell_water = data.tubewell_water;
    }
}
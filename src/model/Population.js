export default class Population {
    /**
     * Each field,except summary, is an object with the following properties:
     * - {number} national_average
     * - {number} number
     * - {number} percentage
     * - {string} rank
     */
    constructor(data){
        this.above_65 = data.above_65_years;
        this.zero_to_six = data.between_0_6_years;
        this.fifteen_to_sixtyfour = data.between_15_64_years;
        this.seven_to_fourteen = data.between_7_14_years;
        this.bottom_popn = data.bottom_population;
        this.summary = data.summary; // summary: {rural, total, working}
    }
}
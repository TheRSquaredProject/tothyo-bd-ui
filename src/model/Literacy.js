export default class Literacy {
    /**
     * Each field is an object with the following properties:
     * - {number} national_average
     * - {number} number
     * - {number} percentage
     * - {string} rank
     */
    constructor(data){
        this.average = data.average_data;
        this.less_than_primary = data.less_than_primary_education;
        this.primary_education = data.primary_education;
        this.secondary_education = data.secondary_education;
        this.university_education = data.university_education;
    }
}
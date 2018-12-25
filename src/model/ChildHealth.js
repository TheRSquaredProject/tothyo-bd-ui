export default class ChildHealth {    
    /**
    * Each field is an object with the following properties:
    * - {number} national_average
    * - {number} number
    * - {number} percentage
    * - {string} rank
    */
    constructor(data){
        this.severely_stunted = data.severely_stunted_children;
        this.severely_underweight = data.severely_underweight_children;
        this.stunted = data.stunted_children;
        this.underweight = data.underweight_children;
    }
}
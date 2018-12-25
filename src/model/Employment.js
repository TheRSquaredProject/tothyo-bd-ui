export default class Employment{
    /**
     * Each field is an object with the following properties:
     * - {number} national_average
     * - {number} number
     * - {number} percentage
     * - {string} rank
     */
    constructor(data){
        this.agricultural = data.agriculture_employment_info;
        this.industry = data.industry_employment_info;
        this.service_holders = data.service_holders;
    }
}
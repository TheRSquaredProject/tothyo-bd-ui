import Attendance from "./Attendance";
import ChildHealth from "./ChildHealth";
import Employment from "./Employment";
import Household from "./Household";
import Literacy from "./Literacy";
import Location from "./Location";
import Population from "./Population";
import Poverty from "./Poverty";

export default class Zila {
    constructor(zila){
        this.Id = zila._id;
        this.attendance_data = new Attendance(zila.attendance_data);
        this.child_health_data = new ChildHealth(zila.child_health_data);
        this.employment_data = new Employment(zila.employment_data);
        this.household_info = new Household(zila.household_info);
        this.literate_data = new Literacy(zila.literate_data);
        this.location_data = new Location(zila.location_data);
        this.population_data = new Population(zila.population_data);
        this.poverty_data = new Poverty(zila.poverty_data);
    }
}
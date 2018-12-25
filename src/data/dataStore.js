import {parseBdSummaryData} from "./bdSummary";

let bdSummary;
let zilas;
let zilaNames;

export function getZilaData() {
    if(zilas){
        return zilas;
    } 
}

export function setZilaData(data){
    zilas = data;
}

export function getZilaNames(){
    if(zilaNames) {
       return zilaNames;
    }
}

export function setZilaNames(data) {
    zilaNames = data;
}

export function getBdSummary(){
    if(!bdSummary){
        bdSummary = parseBdSummaryData(getZilaData())
    }

    return bdSummary;
}
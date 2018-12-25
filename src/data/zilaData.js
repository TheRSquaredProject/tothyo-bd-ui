export function fetchZilaData() {
    let apiEndpoint = "http://tothyobangladesh-env.8mj2vjzjpz.us-east-1.elasticbeanstalk.com/api/zila";
     return fetch(apiEndpoint)
        .then((resp) => resp.json())
        .catch((err) => console.log(err));
}

export function parseZilaNames(zilas){
    return zilas.map(zila => {
        return zila.location_data.zila;
    });
}

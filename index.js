import {
  degreeToRadian,
  getDistanceFromLatLonInKm,
  sortUser
} from "./utils.js";
import { users } from "./users.js";

let dublinLat = 53.339428;
let dublinLon = -6.257664;

var getEmployee = document.getElementById("getEmployee");
getEmployee.onclick = function(){
// convert the users array and sort based on user_id and returns new sorted array "newUsers"
  let newUsers = users.sort(sortUser("user_id"));
  newUsers.forEach(({ latitude, longitude, name, user_id }) => {
    
    // function getDistanceFromLatLonInKm returns distance in KM
    let distFromDub = getDistanceFromLatLonInKm(
      dublinLat,
      dublinLon,
      latitude,
      longitude
    );
  
    if (distFromDub <= 100) {
      let roundedDist = Math.floor(distFromDub); // converting the distance to nearest lower integer using Math.floor
      const appDiv = document.getElementById("employee");
      appDiv.innerHTML += `<p>${name} with user_id ${user_id} is from a distance of ${roundedDist}`;
    }
  });
}


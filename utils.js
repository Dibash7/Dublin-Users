// function to convert to degree to radian
const degreeToRadian = degree => {
  let pi = Math.PI;
  return (pi / 180) * degree;
};

// function to calculate distance between two coordinates in KM
const getDistanceFromLatLonInKm = (lat1, lon1, lat2, lon2) => {
  var R = 6371; // Radius of the earth in km
  var dLat = degreeToRadian(lat2 - lat1); // deg2rad below
  var dLon = degreeToRadian(lon2 - lon1);
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(degreeToRadian(lat1)) *
      Math.cos(degreeToRadian(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c; // Distance in km
  return d;
};

// function to sort an array of objects
const sortUser = (key, order = "asc") => { // default sorting is ascending
  return function innerSort(a, b) {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      return 0; //property does not exist in object
    }

    const varA = typeof a[key] === "string" ? a[key].toUpperCase() : a[key];
    const varB = typeof b[key] === "string" ? b[key].toUpperCase() : b[key];

    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return order === "desc" ? comparison * -1 : comparison;
  };
};

export { degreeToRadian, getDistanceFromLatLonInKm, sortUser };

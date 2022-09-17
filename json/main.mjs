import data from './data.json' assert {type: "json"};
let srtData = JSON.stringify(data);
let arrayData = JSON.parse(srtData).users;
arrayData.forEach(element => {
    console.log(
        `${element.firstname} ${element.lastName}, ${element.dateOfBirth} ${element.knowsAs}`,
    );
});
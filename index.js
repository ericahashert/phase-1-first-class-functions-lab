const returnFirstTwoDrivers = function (driverNames) {
    return driverNames.slice(0, 2);
}
returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])

const returnLastTwoDrivers = function (driverNames) {
    return driverNames.slice(2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (multiplyValue) {
    return function (value) {
        return multiplyValue * value;
    };
};

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (driverNames, driversToSelect) {
    return driversToSelect(driverNames)
}
     

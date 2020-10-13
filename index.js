// Write your solution in this file!
const driver = {
    name: "Sam",
    address: '11 Chenango ave'

}

function  updateDriverWithKeyAndValue(driver, key, value) {
    let newDriver = Object.assign({}, driver);
    newDriver['address'] = '11 Broadway'
    return newDriver
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver['address']= '12 Broadway';

    return driver;
}

function deleteFromDriverByKey(driver, key) {
    let dc = Object.assign({}, driver);
    delete dc[key];
    return dc;

}

function destructivelyDeleteFromDriverByKey(driver, key){
    delete driver[key];
    return driver;
  }

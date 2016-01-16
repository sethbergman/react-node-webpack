var Enums = require("../shared/enums.js");

function getDataItem (ageGroup, computer, laptop, phone, tablet, television, console) {
    var item = {};
    var userInfo = {};
    var device = {};

    if (computer + laptop + phone + tablet + television + console !== 100) {
        throw new Error("Data item must equal 100");
    }

    userInfo.ageGroup = ageGroup;
    userInfo.participants = 1;

    device.computer = computer;
    device.laptop = laptop;
    device.phone = phone;
    device.tablet = tablet;
    device.television = television;
    device.console = console;

    item.userInfo = userInfo;
    item.device = device;

    return item;
};

var data = {
    setData: function (item) {
        this.values.push(item);
    },

    values: []
};

data.setData(getDataItem(Enums.AgeGroupEnum.UnderTwentyFive, 0, 30, 35, 10, 5, 20));
data.setData(getDataItem(Enums.AgeGroupEnum.UnderTwentyFive, 0, 30, 35, 10, 5, 20));
data.setData(getDataItem(Enums.AgeGroupEnum.UnderTwentyFive, 0, 30, 35, 10, 5, 20));
data.setData(getDataItem(Enums.AgeGroupEnum.UnderTwentyFive, 0, 30, 35, 10, 5, 20));

data.setData(getDataItem(Enums.AgeGroupEnum.TwentyFiveToThirtyFour, 10, 25, 30, 15, 0, 20));
data.setData(getDataItem(Enums.AgeGroupEnum.TwentyFiveToThirtyFour, 10, 25, 30, 15, 0, 20));
data.setData(getDataItem(Enums.AgeGroupEnum.TwentyFiveToThirtyFour, 10, 25, 30, 15, 0, 20));
data.setData(getDataItem(Enums.AgeGroupEnum.TwentyFiveToThirtyFour, 10, 25, 30, 15, 0, 20));

data.setData(getDataItem(Enums.AgeGroupEnum.ThirtyFiveToFortyFour, 20, 30, 25, 20, 0, 5));
data.setData(getDataItem(Enums.AgeGroupEnum.ThirtyFiveToFortyFour, 20, 30, 25, 20, 0, 5));
data.setData(getDataItem(Enums.AgeGroupEnum.ThirtyFiveToFortyFour, 20, 30, 25, 20, 0, 5));
data.setData(getDataItem(Enums.AgeGroupEnum.ThirtyFiveToFortyFour, 20, 30, 25, 20, 0, 5));

data.setData(getDataItem(Enums.AgeGroupEnum.FortyFiveToFiftyFour, 30, 25, 15, 30, 0, 0));
data.setData(getDataItem(Enums.AgeGroupEnum.FortyFiveToFiftyFour, 30, 25, 15, 30, 0, 0));
data.setData(getDataItem(Enums.AgeGroupEnum.FortyFiveToFiftyFour, 30, 25, 15, 30, 0, 0));
data.setData(getDataItem(Enums.AgeGroupEnum.FortyFiveToFiftyFour, 30, 25, 15, 30, 0, 0));

data.setData(getDataItem(Enums.AgeGroupEnum.OverFiftyFive, 40, 30, 10, 20, 0, 0));
data.setData(getDataItem(Enums.AgeGroupEnum.OverFiftyFive, 40, 30, 10, 20, 0, 0));
data.setData(getDataItem(Enums.AgeGroupEnum.OverFiftyFive, 40, 30, 10, 20, 0, 0));
data.setData(getDataItem(Enums.AgeGroupEnum.OverFiftyFive, 40, 30, 10, 20, 0, 0));

module.exports = data;

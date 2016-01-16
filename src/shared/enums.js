//https://stijndewitt.wordpress.com/2014/01/26/enums-in-javascript/

var enums = {
    AgeGroupEnum: {
        UnderTwentyFive: 1,
        TwentyFiveToThirtyFour: 2,
        ThirtyFiveToFortyFour: 3,
        FortyFiveToFiftyFour: 4,
        OverFiftyFive: 5,
        properties: {
            1: { description: "<25" },
            2: { description: "25-34" },
            3: { description: "35-44" },
            4: { description: "45-54" },
            5: { description: "55+" }
        }
    }
};

module.exports = enums;

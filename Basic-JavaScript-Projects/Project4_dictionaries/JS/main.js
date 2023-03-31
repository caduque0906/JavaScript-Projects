function my_Dictionary() {
    var Galaxy_S23_Ultra = { //creating dictionary
        Battery: "5,000 mAh",
        Storage: "1TB",
        Processor: "Qualcomm Snapdragon 8 Gen2",
        Model_Number: "SM-S918"
    };
    delete Galaxy_S23_Ultra.Model_Number; //Making key-value pair undefined
    document.getElementById("Dictionary").innerHTML = Galaxy_S23_Ultra.Model_Number; // outputting key-value pair from HTML
}
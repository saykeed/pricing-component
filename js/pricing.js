let slider = document.querySelector("#range");
let getViews = document.querySelector("#views span");
let getPrice = document.querySelector("#amount");
let getPeriod = document.querySelector("#period");

// grabing the toggler button ball properties
let getTogBall = document.querySelector("#toggball");
let togBallPosition = getComputedStyle(getTogBall);

// arrays (for pageviews with monthly and yearly prices)
const monthlyPrice = ["8.00", "12.00", "16.00", "24.00", "36.00"];
const yearlyPrice = ["6.00", "9.00", "12.00", "18.00", "27.00"];
const pageViews = ["10K", "50K", "100K", "500K", "1M"]



// logic starts here

let toggler = function () {
    if (togBallPosition.left === "2px") {
        // this is for yearly billing
        getTogBall.style.left = "22px";
        let y = Number(slider.value);
        getPrice.innerHTML = yearlyPrice[y-1];
        getPeriod.innerHTML = "/ year";

    } else if (togBallPosition.left === "22px") {
        // this is for monthly billing
        getTogBall.style.left = "2px";
        let m = Number(slider.value);
        getPrice.innerHTML = monthlyPrice[m-1];
        getPeriod.innerHTML = "/ month";
    }
}


slider.oninput = function () {
    let x;
    if (togBallPosition.left === "2px") {
        x = monthlyPrice;
    } else if (togBallPosition.left === "22px") {
        x = yearlyPrice;
    }
    // s stands for the slider value in this function
    let s = Number(slider.value);
    getPrice.innerHTML = x[s-1];
    getViews.innerHTML = pageViews[s-1];

}








//
//
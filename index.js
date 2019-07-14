// Code your solution in this file!

const hqLocation = 42;
const blockInFeet = 264;

function distanceInBlocks(start, end){
    return Math.abs(start - end);
}

function distanceFromHqInBlocks(start){
    return Math.abs(start - hqLocation);
}

function distanceFromHqInFeet(start){
    return distanceFromHqInBlocks(start) * blockInFeet;    
}

function distanceTravelledInFeet(start, end){
    return distanceInBlocks(start, end) * blockInFeet;    
}

function calculatesFarePrice(start, end){
    let distance = distanceTravelledInFeet(start, end);

    if (distance <= 400){
        return 0
    } else if (distance > 400 && distance < 2000){
        return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance < 2500){
        return 25;
    } else if (distance >2500) {
        return 'cannot travel that far';
    }
}
  
  function distanceFromHqInBlocks(blocks) {
        return Math.abs(blocks - 42)
  }

  function distanceFromHqInFeet(blocks) {  
        return Math.abs((blocks - 42) * 264)
  }

function distanceTravelledInFeet(start, destination){
    return Math.abs((start - destination) * 264)
}

function calculatesFarePrice(start, destination) {
   let price = Math.abs((start - destination) * 264)
    if (price <= 400){
    return (price * 0);
    } else if (price > 400 && price < 2000) {
        return ((price - 400)* .02);
    } else if (price > 2000 && price < 2500) {
        return price = 25;
    } else if (price >= 2500) {
        return 'cannot travel that far'
    }
}


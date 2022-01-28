const carPassing = function (cars, speed) {
  let time = Date.now();
  let trafficFlow = {
    time: time, 
    speed: speed
  };
  cars.push(trafficFlow);
  return cars;
};
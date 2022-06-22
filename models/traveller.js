const { prototype } = require("mocha");

const Traveller = function (journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function () {
  return this.journeys.map((journey) => journey.startLocation)

};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map((journey) => journey.endLocation)

};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter((journey) => journey.transport === transport)
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter((journey) => journey.distance > minDistance)
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((total, journey) => {
    return total += journey.distance
  }, 0)
};

Traveller.prototype.checkForTransport = function (array, modeOfTransport) {
  return array.some((journey) => {
    return journey.transport === modeOfTransport
  })
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  const uniqueArray = []
  this.journeys.forEach((journey) => {
    if (!this.checkForTransport(uniqueArray, journey.transport)) {
      uniqueArray.push(journey.transport)
    }
  });
  return uniqueArray
}

module.exports = Traveller;
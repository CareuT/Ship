class Location {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class Ship {
  
  constructor(x, y, divv) {
    this.divv = divv;
    this.location = new Location(x, y);
    this.finished = false;
  }
  
  almostEqual (location, dest) {
    if (location.x < (dest.x - 1) || location.x > (dest.x + 1)) {
      return false;
    }
    if (location.y < (dest.y - 1) || location.y > (dest.y + 1)) {
      return false;
    }
    return true;
  }

  //ToDo: Change last parameter to a location object//
  moveOne(ship, deltaX, deltaY, dest) {
    ship.location.x += deltaX;
    ship.divv.style.left = ship.location.x;
    ship.location.y += deltaY;
    ship.divv.style.top = ship.location.y;
    if (ship.almostEqual(ship.location, dest)) {
      ship.finished = true;
      clearInterval(ship.clock);
    }
  }
  

  checkDestination() {
    return this.finished;
  }
  
  sail(pointA, pointB) {
    this.location = pointA;
    const dX = (pointB.x - pointA.x) / 100;
    const dY = (pointB.y - pointA.y) / 100;
    this.clock = setInterval(this.moveOne, 50, this, dX, dY, pointB);

  }

  goToWaypoint(point) {
    const dX = (point.x - this.location.x) / 100;
    const dY = (point.y - this.location.y) / 100;
    this.clock = setInterval(this.moveOne, 50, this, dX, dY, point);

  }

}

exports = {Location, Ship};

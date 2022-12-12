interface Car {
  brand: string;
  speed: number;
  speedMethod: (speed: number) => void;
}

class AutoMobile implements Car {
  brand: string;
  speed: number;
  speedMethod(speed) {
    console.log(speed);
  }
}

const carObject = new AutoMobile();
carObject.speedMethod(50);

interface Car {
  brand: string;
  speed: number;
  speedMethod: (speed: number) => void;
}

interface Car2 extends Car {
  name: string;
}

class AutoMobile implements Car {
  brand: string;
  speed: number;
  speedMethod(speed) {
    console.log(speed);
  }
}

const autoMobile2: Car2 = {
  brand: "autoMobile2",
  speed: 10,
  name: "string",
  speedMethod(speed) {
    console.log(speed);
  },
};
const carObject = new AutoMobile();
carObject.speedMethod(50);

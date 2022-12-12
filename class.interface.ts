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
  speedMethod(speed: number) {
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

class Tree {
  constructor(public branch: string, private leaf: string) {
    this.branch = branch;
    this.leaf = leaf;
  }
  public mouseLeave() {
    console.log(this.leaf);
  }
}

const tree: Tree = new Tree("grean leaf", "root");

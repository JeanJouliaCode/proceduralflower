const petalNumberMultiplicator = 30;
const centerRadiusMultiplicator = 0.2;
const petalLengthMultiplicator = 0.18;
const petalWidthMultiplicator = 0.2;
const petalColorMultiplicator = 340;

export default class Flower {
  constructor(options = null) {
    this.options = {
      centerRadius: Math.random(),
      petalNumber1: Math.random(),
      petalLength1: Math.random(),
      petalWidth1: Math.random(),
      petalColor1: Math.random(),
      petalNumber2: Math.random(),
      petalLength2: Math.random(),
      petalWidth2: Math.random(),
      petalColor2: Math.random(),
      centerColor: Math.random(),
    };

    if (!options) return

    for (const key of Object.keys(options)) {
      if (this.options[key]) {
        this.options[key] = options[key]
        continue
      }
      console.error(`option: "${key}" doesn't exist`)
    }
  }

  setOption(key, value) {
    if (this.options[key]) {
      this.options[key] = value
      return this
    }
    console.error(`option: "${key}" doesn't exist`)
  }

  getSVGGroup() {
    const group = document.createElementNS("http://www.w3.org/2000/svg", "g");
    const petalColor1 = Math.round(this.options.petalColor1 * petalColorMultiplicator);
    const petalColor2 = Math.round(this.options.petalColor2 * petalColorMultiplicator);
    const petalLength1 = this.options.petalLength1 * petalLengthMultiplicator;
    const petalWidth1 = this.options.petalWidth1 * petalWidthMultiplicator;
    const petalLength2 = this.options.petalLength2 * petalLengthMultiplicator;
    const petalWidth2 = this.options.petalWidth2 * petalWidthMultiplicator;
    const petalNumber1 = Math.round(this.options.petalNumber1 * petalNumberMultiplicator);
    const petalNumber2 = Math.round(this.options.petalNumber2 * petalNumberMultiplicator);

    const petals1 = this.getPetals(petalColor1, petalNumber1, petalLength1, petalWidth1);
    const petals2 = this.getPetals(petalColor2, petalNumber2, petalLength2, petalWidth2);

    group.appendChild(petals1);
    group.appendChild(petals2);
    group.appendChild(this.getRound());
    return group
  }

  getPetals(color, petalNumber, petalLength, petalWidth) {
    const groupLayer1 = document.createElementNS("http://www.w3.org/2000/svg", "g");
    const groupAllLayer = document.createElementNS("http://www.w3.org/2000/svg", "g");

    const step = (Math.PI * 2) / (petalNumber * 2)


    for (var index = 0; index < petalNumber * 2; index++) {
      const petal = this.getPetal(step * index + Math.PI / 8, petalLength, petalWidth, color)
      groupLayer1.appendChild(petal);
    }
    groupAllLayer.appendChild(groupLayer1)
    groupAllLayer.appendChild(this.getPetalsHalfReverse(groupLayer1));
    return groupAllLayer;
  }

  getPetal(angle, petalLength, petalWidth, color = null) {
    const radius = this.options.centerRadius * centerRadiusMultiplicator;

    const petal = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "ellipse"
    );
    petal.setAttribute("rx", `${petalLength}`);
    petal.setAttribute("ry", `${petalWidth}`);
    petal.setAttribute("cx", `${petalLength - radius * 0.1}`);
    petal.setAttribute("cy", `${0}`);
    petal.setAttribute("stroke-width", `0.005`);
    petal.setAttribute("stroke", `hsl(${color + 20}, 50%, 20%)`);
    petal.setAttribute("fill", `hsl(${color}, 50%, 50%)`);
    petal.setAttribute("transform",
      `${`translate(${radius * Math.cos(angle)},${radius * Math.sin(angle)})`}
      rotate(${(angle * 360) / (Math.PI * 2)})`
    );
    return petal;
  }

  getPetalsHalfReverse(petals) {
    const mask = document.createElementNS("http://www.w3.org/2000/svg", "mask");
    const group = document.createElementNS("http://www.w3.org/2000/svg", "g")
    const allowedShape = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    const petalsCopie = petals.cloneNode(true);

    allowedShape.setAttribute("width", "0.5");
    allowedShape.setAttribute("height", "1");
    allowedShape.setAttribute("fill", "white");
    allowedShape.setAttribute("x", "-0.5");
    allowedShape.setAttribute("y", "-0.5");

    petalsCopie.setAttribute("mask", `url(#myMask)`);
    mask.appendChild(allowedShape);
    mask.setAttribute("id", "myMask");
    petalsCopie.setAttribute("transform", `rotate(${180})`);
    group.appendChild(mask)
    group.appendChild(petalsCopie)

    return group;
  }

  getRound() {
    const radius = this.options.centerRadius * centerRadiusMultiplicator;
    const round = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    const centerColor = Math.round(this.options.centerColor * petalColorMultiplicator);

    round.setAttribute("r", `${radius}`);
    round.setAttribute("cx", "0");
    round.setAttribute("cy", "0");
    round.setAttribute("fill", `hsl(${centerColor}, 50%, 50%)`);
    return round;
  }
}

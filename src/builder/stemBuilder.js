const lengthMultiplicator = 1;
const nbLine = 200;
const widthMultiplicator = 1.2;

export default class Stem {
  constructor(options = null) {
    this.options = {
      length: Math.random(),
      width: Math.random(),
      color: Math.random(),
      frequency: Math.random(),
      amplitude: Math.random(),
      flowerHeadRadius: 0.1,
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

  getSVG() {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", `0.5 0 1 ${this.options.length * lengthMultiplicator + 0.1}`);
    const width = Math.max(this.options.flowerHeadRadius * this.options.width * widthMultiplicator, 0.05)
    const color = Math.floor(this.options.color * 340)
    svg.appendChild(this.getLine(`hsl(${color + 20}, 50%, 20%)`, width))
    return svg
  }

  getLine(color, width) {
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    const start = -0.5
    const end = this.options.length * lengthMultiplicator + 0.1
    const periodeNb = Math.floor(this.options.frequency * 4) * 2
    const amplitude = 0.07 * this.options.amplitude
    const step = (Math.abs(start) + end) / nbLine
    let pathContent = ""

    for (var index = 0; index < nbLine; index++) {
      pathContent += `${index === 0 ? "M" : "L"} ${1 + amplitude * Math.sin(((Math.PI * periodeNb) / nbLine) * index)} ${start + index * step} `
    }
    path.setAttribute("stroke", color)
    path.setAttribute("fill", "transparent")
    path.setAttribute("stroke-width", width)
    path.setAttribute("d", `${pathContent}`)
    return path
  }
}

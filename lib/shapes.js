class Shape {
    constructor() {
      this.color = "";
    }setColor(color) {
      this.color = color;
    }
}

class Circle extends Shape {
  render() {
    // Returns polygon with color input
    return `<circle cx="150" cy="115" r="80" fill="${this.color}" />`;
  }
}
class Triangle extends Shape {
  render() {
    // Returns polygon with color input
    return `<polygon points="150,18 244,182 56,182" fill="${this.color}" />`;
  }
}
class Square extends Shape {
  render() {
    // Returns polygon with color input
    return `<rect x="73" y="40" width="200" height="200" fill="${this.color}" />`;
  }
}


module.exports = { Circle, Triangle, Square };
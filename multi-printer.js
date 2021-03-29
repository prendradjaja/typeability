const HORIZONTAL_SPACING = 0;
const VERTICAL_SPACING = 0;

class MultiPrinter {
  constructor(linesCount) {
    this.buffer = new Array(linesCount).fill('');
  }

  log(...items) {
    items = items.map(x => '' + x);
    const width = HORIZONTAL_SPACING + Math.max(...items.map(x => x.length));
    for (let [i, item] of items.entries()) {
      this.buffer[i] += item.padEnd(width);
    }
  }

  flush() {
    for (let line of this.buffer) {
      console.log(line);
    }
    for (let i = 0; i < VERTICAL_SPACING; i++) {
      console.log();
    }
    this.buffer.fill('');
  }
}

module.exports = MultiPrinter;

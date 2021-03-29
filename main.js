const MultiPrinter = require('./multi-printer');

const layouts = {
  qwerty: [
    'qwertyuiop',
    'asdfghjkl;',
    'zxcvbnm,./',
    'QWERTYUIOP',
    'ASDFGHJKL:',
    'ZXCVBNM<>?',
  ],
  dvorak: [
    "',.pyfgcrl",
    'aoeuidhtns',
    ';qjkxbmwvz',
    '"<>PYFGCRL',
    'AOEUIDHTNS',
    ':QJKXBMWVZ',
  ],
};

function getFinger(character) {
  const matchedRow = layout.filter(row => row.includes(character))[0];
  if (!matchedRow) {
    return undefined;
  }
  const index = matchedRow.indexOf(character);
  const indexToFinger = ['L4', 'L3', 'L2', 'L1', 'L1', 'R1', 'R1', 'R2', 'R3', 'R4'];
  return indexToFinger[index];
}

function getHand(character) {
  const finger = getFinger(character);
  return finger ? finger.charAt(0) : undefined;
}

function* consecutives(iterable) {
  let first = true;
  let prev = undefined;
  for (let item of iterable) {
    if (first) {
      first = false;
      prev = item;
    } else {
      yield [prev, item];
      prev = item;
    }
  }
}

const layoutName = 'qwerty';
const interpretCharacter = getFinger;
const layout = layouts[layoutName];
const rowLength = 30;
let message = 'In the beginning, the Universe was created. This has made a lot of people very angry and been widely regarded as a bad move.';
message = Array.from(' ' + message);
const printer = new MultiPrinter(2);
let sameCount = 0;
for (
  let [i, [a, b]]
  of Array.from(consecutives(
    message.map(character => ({
      character,
      fingerOrHand: interpretCharacter(character)
    }))
  )).entries()
) {
  const same = a.fingerOrHand === b.fingerOrHand;
  sameCount += +same;
  printer.log(
    b.character,
    // b.fingerOrHand '_',
    same ? '*' : '',
  );
  if (i % rowLength === rowLength - 1) {
    printer.flush();
  }
}
printer.flush();
console.log(sameCount);

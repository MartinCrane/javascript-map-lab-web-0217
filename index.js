const knownDecepticons = ['Megatron', 'Skywarp', 'Laserbeak', 'Barricade'];

const robots = [
  { name: 'Bumblebee', alliance: null },
  { name: 'Laserbeak', alliance: null },
  { name: 'Barricade', alliance: null },
  { name: 'Optimus Prime', alliance: null },
  { name: 'Skywarp', alliance: null },
  { name: 'Megatron', alliance: null },
  { name: 'Ironhide', alliance: null },
  { name: 'Ratchet', alliance: null }
];

const zebraStripes = [
  { width: 9.12, color: null },
  { width: 5.71, color: null },
  { width: 6.01, color: null },
  { width: 1.54, color: null },
  { width: 8.34, color: null },
  { width: 7.77, color: null },
  { width: 0.59, color: null },
  { width: 7.31, color: null }
];

const makeDecep = (nameSpace) => Object.assign({}, {name: nameSpace, alliance: 'decepticon'})
const makeAutobot = (nameSpace) => Object.assign({}, {name: nameSpace, alliance: 'autobot'})


var sortedRobots = robots.map((autobot) => {
  if (knownDecepticons.indexOf(autobot.name) == -1) {
    return makeAutobot(autobot.name);
  } else {
    return makeDecep(autobot.name);
  }
})

const colorAssign = (mapColor, mapWidth) => Object.assign({}, {width: mapWidth, color: mapColor})

var coloredZebraStripes = zebraStripes.map((stripe, index) => {
  if (index%2==0 || index==0) {
    return colorAssign("white", stripe.width)
  } else {
    return colorAssign("black", stripe.width)
  }
})

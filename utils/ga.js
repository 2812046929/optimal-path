module.exports = (that) => {

  const app = getApp()
  var cities = that.data.purchased //存放城市的相关信息
  var totalCities = that.data.purchased.length //城市总数
  var popSize = 5 * totalCities //种群个数
  var fitness = [] //适应度
  var population = []
  var recordDistance = Infinity
  var bestEver //最终排序
  var order = []
  var that = this

  for (let i in cities) {

    order[i] = cities[i];
  }

  for (var i = 0; i < popSize; i++) {
    var s = shuffle(order)
    population.push(JSON.parse(s))
  }

  //  GA调用遗传算法
  for (var i = 1; i <= 15 * totalCities; i++) {

    calculateFitness();

    normalizeFitness();

    nextGeneration();

  }

  console.log("bestEver:", bestEver)

  return bestEver

  function nextGeneration() {

    var newPopulation = []

    for (let i = 0; i < popSize; i++) {

      var orderA = pickOne(population, fitness)

      var orderB = pickOne(population, fitness)

      var orderC = crossOver(orderA, orderB);

      mutate(orderC, 0.01);

      newPopulation[i] = orderC;

    }

    population = newPopulation;

  }


  function shuffle(order) {

    let indexA = parseInt(Math.random() * order.length);

    let indexB = parseInt(Math.random() * order.length);

    swap(order, indexA, indexB)

    return JSON.stringify(order)

  }

  function calculateFitness() {

    for (let i in population) {

      var d = calcDistance(cities, population[i]);

      if (d < recordDistance) {

        recordDistance = d;

        bestEver = population[i];

        console.log(recordDistance)

      }

      fitness[i] = 1 / (Math.pow(d, 8) + 1); //Math.pow() 函数返回基数（base）的指数（exponent）次幂，即 base^exponent。

    }
  }

  function normalizeFitness() {

    var sum = 0;

    for (let i = 0; i < popSize; i++) {

      sum += fitness[i];

    }

    for (let i = 0; i < popSize; i++) {

      fitness[i] = fitness[i] / sum;

    }
  }


  //交配
  function crossOver(orderA, orderB) {

    var start = parseInt(Math.random() * orderA.length);

    var end = parseInt(Math.random() * (orderA.length - (start + 1)) + start + 1);

    var neworder = orderA.slice(start, end);

    for (let i = 0; i < orderB.length; i++) {

      var city = orderB[i];

      var sorder = JSON.stringify(neworder)

      var isin = sorder.indexOf(JSON.stringify(city))

      if (isin == -1) {

        neworder.push(city);

      }

    }

    return neworder;

  }


  //随机选出一个种群
  function pickOne(list, prob) {


    var index = 0;

    var r = Math.random(); //1是伪随机数的种子，r是0-1的随机数

    while (r > 0) {

      r = r - prob[index];

      index++;

    }

    index--;

    return list[index]
  }


  function swap(a, i, j) {

    var temp = a[i];

    a[i] = a[j];

    a[j] = temp;

  }



  function dist(a, b, c, d) {

    return Math.abs(c - a) + Math.abs(d - b);

  }
  //变异
  function mutate(order, mutationRate) {

    for (let i = 0; i < totalCities; i++) {

      if (Math.random() < mutationRate) {

        var indexA = parseInt(Math.random() * order.length);

        var indexB = parseInt(Math.random() * order.length);

        swap(order, indexA, indexB);

      }
    }
  }



  //按order排序所走路径
  function calcDistance(points, order) {

    var sum = 0;

    for (var i = 0; i < order.length - 1; i++) {


      var cityAIndex = order[i].id - 1;

      var cityA = points[cityAIndex];

      var cityBIndex = order[i + 1].id - 1;

      var cityB = points[cityBIndex];

      var x1 = cityA.x + cityA.w / 2

      var y1 = cityA.y + cityA.h / 2

      var x2 = cityB.x + cityB.w / 2

      var y2 = cityB.y + cityB.h / 2

      var d = dist(x1, y1, x2, y2);

      sum += d;

    }

    return sum;

  }


}
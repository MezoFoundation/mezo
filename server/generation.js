#!/usr/bin/env node
import HolonList from './engine.js'
import Person from './person.js'
import Holon from './engine.js'

var Generation = (function () {
  function Generation () {
    this.holons = ([])
    this.population = ([])
    this.idCount = 0
    this.maxToken = 0
    this.allHoloncombos = ([])
    this.numbers = null
  }
  Generation.prototype.makeHolonList = function () {
    this.holons.push(HolonList.Art) > 0
    this.holons.push(HolonList.Construction) > 0
    this.holons.push(HolonList.Energy) > 0
    this.holons.push(HolonList.Judicial) > 0
    this.holons.push(HolonList.Military) > 0
    this.holons.push(HolonList.Education) > 0
    this.holons.push(HolonList.Reserve) > 0
    this.holons.push(HolonList.Munit) > 0
    this.holons.push(HolonList.Food) > 0
    this.holons.push(HolonList.Transportation) > 0
    this.holons.push(HolonList.Materials) > 0
    this.holons.push(HolonList.Health) > 0
    this.holons.push(HolonList.Industrials) > 0
  }
  Generation.prototype.mostValuedHolon = function () {
    this.makeHolonList()
    var mostValued = this.holons[0]
    for (var index1086 = 0; index1086 < this.holons.length; index1086++) {
      var h = this.holons[index1086]
      {
        if (mostValued.getPeopleInHolon() > h.getPeopleInHolon()) {
          mostValued = h
        }
      }
    }
    var valuedHolon = ([]);
    /* add */ (valuedHolon.push(mostValued) > 0);
    /* clear */ (this.holons.length = 0)
    return valuedHolon
  }
  Generation.prototype.leastValuedHolon = function () {
    this.makeHolonList()
    var leastValued = this.holons[0]
    for (var index1087 = 0; index1087 < this.holons.length; index1087++) {
      var h = this.holons[index1087]
      {
        if (leastValued.getPeopleInHolon() < h.getPeopleInHolon()) {
          leastValued = h
        }
      }
    }
    /* clear */ (this.holons.length = 0)
    return leastValued
  }
  Generation.prototype.holonSetAmount = function (hs) {
    var tokens = 0
    for (var index1088 = 0; index1088 < hs.length; index1088++) {
      var h = hs[index1088]
      {
        tokens += this.population.length / (h.getPeopleInHolon() + 1.0 / hs.length)
      }
    }
    tokens /= hs.length
    return tokens
  }
  Generation.prototype.bestPosition = function (population) {
    this.makeHolonList()
    var all = ([])
    var count = 0
    for (var i = 0; i < this.holons.length; i++) {
      var temp = ([]);
      /* add */ (temp.push(/* get */ this.holons[i]) > 0);
      /* add */ (all.push(temp) > 0)
      count++
    }
    ;
    for (var i = 0; i < this.holons.length; i++) {
      for (var j = i; j < this.holons.length; j++) {
        if (i !== j) {
          var temp = ([]);
          /* add */ (temp.push(/* get */ this.holons[i]) > 0);
          /* add */ (temp.push(/* get */ this.holons[j]) > 0);
          /* add */ (all.push(temp) > 0)
          count++
        }
      }
      ;
    }
    ;
    for (var i = 0; i < this.holons.length; i++) {
      for (var j = i; j < this.holons.length; j++) {
        if (i !== j) {
          for (var k = j; k < this.holons.length; k++) {
            if (j !== k) {
              var temp = ([]);
              /* add */ (temp.push(/* get */ this.holons[i]) > 0);
              /* add */ (temp.push(/* get */ this.holons[j]) > 0);
              /* add */ (temp.push(/* get */ this.holons[k]) > 0);
              /* add */ (all.push(temp) > 0)
              count++
            }
          }
          ;
        }
      }
      ;
    }
    ;
    for (var i = 0; i < this.holons.length; i++) {
      for (var j = i; j < this.holons.length; j++) {
        if (i !== j) {
          for (var k = j; k < this.holons.length; k++) {
            if (j !== k) {
              for (var l = k; l < this.holons.length; l++) {
                if (k !== l) {
                  var temp = ([]);
                  /* add */ (temp.push(/* get */ this.holons[i]) > 0);
                  /* add */ (temp.push(/* get */ this.holons[j]) > 0);
                  /* add */ (temp.push(/* get */ this.holons[k]) > 0);
                  /* add */ (temp.push(/* get */ this.holons[l]) > 0);
                  /* add */ (all.push(temp) > 0)
                  count++
                }
              }
              ;
            }
          }
          ;
        }
      }
      ;
    }
    ;
    all = this.runQuicksort(all)
    for (var index1089 = 0; index1089 < all.length; index1089++) {
      var hs = all[index1089]
      {
        console.info(this.holonSetAmount(hs))
      }
    }
    var bestPosition = all[0]
    var max = 0
    var tokens = 0
    for (var index1090 = 0; index1090 < all.length; index1090++) {
      var hs = all[index1090]
      {
        tokens = this.holonSetAmount(hs)
        if (tokens > max) {
          bestPosition = hs
          max = tokens
        }
      }
    }
    this.maxToken = max;
    /* clear */ (this.holons.length = 0)
    return bestPosition
  }
  Generation.prototype.populationAmount = function (iteration) {
    return ((1000000 / ((1 + Math.pow(Math.E, -(0.09 * iteration - 5))))) | 0) - 6691
  }
  Generation.prototype.findGreedFactor = function (p) {
    return 1 - (p.getWorth() / this.maxToken)
  }
  Generation.prototype.getPopulation = function () {
    return this.population
  }
  Generation.prototype.runQuicksort = function (all) {
    this.numbers = (function (s) {
      var a = []; while (s-- > 0) { a.push(0) } return a
    })(/* size */ all.length)
    this.allHoloncombos = all
    var c = 0
    for (var index1091 = 0; index1091 < all.length; index1091++) {
      var hs = all[index1091]
      {
        this.numbers[c] = this.holonSetAmount(hs)
        c++
      }
    }
    this.quicksort(0, this.numbers.length - 1)
    return all
  }
  /* private */ Generation.prototype.quicksort = function (low, high) {
    var i = low
    var j = high
    var pivot = (this.numbers[(low + ((high - low) / 2 | 0))] | 0)
    while ((i <= j)) {
      while ((this.numbers[i] < pivot)) {
        i++
      }
      ;
      while ((this.numbers[j] > pivot)) {
        j--
      }
      ;
      if (i <= j) {
        this.exchange(i, j)
        i++
        j--
      }
    }
    ;
    if (low < j) { this.quicksort(low, j) }
    if (i < high) { this.quicksort(i, high) }
  }
  /* private */ Generation.prototype.exchange = function (i, j) {
    var temp = this.numbers[i]
    var t = this.allHoloncombos[i]
    this.numbers[i] = this.numbers[j];
    /* set */ (this.allHoloncombos[i] = this.allHoloncombos[j])
    this.numbers[j] = temp;
    /* set */ (this.allHoloncombos[j] = this.allHoloncombos[i])
  }
  return Generation
}())
Generation['__class'] = 'Generation'
Generation['__interfaces'] = ['HolonList']

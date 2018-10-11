#!/usr/bin/env node
// HOLON
var Holon = (function () {
  function Holon (name) {
    this.peopleInHolon = 0
    this.name = null
    this.name = name
  }
  Holon.prototype.getPeopleInHolon = function () {
    return this.peopleInHolon
  }
  Holon.prototype.setPeopleInHolon = function (pop) {
    this.peopleInHolon = pop
  }
  return Holon
}())
Holon['__class'] = 'Holon'

var HolonList;
(function (HolonList) {
  HolonList.Art = new Holon('Art')
  HolonList.Construction = new Holon('Construction')
  HolonList.Energy = new Holon('Energy')
  HolonList.Judicial = new Holon('Judicial')
  HolonList.Military = new Holon('Military')
  HolonList.Education = new Holon('Education')
  HolonList.Reserve = new Holon('Reserve')
  HolonList.Food = new Holon('Food')
  HolonList.Transportation = new Holon('Transportation')
  HolonList.Materials = new Holon('Materials')
  HolonList.Health = new Holon('Health')
  HolonList.Munit = new Holon('Munit')
  HolonList.Industrials = new Holon('Industrials')
})(HolonList || (HolonList = {}))

// PERSON
var Person = (function () {
  function Person (id, holons) {
    this.balance = 0
    this.id = null
    this.worth = 0
    this.spent = 0
    this.holons = null
    this.id = id
    this.holons = holons
  }
  Person.prototype.setHolons = function (h) {
    this.holons = h
  }
  Person.prototype.getHolons = function () {
    return this.holons
  }
  Person.prototype.getID = function () {
    return this.id
  }
  Person.prototype.getBalance = function () {
    return this.worth - this.spent
  }
  Person.prototype.getWorth = function () {
    return this.worth
  }
  Person.prototype.setWorth = function (value) {
    this.worth = value
  }
  Person.prototype.spend = function (amount) {
    this.spent += amount
  }
  Person.prototype.returnFromPool = function (amount) {
    this.spent -= amount
  }
  return Person
}())
Person['__class'] = 'Person'
Person['__interfaces'] = ['HolonList']

// ENGINE
var Engine = (function () {
  function Engine () {
    this.resourcePool = 0
  }

  Engine.prototype.distribute = function (population) {
    this.resetHolons()
    for (var i = 0; i < population.length; i++) {
      var p = population[i]
      var tokens = 0
      var personholons = p.getHolons()
      for (var j = 0; j < personholons.length; j++) {
        var h = personholons[j]
        h.setPeopleInHolon(h.getPeopleInHolon() + 1.0 / p.getHolons().length)
        tokens += population.length / h.getPeopleInHolon()
      }
      p.setWorth(tokens / p.getHolons().length)
    }
  }

  Engine.prototype.resetHolons = function () {
    HolonList.Art.setPeopleInHolon(0)
    HolonList.Construction.setPeopleInHolon(0)
    HolonList.Energy.setPeopleInHolon(0)
    HolonList.Judicial.setPeopleInHolon(0)
    HolonList.Military.setPeopleInHolon(0)
    HolonList.Education.setPeopleInHolon(0)
    HolonList.Reserve.setPeopleInHolon(0)
    HolonList.Munit.setPeopleInHolon(0)
    HolonList.Food.setPeopleInHolon(0)
    HolonList.Transportation.setPeopleInHolon(0)
    HolonList.Materials.setPeopleInHolon(0)
    HolonList.Health.setPeopleInHolon(0)
    HolonList.Industrials.setPeopleInHolon(0)
  }
  Engine.prototype.addToPool = function (amount) {
    this.resourcePool += amount
  }
  return Engine
}())
Engine['__class'] = 'Engine'
Engine['__interfaces'] = ['HolonList']

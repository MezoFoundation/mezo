#!/usr/bin/env node
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

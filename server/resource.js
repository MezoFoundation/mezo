#!/usr/bin/env node
var Resource = (function () {
  function Resource (id, price, quantity) {
    this.id = null
    this.id = id
    this.price = null
    this.price = price
    this.quantity = null
    this.quantity = quantity
  }
  Resource.prototype.getResourcePrice = function (id) {
    return this.id.price
  }

  Resource.prototype.setResourcePrice = function (id, price) {
    this.id.price = price
  }

  Resource.prototype.getResourceQuantity = function (id) {
    return this.id.quantity
  }

  Resource.prototype.setResourceQuantity = function (id, quantity) {
    this.id.quantity = quantity
  }
  return Resource
}())
Resource['__class'] = 'Resource'

var ResourceList;
(function (ResourceList) {
  ResourceList.Art = new Resource('Wood', 300, 10)
  ResourceList.Construction = new Resource('Construction', 400, 20)
})(ResourceList || (ResourceList = {}))

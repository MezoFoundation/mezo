#!/usr/bin/env node

import Holon from './server/holon.js';
import Person from './server/person.js';
import Engine from './server/engine.js';
import Munit from '//server/munit.js';

var trade = [];
var Munit = ['Resource1','Resource2'];
var tradeproposal = [];
var resourcepool = [];
var resourcenum = resourcepool.length;
//Citizens may go to any holon they choose, and movement between holons is allowed at any time.

if(mezonoconsensus.all.newholonnum.approval >= 0.90){
  holon.push(newholonnum);
}

if((mezonoconsensus.all.holonnum.disapproval >= 0.90) && (mezonoconsensus.removeholonnum.approval >= 0.90) && (holon.includes(holonnum))){
  var index = holon.indexOf(holonnum);
  if (index > -1) {
    holon.splice(index, holonnum);
  }
}

if((mezonoconsensus.all.munit.resourcenum.approval >= 0.80) && (resourcenum.quantity >= 0.8*population)){
  munit.push(resourcenum);
}

var munit = [exampleresourcenum1, exampleresourcenum2];
if((mezonoconsensus.all.munit.resourcenum.disapproval >= 0.80) && (munit.includes(resourcenum))){
  var index = munit.indexOf(resourcenum);
  if (index > -1) {
    munit.splice(index, resourcenum);
  }
}
/*
Special holons cease to exist when no citizens reside in them.

A citizen in a special holon is considered to be (1/(number of standing holons the special holon is comprised of)) of a citizen within each holon the special holon is comprised of.

When a citizen moves holons the resources associated with that holon do not move with the citizen, resources are then returned to the resource pool.

Mezonos represent shares in voting.

One Mezono can be exchanged for one Munit.

The more citizens a standing holon has the less Mezonos the holon will receive.

The less citizens a standing holon has the more Mezonos the holon will receive.

A standing holon’s Mezonos are divided equally amongst all full citizens of a standing holon. Partial citizens who are in a special holon receive

((the amount a full citizen within a standing holon connected to the special holon receives)/(number of standing holons the special holon is comprised of))

from each standing holon their special holon is comprised of.

The minimum number of Mezonos in a Mezo system must be equal to the number of citizens within that Mezo system.

Mezono balance can never be below zero. This means a citizen may not move to a different holon if the new holon would allocate less than the amount the citizen has spent.

Organizations
Knowledge Pool
All knowledge, digital files, and nonphysical/intangible objects go to the knowledge pool which are available to everyone regardless of which Mezo system they are a part of.

Resource Pool
The resource pool is distributed and decentralized, everything in it has an ID and a value proportional to the input costs of a Munit.

When an entity finishes the production of a good and gives it to the resource pool, and another entity exchanges Mezonos for that good, those Mezonos will be given to the entity who created that good. The value of the good is the sum of the value of the resources that went into the production of the good.

Foreign Trade
Anyone can submit a trade proposal for an asset at a rate of exchange and quantity.

if(mezonoconsensus.all.tradeproposal.tradenum.approval >= 0.75){
  trade.push(tradenum);
}

if(mezonoconsensus.all.trade.tradenum.disapproval >= 0.75){
  var index = trade.indexOf(tradenum);
  if (index > -1) {
  trade.splice(index, tradenum);
  }
}

Judicial Holon
Any citizen or entity can present a case to the Judicial Holon.

if(mezonoconsensus.judicial.casenum.defendantguilty >= 0.75){
  mezono.defendant = frozen;
}

if(mezonoconsensus.judicial.casenum.defendantinnocent >= 0.75){
  mezono.defendant = free;
}

Military Holon

if(mezonoconsensus.nonmilitary.promilitaryaction >= 0.75){
  militaryinteraction = true
} else {
    militaryinteraction = false
}

if(mezonoconsensus.nonmilitary.antimilitaryaction >= 0.75){
  militaryinteraction = false;
  mezono.military = frozen;
}

if(mezonoconsensus.nonmilitary.unfreezemilitary >= 0.75){
  mezono.military = free;
}

Mezono balance can never be below zero. This means a citizen may not move to a different holon if the new holon would allocate less than the amount the citizen has spent.
*/

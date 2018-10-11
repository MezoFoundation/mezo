#!/usr/bin/env node
const HolonList = require('./server/holon.js')
var prompt = require('prompt')

prompt.start()

prompt.get(['action'], function (err, result) {
  switch (result.action) {
    case 'List Holons':
      console.log('  Holons: ' + HolonList)
      break
    case 'Log Resource':
      prompt.get(['finalresourceid', 'finalresourcequantity', 'inputresourceid', 'inputresourcequantity'], function (err, result) {
        console.log('  Final Resource id: ' + result.finalresourceid)
        console.log('  Final Resource Quantity: ' + result.finalresourcequantity)
        console.log('  Input Resource id: ' + result.inputresourceid)
        console.log('  Input Resource Quantity: ' + result.inputresourcequantity)
        console.log(err)
      })
      break
    case 'Move Holon':
      prompt.get(['holons'], function (err, result) {
        console.log('  Holon(s): ' + result.holons)
        console.log(err)
      })
      break
    default:
      console.log('Invalid action')
      console.log(err)
      break
  }
})
/*
List Standing Holons I can Join
Citizen ID
Join Holon
Choose Holon(s) to Join
Citizen ID
Propose Standing Holon
Citizen ID
Create Standing Holon
At least 90% token consensus
Remove Standing Holon
At least 90% token agreement within said standing holon.
At least 80% token consensus
Vote on Trade
Proposal ID
75% token agreement to enact
Propose Trade
Foreign Resource(s)
Domestic Resource(s)
Exchange Rate
Check Balance
Housing Unit balance (Max of 1)
Token Allocation
Citizen ID
Token Balance
Citizen ID
Tokens Spent
Citizen ID
Upload File to Knowledge Pool
Swarm Eth
File
Citizen ID
List Resources/Prices
Use Resource
ID #
Give Resource
ID #’s used in production of new resource
Will generate new ID number
Vote Allow Military interaction
75% token agreement among non military holon citizens
Vote End Military Interaction
75% token agreement among non military holon citizens
Vote Freeze Military
75% token agreement among non military holon citizens
Vote Un-Freeze Military
75% token agreement among non military holon citizens
Create Organization
Member ID
Vote Toggle Open Organization
Member ID
Vote Toggle Close Organization
Member ID
*/

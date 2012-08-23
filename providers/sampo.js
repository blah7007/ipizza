var IpizzaBank = require('./ipizzabank')

function Sampo (opt) {
  this.name = 'sampo'
  IpizzaBank.apply(this, arguments)
}
Sampo.prototype = Object.create(IpizzaBank.prototype)
 
Sampo.prototype.gateways = 
  { development: 'https://pangalink.net/banklink/008/sampo'
  , production: 'https://www2.sampopank.ee/ibank/pizza/pizza'
  }


module.exports = Sampo
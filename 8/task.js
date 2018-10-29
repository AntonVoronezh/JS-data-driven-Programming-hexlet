export default class SimpleCard {
  constructor(name, damageCart) {
    this.name = name;
    this.damageCart = damageCart;
  }

  damage(health) {
    return this.damageCart;
  }
}

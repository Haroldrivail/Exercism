/// <reference path="./global.d.ts" />
//
// @ts-check

/**
 * Determine the price of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPrice(pizza, ...extras) {
   const pizzaPrices = {
    'Margherita': 7,
    'Caprese': 9,
    'Formaggio': 10
  };

  const extraPrices = {
    'ExtraSauce' : 1,
    'ExtraToppings' : 2,
  };

  const basePrice = pizzaPrices[pizza] || 0;

  const extrasTotal = extras.reduce((total, extra) => {
    return total + (extraPrices[extra] || 0);
  }, 0);

  return basePrice + extrasTotal;
  
}

/**
 * Calculate the price of the total order, given individual orders
 *
 * (HINT: For this exercise, you can take a look at the supplied "global.d.ts" file
 * for a more info about the type definitions used)
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
  const totalPrice = pizzaOrders.reduce((total, pizzaOrder) => {
    return total + (pizzaPrice(pizzaOrder.pizza, ...pizzaOrder.extras) || 0);
  }, 0);

  return totalPrice;
}

import React, { useRef, useEffect } from 'react';


export default function Paypal({price, name}) {
  const paypalRef = useRef();

  const product = {
    price: price,
    name: name
  }

  useEffect(() => {
    if (window.paypal) {
    window.paypal
      .Buttons({
      style: {
          height: 36,
          size: 'responsive',
          color: 'blue',
          layout: 'horizontal',
          tagline: 'false',
          label: 'pay'
      },
      createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: product.name,
                amount: {
                  currency_code: 'USD',
                  value: product.price,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          console.log(order);
          window.location = "/gracias";
        }
      })
      .render(paypalRef.current);
  }}, [product.name, product.price]);
  
  return <div ref={paypalRef}></div>
}
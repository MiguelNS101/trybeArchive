const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order) => {
    // Adicione abaixo as informações necessárias.
    const deliPerson = order.order.delivery.deliveryPerson;
    const custName = order['name'];
    const custPhone = order['phoneNumber'];
    const address = 'address';
    const street = order[address].street;
    const number = order[address].number;
    const apartment = order[address].apartment;
    console.log(`Ola ${deliPerson}, entrega para: ${custName}, Telefone: ${custPhone}, R. ${street}, Num: ${number}, AP: ${apartment}.`);
  }
  
  customerInfo(order);
  
  const orderModifier = (order) => {
    // Adicione abaixo as informações necessárias.
    const Client = order.name = 'Luiz Silva';
    const pizzas = Object.keys(order.order.pizza);
    const drinks = order.order.drinks.coke.type;
    const valorTotal = order.payment.total = '50';
    console.log(`Ola ${Client}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${drinks} é R$ ${valorTotal},00.`);
  }
  
  orderModifier(order);
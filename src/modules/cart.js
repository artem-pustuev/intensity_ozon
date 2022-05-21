import renderCart from "./renderCart";
import postData from "./postData";

const cart = () => {
  const cartBtn = document.getElementById('cart');
  const cartModal = document.querySelector('.cart');
  const cartCloseBtn = cartModal.querySelector('.cart-close');
  const cartTotal = cartModal.querySelector('.cart-total > span');
  const goodsWrapper = document.querySelector('.goods');
  const cartWrapper = document.querySelector('.cart-wrapper');
  const cartSendBtn = cartModal.querySelector('.cart-confirm');
  const quantityOfGoods = document.querySelector('.counter');


  const openCart = () => {
    const cart = localStorage.getItem('cart') ? 
          JSON.parse(localStorage.getItem('cart')) : [];

    cartModal.style.display = 'flex';

    renderCart(cart)
    cartTotal.textContent = cart.reduce((sum, goodItem) => {
      return sum + goodItem.price
    }, 0)
  }

  const closeCart = () => {
    cartModal.style.display = '';
  }

  cartBtn.addEventListener('click', openCart);
  cartCloseBtn.addEventListener('click', closeCart);

  goodsWrapper.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn-primary')) {
      
      const card = event.target.closest('.card');
      const key = card.dataset.key;
     
      
      const goods = JSON.parse(localStorage.getItem('goods'));
      const cart = localStorage.getItem('cart') ? 
          JSON.parse(localStorage.getItem('cart')) : [];
      quantityOfGoods.textContent = cart.length + 1;
      const goodItem = goods.find((item) => {
        return item.id === +key
      })
      cart.push(goodItem);

      localStorage.setItem('cart', JSON.stringify(cart))
    };
  })

  cartWrapper.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn-primary')) {
      
      const cart = localStorage.getItem('cart') ? 
          JSON.parse(localStorage.getItem('cart')) : [];

      const card = event.target.closest('.card');
      const key = card.dataset.key;
      const index = cart.findIndex((item) => {
        return item.id === +key
      })

      cart.splice(index, 1)

      localStorage.setItem('cart', JSON.stringify(cart));

      renderCart(cart)

      cartTotal.textContent = cart.reduce((sum, goodItem) => {
        return sum + goodItem.price
      }, 0)
      quantityOfGoods.textContent = cart.length;
    }
  })

  cartSendBtn.addEventListener('click',() => {
    const cart = localStorage.getItem('cart') ? 
          JSON.parse(localStorage.getItem('cart')) : [];

    postData(cart).then(() => {
      localStorage.removeItem('cart')

      renderCart([])

      cartTotal.textContent = 0;
      quantityOfGoods.textContent = 0;
    })
  } )
}

export default cart
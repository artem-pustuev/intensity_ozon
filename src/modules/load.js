import getData from "./getData";
import renderGoods from "./renderGoods";

const load = () => {
  const quantityOfGoods = document.querySelector('.counter');
  const cart = localStorage.getItem('cart') ? 
          JSON.parse(localStorage.getItem('cart')) : [];
    quantityOfGoods.textContent = cart.length
  getData().then((data) => {
    renderGoods(data)
    
  });
}

export default load

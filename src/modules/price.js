import getData from "./getData";
import renderGoods from "./renderGoods";
import { priceFilter, hotSaleFilter } from "./filters";

const price = () => {
  const inputsPrice = document.querySelectorAll('.filter-price_input')
  const MIN = "min";
  let valueMin = 0;
  let valueMax;
  const ckeckboxInput = document.getElementById('discount-checkbox')
  const checkboxSpan = document.querySelector('.filter-check_checkmark')

  inputsPrice.forEach((input) => {
    input.addEventListener('input', () => {
      const value = input.value;

      if (input.id === MIN) {
      valueMin = value 
    } else valueMax = value;
      getData().then((data) => {
        renderGoods(priceFilter(hotSaleFilter(data, ckeckboxInput.checked), valueMin, valueMax))
      });
    })
  })

  ckeckboxInput.addEventListener('change', () => {
    if (ckeckboxInput.checked) {
      checkboxSpan.classList.add('checked')
    } else {checkboxSpan.classList.remove('checked')}
  
    getData().then((data) => {
      renderGoods(priceFilter(hotSaleFilter(data, ckeckboxInput.checked), valueMin, valueMax))
    });
  })
}

export default price
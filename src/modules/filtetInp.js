import getData from "./getData";
import renderGoods from "./renderGoods";
import { priceFilter, hotSaleFilter } from "./filters";


const filtetInp = () => {
    const minInput = document.getElementById('min');
    const maxInput = document.getElementById('max');
    const ckeckInput = document.getElementById('discount-checkbox')
    const checkboxSpan = document.querySelector('.filter-check_checkmark')

    minInput.addEventListener('input', () => {
        getData().then((data) => {
            renderGoods(priceFilter(hotSaleFilter(data, ckeckInput.checked), minInput.value, maxInput.value))
        })
    });

    maxInput.addEventListener('input', () => {
        getData().then((data) => {
            renderGoods(priceFilter(hotSaleFilter(data, ckeckInput.checked), minInput.value, maxInput.value))
        })
    });

    ckeckInput.addEventListener('change', () => {

        if (ckeckInput.checked) {
            checkboxSpan.classList.add('checked')
        } else {
            checkboxSpan.classList.remove('checked')
        }
        getData().then((data) => {
            renderGoods(priceFilter(hotSaleFilter(data, ckeckInput.checked), minInput.value, maxInput.value))
        })
    })
}

export default filtetInp
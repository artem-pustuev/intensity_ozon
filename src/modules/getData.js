const getData = () => {
  return fetch('https://test-1f594-default-rtdb.firebaseio.com/goods.json')
  .then(response => response.json())
}

export default getData
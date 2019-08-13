async function fetchBurgerJoints () {
  const response = await fetch('https://api.myjson.com/bins/zubyd');
  const burgerjoints = await response.json();
  return burgerjoints;
}

export default fetchBurgerJoints;
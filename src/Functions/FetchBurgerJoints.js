async function fetchBurgerJoints () {
  const response = await fetch('https://tulegatan.nu/burgers.json');
  const burgerjoints = await response.json();
  return burgerjoints;
}

export default fetchBurgerJoints;
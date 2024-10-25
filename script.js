const camisetaBranca = {
  id: "0",
  color: "Camiseta - Branca",
  size: "Tamanho: P - GG",
  valor: "Valor: $199,90",
  type: "T-shirt",
  tshotFile: "camiseta-branca-infantil-flame-rrgtnt.webp",
};
const camisetaLaranja = {
  id: "1",
  color: "Camiseta - Laranja",
  size: "Tamanho: P - GG",
  valor: "Valor: $159,90",
  type: "T-shirt",
  tshotFile: "a12dd9ac46.webp",
};
const camisetaPreta = {
  id: "2",
  color: "Camiseta - Preta",
  size: "Tamanho: P - GG",
  valor: "Valor: $189,90",
  type: "T-shirt",
  tshotFile: "camiseta-preta-vitseu.webp",
};
const camisetaAzul = {
  id: "3",
  color: "Camiseta - Azul",
  size: "Tamanho: P - GG",
  valor: "Valor: $59,90",
  type: "T-shirt",
  tshotFile: "camiseta-azul-royal-para-sublima_o-tradicional_1.jpg",
};
const camisetaRosa = {
  id: "4",
  color: "Camiseta - Rosa",
  size: "Tamanho: PP - M",
  valor: " Valor: $99,90",
  type: "T-shirt",
  tshotFile: "camiseta-azul-royal-para-sublima_o-tradicional_1_2.jpg",
};

const camisetaFlu = {
  id: "5",
  color: "Camiseta - Fluminense",
  size: "Tamanho: P - G",
  valor: " Valor: $299,90",
  type: "T-shirt",
  tshotFile: "fluminens.jpg",
};

const camisetaReal = {
  id: "6",
  color: "Camiseta - Real Madrid",
  size: "Tamanho: P - G",
  valor: " Valor: $399,90",
  type: "T-shirt",
  tshotFile: "realMadrid.webp",
};

const camisetaRoma = {
  id: "7",
  color: "Camiseta - Roma",
  size: "Tamanho: P - G",
  valor: " Valor: $199,90",
  type: "T-shirt",
  tshotFile: "roma.jpg",
};

const camisetaMilao = {
  id: "8",
  color: "Camiseta - Milão",
  size: "Tamanho: P - G",
  valor: " Valor: $299,90",
  type: "T-shirt",
  tshotFile: "milao.png",
};

const camisetaMiame = {
  id: "9",
  color: "Camiseta - Inter de Miame",
  size: "Tamanho: P - G",
  valor: " Valor: $499,90",
  type: "T-shirt",
  tshotFile: "interMiame.webp",
};

const camisetaSantos = {
  id: "10",
  color: "Camiseta - Santos Retrô",
  size: "Tamanho: G",
  valor: " Valor: $499,90",
  type: "T-shirt",
  tshotFile: "santos.webp",
};

const camisetaGremio = {
  id: "11",
  color: "Camiseta - Gremio",
  size: "Tamanho: G",
  valor: " Valor: $99,90",
  type: "T-shirt",
  tshotFile: "gremio.png",
};

const camisetaCeltic = {
  id: "12",
  color: "Camiseta - Celtic",
  size: "Tamanho: M",
  valor: " Valor: $399,90",
  type: "T-shirt",
  tshotFile: "celtic.jpg",
};

const tshirtLibarary = [
  camisetaBranca,
  camisetaLaranja,
  camisetaPreta,
  camisetaAzul,
  camisetaRosa,
  camisetaFlu,
  camisetaReal,
  camisetaRoma,
  camisetaMilao,
  camisetaMiame,
  camisetaSantos,
  camisetaGremio,
  camisetaCeltic,
];

let tshirt = [...tshirtLibarary];

let cart = JSON.parse(localStorage.getItem("cart")) ?? [];

const pageBody = document.getElementById("page-body");
const searchTshit = document.getElementById("search-tshirt");
const searchButton = document.getElementById("search-button");
const car = document.getElementById("carrinho");

function loadLibrary() {
  pageBody.innerHTML = "";
  for (let index = 0; index < tshirtLibarary.length; index++) {
    pageBody.innerHTML += `
      <div
        class="card d-flex flex-column align-items-center"
        style="width: 18rem; height: 30rem"
      >
        <img
          src="images/Fotos camiseta/${tshirt[index].tshotFile}"
          class="card-img-top"
          alt="Camisa Branca"
        />
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${tshirt[index].color}</h5>
          <p class="card-text">${tshirt[index].valor}</p>
          <p class="card-text">${tshirt[index].size}</p>
          <button class="btn btn-outline-success" onclick="addItem('${tshirt[index].id}')"><i class="bi bi-cart-check"></i></button>
        </div>
      </div>
    `;
  }
}

function loadCarrinho() {
  car.innerHTML = " ";
  for (let index = 0; index < cart.length; index++) {
    carrinho.innerHTML += `<div id=${cart[index].id}
              class="d-flex justify-content-between align-items-center border-top border-bottom p-2"
            >
              ${cart[index].color} - ${cart[index].size}
              <div>
                <button class="btn btn-outline-danger"  onclick="removerItem(
                  '${cart[index].id}'
                )">
                  <i class="bi bi-trash3"></i>
                </button>
              </div> `;
  }
}

function searchClick() {
  if (searchTshit.value === "") return;
  tshirt = tshirt.filter(
    (shirt) =>
      shirt.color.includes(searchTshit.value) ||
      shirt.size.includes(searchTshit.value)
  );
  loadLibrary();
}

function resetFilter() {
  if (searchTshit.value !== "") return;
  tshirt = [...tshirtLibarary];
  loadLibrary();
}

function removerItem(itemId) {
  cart = cart.filter((item) => item.id !== itemId);
  document.getElementById(itemId).remove();
  updateLocalStorage();
}

function addItem(itemId) {
  if (cart.find((item) => item.id === itemId)) return;
  const itemAdd = tshirt.find((x) => x.id === itemId);
  cart.push(itemAdd);

  carrinho.innerHTML += `<div id=${itemAdd.id}
              class="d-flex justify-content-between align-items-center border-top border-bottom p-2"
            >
              ${itemAdd.color} - ${itemAdd.size}
              <div>
                <button class="btn btn-outline-danger"  onclick="removerItem(
                  '${itemAdd.id}'
                )">
                  <i class="bi bi-trash3"></i>
                </button>
              </div> `;
  updateLocalStorage();
}

function updateLocalStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

searchButton.addEventListener("click", searchClick);
searchTshit.addEventListener("input", resetFilter);

loadLibrary();
loadCarrinho();

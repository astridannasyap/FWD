import users from "./data.js";

const index = () => {
  const list = document.getElementById("list");
  list.innerHTML = "";

  users.map((user, i) => {
    list.innerHTML += `
      <li>
        ${user.nama} - ${user.umur} - ${user.alamat} - ${user.email}
        <button onclick="hapus(${i})">Hapus</button>
      </li>
    `;
  });
};

const store = (user) => {
  users.push(user);
};

const destroy = (i) => {
  users.splice(i, 1);
};

export { index, store, destroy };
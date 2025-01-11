let btn = document.querySelector("button");
let div = document.querySelector("div");

btn.addEventListener("click", () => {
  console.log("ok");

  async function a() {
    console.log("sal");
    let b = await fetch("https://dummyjson.com/users");
    b.json()
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));

    div.inerHTML = `
            <h1></h1>
        `;
  }

  a();
});

const urls = [
  "https://reqres.in/api/users/1",
  "https://reqres.in/api/users/3",
  "https://reqres.in/api/users/10",
];

async function printEmailIds() {
  try {
    const emails = await Promise.all(
      urls.map(async (url) => {
        const resp = await fetch(url);
        return resp.json();
      })
    );
    console.log(emails);
    document.getElementById("email1").innerHTML = emails[0].data.email;
    document.getElementById("email2").innerHTML = emails[1].data.email;
    document.getElementById("email3").innerHTML = emails[2].data.email;
  } catch (e) {
    console.log(e);
  }
}

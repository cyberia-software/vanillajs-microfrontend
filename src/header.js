export default () => {
  var title = "My First Vanilla JS Bootstrap Page";
  return(`
<header class="container-fluid p-5 bg-primary text-white text-center">
  <h1>${title}</h1>
  <p>Resize this responsive page to see the effect!</p>
</header>
`);
}
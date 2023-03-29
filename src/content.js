
export default () => {
    const numCol = 3; // number of sections to generate
   
    return(`
<main class="container mt-5">
    <div class="row">
    ${Array(numCol).fill().map((_, i) => `
      <div class="col-sm-4">
        <h3>${ ((i+1)==1)? 'Calumnia':'Columnas'} ${(i+1)}</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
      </div>
    `).join('')}
    </div>
</main>
`);
}
export default () => {

  return(`
<nav class="navbar navbar-expand-lg bg-light rounded" aria-label="">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">CYBERIA&#8482;</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarsExample09">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/pricing">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/contact">Contact</a>
        </li>
      </ul>
      <form role="search">
        <input class="form-control" type="search" placeholder="Search" aria-label="Search">
      </form>
    </div>
  </div>
</nav>
`);
}
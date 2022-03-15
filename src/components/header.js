export default function Header() {
  const departamentoLi = [
    'departamento',
    'departamento',
    'departamento',
    'departamento',
    'departamento',
    'departamento',
  ];
  const departamentoLi_2 = [
    'Categoria',
    'Categoria',
    'Categoria',
    'Categoria',
    'Categoria',
    'Categoria',
  ];
  return (
    <header className='main_header'>
      <div className='container'>
        <div className='main_header_nav'>
          <div className='main_header_nav_logo'>
            <a href='#' title='wpshoes | Home'>
              <img src='/assets/wdpshoes_logo_white.png' alt='' srcset='' />
            </a>
          </div>
          <div className='main_header_nav_search'>
            <form action='' method='post' className='radius'>
              <input type='text' name='' placeholder='Pesquise na loja' id='' />
              <button className='radius icon-notext transition'>
                <i className='bi-search'></i>
              </button>
            </form>
          </div>

          <div className='main_header_nav_menu'>
            <a href='' className='transition bi-cart2 '>
              <span>3</span>
            </a>
          </div>
        </div>
      </div>
      <ul className='main_header_departaments'>
        {departamentoLi.map((l, i) => (
          <li className='main_header_departments_li'>
            {l}
            {i + 1}
            <ul>
              {departamentoLi_2.map((ll, index) => (
                <li className='main_header_departments-li_ul_li'>
                  {ll}
                  {i + 1}/{index + 1}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </header>
  );
}

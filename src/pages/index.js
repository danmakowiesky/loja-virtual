import Header from '../components/Header/header';
import Main from '../components/Main/main';

export default function Home() {
  const menu = ['menu1', 'menu2', 'menu3', 'menu4'];
  const sub = ['submenu1', 'submenu2', 'submenu3', 'submenu4'];
  return (
    <>
      <Header />
      <Main />
      <footer className='main_footer'>
        <div className='container'>
          <article className='main_footer_optin'>
            <header className='main_footer_optin_header'>
              <h3>Quer 20% de desconto?</h3>
              <p>
                Informe seu melhor e-mail logo a baixo e receba um cupom de 20%
                para sua primeira compra
              </p>
            </header>
            <form action='' className='main_footer_optin_form'></form>
            <input
              type='email'
              name=''
              placeholder='Informe o seu email'
              id=''
            />
            <button className='btn radius transition btn_footer'>
              <i className='bi-envelope'></i>Quero meu desconto!
            </button>
          </article>
          <div className='main_footer_nav flex'>
            {menu.map((m, i) => (
              <nav className='flex-4'>
                <h4>
                  {m}/{i + 1}
                </h4>
                {sub.map((mm, ii) => (
                  <a href='#' title=''>
                    {mm}/{ii + 1}
                  </a>
                ))}
              </nav>
            ))}
            <nav className='flex-4'>
              <h4>Pagamento Seguro</h4>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
}

import Header from '../components/header';
export default function Home() {
  return (
    <>
      <Header />
      <main className='main_content'>
        <section className='pdt_gallery'>
          <div className='container'>
            <header className='main_content_header'>
              <h1 className='main_content_header_title'>Ofertas da semana</h1>
            </header>
          </div>
        </section>
      </main>{' '}
      <footer className='main_footer'>footer</footer>
    </>
  );
}

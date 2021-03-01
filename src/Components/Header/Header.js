import Categories from './Categories';
import Logo from '../img/logo.png';
import fullDate from './Date';
console.log(fullDate.gettingMonth());

function Header() {

  return (
    <>
      <header className="mt-3">
        <div className="border-bottom pb-4">
          <div className="container-xl">
            <div className="header-top d-flex justify-content-between">
              <div className='w-25 d-flex flex-column'>
                <form className="form-group flex-grow-1 mb-0 d-flex align-items-center mb-4">
                  <button className="search-button btn btn-outline-secondary p-2 bg-transparent border border-secondary border-0">
                    <i className="fas fa-search text-dark fa-lg"></i>
                  </button>
                  <input className="form-input" type="text" placeholder="Search any news" />
                </form>
                <div className='flex-grow-1 mt-auto d-flex align-items-center'>
                  <p className='h5 mb-0'>{fullDate.day}, {fullDate.gettingMonth()} {fullDate.monthDay}, {fullDate.year}</p>
                  <p className='h5 mb-0 pl-2'>| {fullDate.hour}:{fullDate.minute}</p>
                </div>
              </div>
              <a className='w-25 text-center' href="index.html">
                <img src={Logo} width='240' height='90' alt='img' />
              </a>
              <div className='w-25 d-flex flex-column'>
                <div className='ml-auto'>
                  <button className='btn font-weight-bold btn-primary'>LOG IN</button>
                  <button className='btn font-weight-bold btn-primary ml-2'>SUBSCRIBE NOW</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {<Categories />}
      </header>
    </>
  )
}

export default Header;
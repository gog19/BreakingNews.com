import { useEffect, useState } from 'react';

function Main() {

  const [data, setData] = useState([]);

  useEffect(() => {

    (async () => {
      let mainData = await fetch('https://api.mediastack.com/v1/news?access_key=7fbaa983646f3a89e877f42fe61cbd3f&sources=en&limit=12')
      let midData = await mainData.json();
      // console.log(Math.ceil(midData.pagination.total / 12));
      let infoData = midData.data;
      setData(infoData)
    })()
  }, []);

  return (
    <>
      <main className="py-5">
        <div className="container-xl d-flex flex-column">
          <ul className="list-unstyled row no-gutters">
            {
              <>
                {
                  data.map((item, i) => {
                    return (
                      <li className="col-md-3" key={i}>
                        <div className="wrapper">
                          <div className="news-img-wrapper overflow-hidden">
                            <img className="news-img" src={item.image} width='440' height='400' alt="img" />
                          </div>
                          <div className="news-content p-3 d-flex flex-column">
                            <div className="mt-auto main-card">
                              <div className="d-flex justify-content-between">
                                <span className="w-25 bg-danger text-white rounded text-center mb-3 pb-1">{item.category}</span>
                                <span className="text-white pr-3">{item.published_at}</span>
                              </div>
                              <a className="h5 news-link text-decoration-none text-white line-clamp mb-0"
                                href={item.url} target="_blank" rel="noreferrer">{item.title}</a>
                            </div>
                          </div>
                        </div>
                      </li>
                    )
                  })
                }
              </>
            }
          </ul>
          <button className='btn btn-success view-more'>VIEW MORE</button>
        </div>
      </main>
    </>
  )
}

export default Main;
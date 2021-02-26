import { useEffect, useState } from 'react';

function Main() {

  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {

    (async () => {
      let mainData = await fetch('http://api.mediastack.com/v1/news?access_key=7fbaa983646f3a89e877f42fe61cbd3f&sources=en&limit=9')
      let midData = await mainData.json();
      let n = midData.data;
      setData(n)
    })()

  }, []);

  return (
    <>
      <main className="py-5">
        <div className="container-xl">
          <ul className="list-unstyled row">
            {
              <>
                {
                  data.forEach(item => {
                    <>
                      <li className="col-md-4 mb-5">
                      <div className="wrapper">
                        <div className="news-img-wrapper overflow-hidden rounded">
                          <img className="news-img" src={item.image} alt="" />
                        </div>
                        <div className="news-content p-3 d-flex flex-column">
                          <div className="mt-auto">
                            <div className="d-flex justify-content-between">
                              <span className="w-25 bg-danger text-white rounded text-center mb-3">General</span>
                              <span className="text-white pr-3">02/04/2021</span>
                            </div>
                            <a className="h5 news-link text-decoration-none text-white line-clamp"
                              href={item.url} target="_blank" rel="noreferrer">{item.title}</a>
                          </div>
                        </div>
                      </div>
                    </li>
                    </>
                  })
                }
              </>
            }
          </ul>
        </div>
      </main>
    </>
  )
}

export default Main;
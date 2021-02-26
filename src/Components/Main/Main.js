function Main() {

  return (
    <>
      <main className="py-5">
        <div className="container-xl">
          <ul className="list-unstyled row">
            <li className="col-md-4">
              <div className="wrapper">
                <div className="news-img-wrapper overflow-hidden rounded">
                  <img className="news-img" src="https://picsum.photos/400" alt="" />
                </div>
                <div className="news-content p-3 d-flex flex-column">
                  <div className="mt-auto">
                    <div className="d-flex justify-content-between">
                      <span className="w-25 bg-danger text-white rounded text-center mb-3">General</span>
                      <span className="text-white pr-3">02/04/2021</span>
                    </div>
                    <a className="h5 news-link text-decoration-none text-white line-clamp"
                      href="https://newsapi.org/docs/get-started" target="_blank">Lorem ipsum
                      dolor sit amet
                      consectetur adipisicing elit. Cum,
                      aperiam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, repellendus?
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias, rerum! Nihil, quia beatae ab
                      inventore iure, molestias tempore dolor cumque, amet aut voluptatem numquam. Animi porro, rem odio
                      dolorem, iusto aspernatur quasi soluta dicta repellendus facere adipisci officiis. Libero voluptas
                      vero mollitia tempora officiis pariatur odit tempore molestias voluptatem aut.</a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </main>
    </>
  )
}

export default Main;
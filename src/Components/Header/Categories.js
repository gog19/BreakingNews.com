import { useEffect, useState } from 'react';

function Categories() {

  useEffect(() => {
    (async () => {
      let data = await fetch('http://api.mediastack.com/v1/news?access_key=7fbaa983646f3a89e877f42fe61cbd3f&sources=en&limit=9&date=2021-01-01')
    })()
  }, [])

  return (
    <>
      <div className="header-bottom mt-2">
        <div className="container-lg">
          <ul className='list-unstyled mb-0 d-flex justify-content-center'>
            <li>
              <button className="general btn btn-outline-info  mr-3 rounded px-3 py-1 font-weight-bold active" type="button">General</button>
            </li>
            <li>
              <button className="btn btn-outline-info  mr-3 rounded px-3 py-1 font-weight-bold" type="button">Last News</button>
            </li>
            <li>
              <button className="btn btn-outline-info  mr-3 rounded px-3 py-1 font-weight-bold" type="button">Technologies</button>
            </li>
            <li>
              <button className="btn btn-outline-info  mr-3 rounded px-3 py-1 font-weight-bold" type="button">Entertainment </button>
            </li>
            <li>
              <button className="btn btn-outline-info  mr-3 rounded px-3 py-1 font-weight-bold" type="button">Sport</button>
            </li>
            <li>
              <button className="btn btn-outline-info  mr-3 rounded px-3 py-1 font-weight-bold" type="button">Business</button>
            </li>
            <li>
              <button className="btn btn-outline-info  mr-3 rounded px-3 py-1 font-weight-bold" type="button">Health</button>
            </li>
            <li>
              <button className="btn btn-outline-info  mr-3 rounded px-3 py-1 font-weight-bold" type="button">Science</button>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Categories;
function Header() {

    return (
        <>
            <header className="mt-3">
                <div className="border-bottom pb-4">
                    <div className="container-xl">
                        <div className="header-top d-flex justify-content-between align-items-center">
                            <a href="index.html">
                                <div className="header-logo">
                                    <span className="text-white font-weight-bold p-1 bg-primary pr-2 h2">Breaking</span>
                                    <span className="text-primary font-weight-bold bg-white pr-2 h2">News</span>
                                </div>
                            </a>
                            <form className="form-group flex-grow-1 mb-0 d-flex">
                                <label className="sr-only" for="exampleFormControlInput1">Email address</label>
                                <input type="text" className="form-control input w-50 ml-auto d-block" id="exampleFormControlInput1"
                                    placeholder="Search any news" />
                                <button className="search-button bg-transparent border border-secondary border-0">
                                    <i className="fas fa-search fa-lg"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="header-bottom mt-2">
                    <div className="container-lg d-flex justify-content-center">
                        <button className="general btn btn-outline-info  mr-3 rounded px-3 py-1 font-weight-bold" type="button">General</button>
                        <button className="btn btn-outline-info  mr-3 rounded px-3 py-1 font-weight-bold" type="button">Last News</button>
                        <button className="btn btn-outline-info  mr-3 rounded px-3 py-1 font-weight-bold" type="button">Technologies</button>
                        <button className="btn btn-outline-info  mr-3 rounded px-3 py-1 font-weight-bold" type="button">Country</button>
                        <button className="btn btn-outline-info  mr-3 rounded px-3 py-1 font-weight-bold" type="button">Sport</button>
                        <button className="btn btn-outline-info  mr-3 rounded px-3 py-1 font-weight-bold" type="button">Business</button>
                        <button className="btn btn-outline-info  mr-3 rounded px-3 py-1 font-weight-bold" type="button">Health</button>
                        <button className="btn btn-outline-info  mr-3 rounded px-3 py-1 font-weight-bold" type="button">Science</button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;
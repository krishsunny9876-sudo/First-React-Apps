
export default function Navbars({ title = 'default title', home = 'default home', mode = {
    backgroundColor: 'white',
    color: 'black'
}, toggle_color }) {
    return (
        <nav className="navbar navbar-expand-lg" style={mode}>
            <div className="container-fluid" style={mode}>
                <a className="navbar-brand" href="/" style={mode}>{title}</a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" href="/" style={mode}>{home}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/" style={mode}>Link</a>
                        </li>
                    </ul>
                </div>
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" role="switch" id="switchCheckDefault" onClick={toggle_color} />
                    <label class="form-check-label" htmlForfor="switchCheckDefault">Dark Mode</label>
                </div>
            </div>
        </nav>
    )
}

//export default Navbars
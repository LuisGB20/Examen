import React, { useEffect } from 'react'
import axios from 'axios'

function Index() {
    const [datos, setDatos] = React.useState([]);

    useEffect(() => {
        obtenerPlantas();
    }, []);

    const obtenerPlantas = async () => {
        axios.get('https://perenual.com/api/species-list?key=sk-BMvA65328940215262568')
            .then(response => {
                console.log('Respuesta de la API:', response.data);
                setDatos(response.data.data);
            })
            .catch(error => {
                console.error('Error al hacer la solicitud:', error);
            });
    }

    return (
        <>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content="" />
            <meta
                name="author"
                content="Mark Otto, Jacob Thornton, and Bootstrap contributors"
            />
            <meta name="generator" content="Hugo 0.118.2" />
            <title>Album example · Bootstrap v5.3</title>
            <link
                rel="canonical"
                href="https://getbootstrap.com/docs/5.3/examples/album/"
            />
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@docsearch/css@3" />
            <link
                href="/docs/5.3/dist/css/bootstrap.min.css"
                rel="stylesheet"
                integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
                crossOrigin="anonymous"
            />
            {/* Favicons */}
            <link
                rel="apple-touch-icon"
                href="/docs/5.3/assets/img/favicons/apple-touch-icon.png"
                sizes="180x180"
            />
            <link
                rel="icon"
                href="/docs/5.3/assets/img/favicons/favicon-32x32.png"
                sizes="32x32"
                type="image/png"
            />
            <link
                rel="icon"
                href="/docs/5.3/assets/img/favicons/favicon-16x16.png"
                sizes="16x16"
                type="image/png"
            />
            <link rel="manifest" href="/docs/5.3/assets/img/favicons/manifest.json" />
            <link
                rel="mask-icon"
                href="/docs/5.3/assets/img/favicons/safari-pinned-tab.svg"
                color="#712cf9"
            />
            <link rel="icon" href="/docs/5.3/assets/img/favicons/favicon.ico" />
            <meta name="theme-color" content="#712cf9" />
            <style
                dangerouslySetInnerHTML={{
                    __html:
                        "\n      .bd-placeholder-img {\n        font-size: 1.125rem;\n        text-anchor: middle;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        user-select: none;\n      }\n\n      @media (min-width: 768px) {\n        .bd-placeholder-img-lg {\n          font-size: 3.5rem;\n        }\n      }\n\n      .b-example-divider {\n        width: 100%;\n        height: 3rem;\n        background-color: rgba(0, 0, 0, .1);\n        border: solid rgba(0, 0, 0, .15);\n        border-width: 1px 0;\n        box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);\n      }\n\n      .b-example-vr {\n        flex-shrink: 0;\n        width: 1.5rem;\n        height: 100vh;\n      }\n\n      .bi {\n        vertical-align: -.125em;\n        fill: currentColor;\n      }\n\n      .nav-scroller {\n        position: relative;\n        z-index: 2;\n        height: 2.75rem;\n        overflow-y: hidden;\n      }\n\n      .nav-scroller .nav {\n        display: flex;\n        flex-wrap: nowrap;\n        padding-bottom: 1rem;\n        margin-top: -1px;\n        overflow-x: auto;\n        text-align: center;\n        white-space: nowrap;\n        -webkit-overflow-scrolling: touch;\n      }\n\n      .btn-bd-primary {\n        --bd-violet-bg: #712cf9;\n        --bd-violet-rgb: 112.520718, 44.062154, 249.437846;\n\n        --bs-btn-font-weight: 600;\n        --bs-btn-color: var(--bs-white);\n        --bs-btn-bg: var(--bd-violet-bg);\n        --bs-btn-border-color: var(--bd-violet-bg);\n        --bs-btn-hover-color: var(--bs-white);\n        --bs-btn-hover-bg: #6528e0;\n        --bs-btn-hover-border-color: #6528e0;\n        --bs-btn-focus-shadow-rgb: var(--bd-violet-rgb);\n        --bs-btn-active-color: var(--bs-btn-hover-color);\n        --bs-btn-active-bg: #5a23c8;\n        --bs-btn-active-border-color: #5a23c8;\n      }\n\n      .bd-mode-toggle {\n        z-index: 1500;\n      }\n\n      .bd-mode-toggle .dropdown-menu .active .bi {\n        display: block !important;\n      }\n    "
                }}
            />
            <svg xmlns="http://www.w3.org/2000/svg" className="d-none">
                <symbol id="check2" viewBox="0 0 16 16">
                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                </symbol>
                <symbol id="circle-half" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z" />
                </symbol>
                <symbol id="moon-stars-fill" viewBox="0 0 16 16">
                    <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
                    <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z" />
                </symbol>
                <symbol id="sun-fill" viewBox="0 0 16 16">
                    <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
                </symbol>
            </svg>
            <div className="dropdown position-fixed bottom-0 end-0 mb-3 me-3 bd-mode-toggle">
                <button
                    className="btn btn-bd-primary py-2 dropdown-toggle d-flex align-items-center"
                    id="bd-theme"
                    type="button"
                    aria-expanded="false"
                    data-bs-toggle="dropdown"
                    aria-label="Toggle theme (auto)"
                >
                    <svg className="bi my-1 theme-icon-active" width="1em" height="1em">
                        <use href="#circle-half" />
                    </svg>
                    <span className="visually-hidden" id="bd-theme-text">
                        Toggle theme
                    </span>
                </button>
                <ul
                    className="dropdown-menu dropdown-menu-end shadow"
                    aria-labelledby="bd-theme-text"
                >
                    <li>
                        <button
                            type="button"
                            className="dropdown-item d-flex align-items-center"
                            data-bs-theme-value="light"
                            aria-pressed="false"
                        >
                            <svg
                                className="bi me-2 opacity-50 theme-icon"
                                width="1em"
                                height="1em"
                            >
                                <use href="#sun-fill" />
                            </svg>
                            Light
                            <svg className="bi ms-auto d-none" width="1em" height="1em">
                                <use href="#check2" />
                            </svg>
                        </button>
                    </li>
                    <li>
                        <button
                            type="button"
                            className="dropdown-item d-flex align-items-center"
                            data-bs-theme-value="dark"
                            aria-pressed="false"
                        >
                            <svg
                                className="bi me-2 opacity-50 theme-icon"
                                width="1em"
                                height="1em"
                            >
                                <use href="#moon-stars-fill" />
                            </svg>
                            Dark
                            <svg className="bi ms-auto d-none" width="1em" height="1em">
                                <use href="#check2" />
                            </svg>
                        </button>
                    </li>
                    <li>
                        <button
                            type="button"
                            className="dropdown-item d-flex align-items-center active"
                            data-bs-theme-value="auto"
                            aria-pressed="true"
                        >
                            <svg
                                className="bi me-2 opacity-50 theme-icon"
                                width="1em"
                                height="1em"
                            >
                                <use href="#circle-half" />
                            </svg>
                            Auto
                            <svg className="bi ms-auto d-none" width="1em" height="1em">
                                <use href="#check2" />
                            </svg>
                        </button>
                    </li>
                </ul>
            </div>
            <header data-bs-theme="dark">
                <div className="collapse text-bg-dark" id="navbarHeader">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-8 col-md-7 py-4">
                                <h4>About</h4>
                                <p className="text-body-secondary">
                                    Add some information about the album below, the author, or any
                                    other background context. Make it a few sentences long so folks
                                    can pick up some informative tidbits. Then, link them off to some
                                    social networking sites or contact information.
                                </p>
                            </div>
                            <div className="col-sm-4 offset-md-1 py-4">
                                <h4>Contact</h4>
                                <ul className="list-unstyled">
                                    <li>
                                        <a href="#" className="text-white">
                                            Follow on Twitter
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-white">
                                            Like on Facebook
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-white">
                                            Email me
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navbar navbar-dark bg-dark shadow-sm">
                    <div className="container">
                        <a href="#" className="navbar-brand d-flex align-items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                aria-hidden="true"
                                className="me-2"
                                viewBox="0 0 24 24"
                            >
                                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                                <circle cx={12} cy={13} r={4} />
                            </svg>
                            <strong>Album</strong>
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarHeader"
                            aria-controls="navbarHeader"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                    </div>
                </div>
            </header>
            <main>
                <section className="py-5 text-center container">
                    <div className="row py-lg-5">
                        <div className="col-lg-6 col-md-8 mx-auto">
                            <h1 className="fw-light">Album example</h1>
                            <p className="lead text-body-secondary">
                                Something short and leading about the collection below—its contents,
                                the creator, etc. Make it short and sweet, but not too short so
                                folks don’t simply skip over it entirely.
                            </p>
                            <p>
                                <a href="#" className="btn btn-primary my-2">
                                    Main call to action
                                </a>
                                <a href="#" className="btn btn-secondary my-2">
                                    Secondary action
                                </a>
                            </p>
                        </div>
                    </div>
                </section>
                <div className="album py-5 bg-body-tertiary">
                    <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
    {datos.map(planta => (
        <div className="col" key={planta.id}>
            <div className="card shadow-sm">
                {planta.default_image && planta.default_image.medium_url ? (
                    <img
                        src={planta.default_image.medium_url}
                        alt={planta.common_name}
                        className="bd-placeholder-img card-img-top"
                        width="100%"
                        height={225}
                    />
                ) : (
                    <div>No image available</div>
                )}
                <div className="card-body">
                    <h3>{planta.common_name}</h3>
                    <p className="card-text">
                        {planta.cycle} Cycle, Watering: {planta.watering}
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <button
                                type="button"
                                className="btn btn-sm btn-outline-secondary"
                            >
                                View
                            </button>
                            <button
                                type="button"
                                className="btn btn-sm btn-outline-secondary"
                            >
                                Edit
                            </button>
                        </div>
                        <small className="text-body-secondary">9 mins</small>
                    </div>
                </div>
            </div>
        </div>
    ))}
</div>

                            
                        </div>
                    </div>
                </div>
            </main>
            <footer className="text-body-secondary py-5">
                <div className="container">
                    <p className="float-end mb-1">
                        <a href="#">Back to top</a>
                    </p>
                    <p className="mb-1">
                        Album example is © Bootstrap, but please download and customize it for
                        yourself!
                    </p>
                    <p className="mb-0">
                        New to Bootstrap? <a href="/">Visit the homepage</a> or read our{" "}
                        <a href="/docs/5.3/getting-started/introduction/">
                            getting started guide
                        </a>
                        .
                    </p>
                </div>
            </footer>
        </>

    )
    
}

export default Index
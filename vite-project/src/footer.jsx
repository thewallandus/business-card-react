import React from "react";
import { ReactDOM } from "react";
import './footer.css'

function Footer() {
    return (
        <div className="footer">
            <a href="https://twitter.com/thewallandthem"><i className="fa-brands fa-xl fa-square-twitter footer--icon"></i></a>
            <a href="https://www.instagram.com/thewallandthem/"><i className="fa-brands fa-xl fa-square-instagram footer--icon"></i></a>
            <a href="https://github.com/thewallandus"><i className="fa-brands fa-xl fa-square-github"></i></a>
        </div>
    )
}

export default Footer

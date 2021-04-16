import Icon from "./Icon";

import logo from '../public/logo-klouser.svg'
import logo_white from '../public/logo-klouser-white.svg'

export default function Header() {
    return (
        <header>
            <div className="container-fluid">
                <a href="/" target="_blank" className="logo"><img src={logo_white} alt="Klouser" /></a>
            </div>
        </header>
    )
}
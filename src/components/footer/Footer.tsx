import { useState, useMemo } from 'react';
import { profile } from '../../configs';
import packageJson from "../../../package.json";
import "./style.css";

const Footer = () => {
    const [count, setCount] = useState(1);

    const appVersion = useMemo(() => packageJson.version, []);
    const label = useMemo(() => {
        return count > 5 ? `App: v${appVersion}` : ` ${profile.name}`
    }, [count]);

    return (
        <footer>
            <div className="container footer-inner">
                <p onClick={() => { setCount(value => value + 1) }}>
                    © {new Date().getFullYear()} {label}
                </p>
                <p onClick={() => { setCount(1) }}>"Build. Learn. Improve."</p>
                <p>Made with ❤️ in India</p>
            </div>
        </footer>
    )
}

export default Footer
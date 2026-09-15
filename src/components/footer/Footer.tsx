import { useState, useMemo } from 'react';
import { profile } from '../../configs';
import packageJson from "../../../package.json";
import "./style.css";
import { useVisitorCount } from '../../hooks/useVisitorCount';

const Footer = () => {
    const [count, setCount] = useState(1);
    const visitorCount = useVisitorCount();

    const appVersion = useMemo(() => packageJson.version, []);
    const label = useMemo(() => {
        return count > 5 ? `App: v${appVersion}, Visitors: ${visitorCount}` : `© ${new Date().getFullYear()} ${profile.name}`
    }, [count]);

    return (
        <footer>
            <div className="container footer-inner">
                <p onClick={() => { setCount(value => value + 1) }}>
                    {label}
                </p>
                <p onClick={() => { setCount(1) }}>"Build. Learn. Improve."</p>
                <p>Made with ❤️ in India</p>
            </div>
        </footer>
    )
}

export default Footer
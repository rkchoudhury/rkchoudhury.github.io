import { useEffect } from 'react';
import "./style.css";

const ScrollBar = () => {
    useEffect(() => {
        const f = () => {
            const scrollbar = document.querySelector<HTMLElement>(".scrollbar");
            if (scrollbar) {
                scrollbar.style.width =
                    (scrollY / (document.documentElement.scrollHeight - innerHeight)) *
                    100 +
                    "%";
            }
            document.querySelector("nav")?.classList.toggle("scrolled", scrollY > 10);
        };
        addEventListener("scroll", f, { passive: true });
        return () => removeEventListener("scroll", f);
    }, []);

    return (
        <div className="scrollbar" />
    );
}

export default ScrollBar
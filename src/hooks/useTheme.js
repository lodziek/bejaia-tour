import { useEffect, useState } from 'react';

const KEY = 'bejaia-theme';

const readStored = () => {
    try {
        return localStorage.getItem(KEY);
    } catch {
        return null;
    }
};

const initialTheme = () => {
    const stored = readStored();
    if (stored === 'light' || stored === 'dark') return stored;
    return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

export default function useTheme() {
    const [theme, setTheme] = useState(initialTheme);

    useEffect(() => {
        document.documentElement.dataset.theme = theme;
        try {
            localStorage.setItem(KEY, theme);
        } catch {
            /* storage unavailable (private mode): the theme simply isn't remembered */
        }
    }, [theme]);

    const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));
    return [theme, toggle];
}

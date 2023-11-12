import { createContext, useContext, useEffect, useReducer } from "react";
import appReducer from "./app-reducer";

const AppContext = createContext();

const initialState = {
    theme: localStorage.getItem('theme') || 'light',
    menu: localStorage.getItem('menu') || 'close',
    loca: localStorage.getItem('location') || 'paris',
};

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(appReducer, initialState);

    // Change Theme Mode
    const changeTheme = (theme) => {
        dispatch({ type: 'CHANGE_THEME', payload: theme });
    }
    useEffect(() => {
        localStorage.setItem('theme', state.theme);
    }, [state.theme]);

    // Toggle Menu
    const toggleMenu = (menu) => {
        dispatch({ type: 'TOGGLE_MENU', payload: menu });
    }
    useEffect(() => {
        localStorage.setItem('menu', state.menu);
    }, [state.menu]);

    // set location
    const setLocation = (loca) => {
        dispatch({ type: 'SET_LOCATION', payload: loca });
    }
    useEffect(() => {
        localStorage.setItem('location', state.loca);
    }, [state.loca]);

    return <AppContext.Provider value={{ ...state, changeTheme, toggleMenu, setLocation }}>
        {children}
    </AppContext.Provider>
}

const useAppContext = () => {
    return useContext(AppContext);
}

export { useAppContext, AppProvider }
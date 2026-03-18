import Cookies from "js-cookie";
import { createContext, useContext, useState, useEffect } from "react";

type AuthCtx = {
    authToken: string | null
    login: (token: any | string) => void
    logout: () => void
}

const AuthContext = createContext<AuthCtx>(null as unknown as AuthCtx);

export function useAuth () {
    return useContext(AuthContext);
}

export const AuthProvider =({ children }: { children: any }) => {
    const [authToken, setAuthToken] = useState<string | null>(null);

    useEffect(() => {
        if(!authToken) return;
        const token = Cookies.get('Token');
        if (token) setAuthToken(token);
    }, [])

    const login = (token: any | string) => {
        setAuthToken(token);
        // cookies
        Cookies.set("Token", token)
        // console.log("Token:", token);
    };
    const logout = () => {
        setAuthToken(null)
    }

    return (
        <AuthContext.Provider value={{ authToken, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

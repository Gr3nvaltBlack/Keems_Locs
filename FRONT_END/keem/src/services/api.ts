import axios from "axios"
import { useAuth } from "../Context/AuthContext";

interface UserResponse {
    user: {
        _id: number,
        username: string,
        email: string,
        password: string,
    };
    token : string,
}

interface TokenResponse {
    access: string,
    refresh: string,
}

export interface AuthResponse {
    username: string,
    email: string,
}


export const PostRegister = async(username: string, email: string, password: string, confirmPass: string) => {
    try {
        const req = await axios.post<UserResponse>(
            `${import.meta.env.VITE_API_URL}register/`,
            {
                username,
                email,
                password,
            },
        );
        return req.data;
    } catch (error: any) {
        return { error: "Error during registration:" }
    }
}


export const PostLogin = async(username: string, password: string) => {
    try {
        const req = await axios.post<TokenResponse>(
            `${import.meta.env.VITE_API_URL}api/token/`,
            {
                username,
                password,
            }
        );
        return req.data
    } catch (error: any) {
        return null
    }
}


export const GetAuthUser = async(authToken: string) => {
    try {
        const req = await axios.get<AuthResponse>(
            `${import.meta.env.VITE_API_URL}profile/`,
            {
                headers: {
                    'Authorization': `Bearer ${authToken}`
                }
            }
        );
        return req.data
    } catch (error: any) {
        return null
    }
}
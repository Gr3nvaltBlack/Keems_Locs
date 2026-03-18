import axios from "axios";


export interface PaginationResponse {
    count: number,
    next: null,
    previous: null,
    results: ArticleResponse[]
}

export interface ArticleResponse {
        id: number,
        title: string,
        picture: string,
        stock: boolean,
        price: number,
        description: string,
        articleStock: ArticleResponseStock[],
        reviews: ReviewResponse[]
}

export interface ArticleResponseStock {
    color: {
        name: string,
        hex_code: string,
    },
    size: {
        size: number
    },
    quantity: number
}

export interface ReviewResponse {
    user: {
        username: string;
    },
    text: string,
    rating: number
}




export const GetCards = async() => {
    try {
        const req = await axios.get<PaginationResponse>(`${import.meta.env.VITE_API_URL}articles/`);
        return req.data
    } catch (error: any) {
        return null
    }
}

export const GetCard = async(id: number) => {
    try {
        const req = await axios.get<ArticleResponse>(`${import.meta.env.VITE_API_URL}articles/${id}`);
        return req.data
    } catch (error: any) {
        return null
    }
}

export const PostReview = async(text: string, rating: number) => {
    try{
        const req = await axios.post<ReviewResponse>(
            `${import.meta.env.VITE_API_URL}register/`,
            {
                text,
                rating,
            },
        );
        return req.data
    } catch (error: any) {
        return { error: "Error during comment submission" }
    }
}

export interface Movie{
    original_title:string,
    poster_path:string,
    vote_average:number,
    description:string,
    release_date:string,
    year:string,
    id:string
}

export interface MovieDetails{
    title:string,
    backdrop_path:string,
    vote_average:number,
    overview:string,
    release_date:string,
    status:string,
    tagline:string,
    id:string,
    vote_count:Number,
    original_language:string
}

export interface APIResponse<T>{
    results:Array<T>
}


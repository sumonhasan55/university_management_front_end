export const getBaseUrl=()=>{
    return process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3333/api/v1"
}
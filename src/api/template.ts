const header = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': `Bearer ${import.meta.env.VITE_API_KEY}`,
}
const baseUrl = import.meta.env.VITE_API_MOCKAPI_BASEURL

export {header,baseUrl}
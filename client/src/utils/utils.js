export const getProducts=(filters)=>{
    let url=`${import.meta.env.VITE_DUMMY_URL}/products`

    if (filters.category){
        url +=`/category/${filters.category}`
    }
    const response = await fetch(url);
    const json = await response.json();

    return json;
}
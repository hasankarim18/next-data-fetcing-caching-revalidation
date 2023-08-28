export default async function getBlogPost(id) {
    const postUrl = `https://dummyjson.com/posts/${id}`;
    const res = await fetch(postUrl)
    const data = await res.json()
    return data; 
}
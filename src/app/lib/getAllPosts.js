
export default async function  getAllPosts() {
   try {
     const postUrl = "https://dummyjson.com/posts";
     const userUrl = "https://dummyjson.com/users";

     const postRes = await fetch(postUrl);
     const userRes = await fetch(userUrl)
   
     const posts = await postRes.json();
     const users = await userRes.json()

     return {posts,users};   
   } catch (error) {
      throw new Error("Error fetching posts");
   }    
}
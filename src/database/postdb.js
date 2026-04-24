const posts = [
    {
        id: 1,
        title: "first Post",
        description: "kdjfksjfwj" 
    },
    {
        id: 2,
        title: "first Post",
        description: "kdjfksjfwj" 
    },
    {
        id: 3,
        title: "first Post",
        description: "kdjfksjfwj" 
    },
]

export const addPost = (newPost) => {
    posts.push(newPost)
    console.log(posts);
}

export const getPosts = () => {
    return posts
}
import axios from "axios";

const usersData = ("https://jsonplaceholder.typicode.com/users/")
const postsData = ("https://jsonplaceholder.typicode.com/posts/")

async function getUsers(user_id) {
    return new Promise( async (resolve, reject) => {
        const { data:userData } = await axios(usersData+user_id)
        resolve(userData)
    })
}

async function getPost(post_id) {
    return new Promise( async (resolve, reject) => {
        const { data:postData } = await axios(postsData+post_id)
        resolve(postData)
    })
}


export default async function getData (id=1) {
    const getUsersData = await getUsers(id)
    const getPostData = await getPost(id)

    console.log(getUsersData)
    console.log(getPostData)
}

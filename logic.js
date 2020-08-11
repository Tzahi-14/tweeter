const Tweeter = function () {
    const posts = [
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    ]
    let postIdCounter = 3
    let commentIdCounter = 7

    const getPosts = function () {
        return posts
    }
    const removePost = function(postId){
        for (let j in posts){
            if(posts[j].id ===postId){
                posts.splice(j,1)
            }
        }
    }

    const addPost = function (text) {
        const newPost = {
            text: text,
            id: "p" + postIdCounter,
            comments: []
        }
        postIdCounter++
        posts.push(newPost)
    }
    const addComment = (postId,text)=>{
        const newComment = {
            text: text,
            id: "c"+commentIdCounter
        }
        commentIdCounter++
        for(let i in posts){
            if(postId===posts[i].id){
                posts[i].comments.push(newComment)
            }
        }
    }
    const removeComment = (postId,commentId)=>{
        for (let i in posts){
            if (postId== posts[i].id){
                for(let j in posts[i].comments){
                    if(commentId==posts[i].comments[j].id){
                        posts[i].comments.splice(j,1)
                    }
                }
            }
        } 
    }
    return {
        addP: addPost,
        getP: getPosts,
        addC :addComment,
        removeC: removeComment,
        removeP:removePost
    }
}
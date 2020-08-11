const Renderer = function () {
    const renderPosts = function (posts) {
        $("#posts").empty()
        for (let post of posts) {
            let postData = `<div class="post-data" data-id="${post.id}"> ${post.text}`
            for (let comment of post.comments) {
                postData += `<div class="comments" data-id="${comment.id}"> <i class="fas fa-trash delete-comment"></i> <span>${comment.text}</span> </div>`
            }

            postData += `<input class="comment" type="text" placeholder="write a comment">`
            postData += `<button class="add-comment">Add comment</button>`
            postData += `<div><button class="delete">Delete your post</button></div>`
            postData += `</div>`

            $("#posts").append(postData)
        }
    }
    return {
        renderPosts: renderPosts
    }
}
const tweeter = Tweeter()
const renderer = Renderer()

renderer.renderPosts(tweeter.getP())

const post = function () {
    const postText = $("#input").val()
    tweeter.addP(postText)
    renderer.renderPosts(tweeter.getP())
}

$("#posts").on("click", ".delete", function () {
    const removeById = $(this).closest(".post-data").data().id
    tweeter.removeP(removeById)
    renderer.renderPosts(tweeter.getP())
})

$("#posts").on("click", ".add-comment", function () {
    const commentText = $(this).closest(".post-data").find(".comment").val()
    const postById = $(this).closest(".post-data").data().id
    tweeter.addC(postById,commentText)
    renderer.renderPosts(tweeter.getP())
})

$("#posts").on("click",".delete-comment",function(){
    const postById = $(this).closest(".post-data").data().id
    const commentById = $(this).closest(".comments").data().id
    tweeter.removeC(postById,commentById)
    renderer.renderPosts(tweeter.getP())
})


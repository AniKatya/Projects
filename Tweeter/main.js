const tweeter = Tweeter()
const renderer = Renderer()

renderer.renderPosts(tweeter.getPost())

//adding a post
$("#post").on("click",function(){
    const post = $(this).closest("#container").find("#input").val();
    tweeter.addPost(post);
    renderer.renderPosts(tweeter.getPost())
})

//deleting a post
$("#posts").on("click", ".delete", function(){
    tweeter.removePost($(this).closest(".post").data("id"))
    renderer.renderPosts(tweeter.getPost());
});
  
//adding a comment
$("#posts").on("click",".newcomment",function(){
    const comment = $(this).closest(".post").find("#input-comment").val();
    const postid = $(this).closest(".post").data("id")
    tweeter.addComment(postid,comment);
    renderer.renderPosts(tweeter.getPost());
})

//deleting a comment
$("#posts").on("click",".delete-comment", function(){
    const postId= $(this).closest(".post").data("id")
    const commentId = $(this).closest(".comment").data("id")
    tweeter.removeComment(postId,commentId)
    renderer.renderPosts(tweeter.getPost());
})

const Renderer = function(){
    const renderPosts = function(posts){
        $("#posts").empty();
       for (let i in posts){
           $("#posts").append(`<div class=post data-id=${(posts)[i].id} id=${(posts)[i].id}>${(posts)[i].text}
           <div class=delete>Delete post</div>
           <div class=newcomment>Comment</div>
           <input type="text" placeholder="What do you think about it?" id="input-comment">
           </div>`)
           for (let a in posts[i].comments){
               let p = $(".post");
               $(p[i]).append(`<div class=comment data-id=${(posts)[i].comments[a].id}>${(posts)[i].comments[a].text}
               <div class=delete-comment>X</div>
               </div>`)
            }
        }
    }
    return {
        renderPosts: renderPosts}
    }

// const Renderer = function(){
//         const loopPosts= function(){
//             for (let i in posts){
//                $("#posts").append(`<div class=post data-id=${(posts)[i].id} id=${(posts)[i].id}>${(posts)[i].text}
//                <div class=delete>Delete post</div>
//                <div class=newcomment>Comment</div>
//                <input type="text" placeholder="What do you think about it?" id="input-comment">
//                </div>`)}
//             }

        // const loopComments = function(){
        //     for (let i in posts){
        //         for (let a in posts[i].comments){
        //            let p = $(".post");
        //            $(p[i]).append(`<div class=comment data-id=${(posts)[i].comments[a].id}>${(posts)[i].comments[a].text}
        //            <div class=delete-comment>X</div>
        //            </div>`)
        //         }
        //     }
        // }
        // const renderPosts = function(posts){
        //     $("#posts").empty();
        //     loopComments(posts)
        //     loopPosts(posts)
        // }
        // return {
        //     renderPosts: renderPosts}
        // }
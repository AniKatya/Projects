
const Tweeter = function(){
    const posts=[
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
    ;
    postIdCounter=2;
    commentsIdCounter=2;

    const getPost = ()=>{
        return posts;
    };

    const addPost = function(text){
        if(text){postIdCounter++
        let newObject = {
            text: text,
            id: "p"+postIdCounter,
            comments:[],
        }
        posts.push(newObject)
    }}

    const removePost = function(postId){
        for (let i in posts){
            if(postId==posts[i].id){
                posts.splice(i,1)
        }
    }
};

    const addComment = function(postId,text){
        commentsIdCounter++
        let newComment = {
            text: text,
            id: "c"+commentsIdCounter
        }
        posts[parseInt(postId.substr(1))-1].comments.push(newComment)//сделать покрасивее
    };

    const removeComment = function(postId,commentId){
        for (let i in posts){
            if(postId==posts[i].id){
                for (let a in posts[i].comments){
                    if(commentId==posts[i].comments[a].id){
                    posts[i].comments.splice(a,1)
                }   
        }
    }}};


    return {
        postIdCounter,
        commentsIdCounter,
        addPost,
        getPost,
        removePost,
        addComment,
        removeComment
    }
}


// const tweeter = Tweeter();

// tweeter.addPost("This is my own post!")
// tweeter.addComment("p1","shit")
// tweeter.removeComment("p1","c1")
// console.log(tweeter.getPost())


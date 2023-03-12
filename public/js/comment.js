const commentHandler = async (event) => {
    event.preventDefault();

    const postId = document.querySelector('#post-id').value;
    const commentData = document.querySelector('#comment-text').value.trim();

    //if there is body data for a comment
    //then route it to the backend to
    //POST to the req.body


    //if response is ok
    //replace with the single post page
}
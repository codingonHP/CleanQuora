
function hideAllGarbage() {
    var hideList = [
        ".answer_user",
        ".AnswerHeader",
        ".UserUpvotedAnswerReason",
        ".view_comments",
        ".AboutAuthorSection",
        ".user",
        ".UserWroteAnswerReason",
        ".EventHeader",
        ".FeedReason",
        ".ContentFooter",
        ".AnswerFooter",
        ".PostHeader",
        ".profile_photo_img",
        ".NameCredential",
        ".IdentityNameCredential",
        ".feed_item_answer_user",
        ".modal_promoted_content",
        ".PromptsList"
    ].join(",");

    document.querySelectorAll(hideList)
    .forEach(div => div.remove());

    document.querySelectorAll('.Upvote > span.count').forEach(e => e.remove());
}

hideAllGarbage();

setInterval(hideAllGarbage, 500);

console.log('quora cleaner is running');
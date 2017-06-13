
function hideAllGarbage() {
    const hideList = [
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

    document.querySelectorAll(".Upvote > span.count").forEach(e => e.remove());

    appendMarker();
}

function appendMarker() {

    const dom = document.querySelectorAll(".AnswerPagedList > .pagedlist_item");

    dom.forEach(div => {

        if (div.firstChild && !div.firstChild.classList.contains("marker")) {
            div.style.position = "relative";

            const newNode = getMarkerDiv();
            var firstChild = div.firstChild;
            div.insertBefore(newNode, firstChild);
        }

    });
}


function getMarkerDiv() {

    const newNode = document.createElement("div");
    newNode.innerText = "#";
    newNode.style.fontSize = "50px";
    newNode.style.position = "absolute";
    newNode.style.left = "-40px";
    newNode.style.textShadow = "1px 1px";
    newNode.className = "marker";

    return newNode;
}

hideAllGarbage();


setInterval(hideAllGarbage, 500);

console.log("quora cleaner is running");
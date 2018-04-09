function newComment(btn){
    var parent = $(btn)[0].parentNode;
    //Hide the button and show the text box
    $(btn).toggleClass("hidden");
    $(parent.children[2]).toggleClass("hidden")
}


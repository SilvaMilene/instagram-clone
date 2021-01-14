$( document ).ready(function() {
  $("#post-comment").on("click", function(){
    $("#comment_comment").find();
  })

  $(".post-like").on("click", function(){
    var post_id = $(this).data("id");
    $.ajax({
      url: "/post/like/"+post_id,
      method: "GET",
    }).done(function(response){
        console.log(response);
    })
  })
});

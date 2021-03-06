function createPost() {
  // create template functions, this includes the page template (which will go on main element and house the posts ID), the post template which is the formating for how each post will look, and the comments Template which will only be displayed after a post is submitted
  var pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  var postTemplate = _.template(document.getElementById("post-template").innerHTML);
  var commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);

  // get values from the blog post form to use in our template variables above
  var postTitle = document.getElementById("blogTitle").value;
  var postAuthor = document.getElementById("blogAuthor").value;
  var postBody = document.getElementById("blogBody").value;

  // Since we are only showing the post form in our HTML and the the only time we will generate any space for posts is after submit, this is the section generating that space. We are calling [0] because if not it will return the array like data when we want the actual "main" element 
  document.getElementsByTagName("main")[0].innerHTML += pageTemplate();

  // creating a variable with the post template and including, as arguments, the variables of collected data
  var blogSection = postTemplate({ 'title': postTitle, 'body': postBody, 'poster': postAuthor });

  // generating the comments form section now that a post has been submitted. and putting that in a variable to be used later
  var commentsSection = commentsTemplate();

  // setting a variable as the spot where the post will go (from the page template)
  var postElement = document.getElementById("post");

  // using the variable from above which is a place holder for a blog post and adding the HTML for the blog variable above that included the arguments from the form.
  postElement.innerHTML = blogSection;

  // putting the comments form in the footer
  postElement.getElementsByTagName("footer")[0].innerHTML = commentsSection;
}

function postComment() {
  // this is the formatting of the comments from the script and getting the inner HTML of it (just like the above templates)
  var commentTemplate = _.template(document.getElementById("comment-template").innerHTML);

  // getting the values from the form generated by the function above
  var commentText = document.getElementById("comment").value;
  var commenterName = document.getElementById("commenter").value;

  // got the comment id and set that to a variable
  var commentsSection = document.getElementById("comments");

  // took the innerHTML from the above variable and inserted the template and the arguments from the form data we collected as variables
  commentsSection.innerHTML += commentTemplate({ 'commenter': commenterName, 'comment': commentText });
}
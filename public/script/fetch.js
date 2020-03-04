fetch('/users').then((result) => result.json()).then((result) => reanderUers(result));
fetch('/users').then((result) => result.json()).then((result) => userData = result);
fetch('/posts').then((result) => result.json()).then((result) => reanderPosts(result));

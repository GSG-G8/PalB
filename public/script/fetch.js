fetch('/login', { method: 'post' }).then((result) => result.json()).then((result) => reanderUers(result));
fetch('/login', { method: 'post' }).then((result) => result.json()).then((result) => userData = result);
fetch('/posts', { method: 'post' }).then((result) => result.json()).then((result) => reanderPosts(result));

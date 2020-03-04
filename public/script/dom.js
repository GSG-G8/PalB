const users = document.querySelector('.users');
const posts = document.querySelector('.posts');

const reanderUers = (result) => {
  result.forEach((data) => {
    const userConatiner = document.createElement('div');
    const userAvatar = document.createElement('img');
    const NameUser = document.createElement('span');

    userConatiner.className = 'users__container';
    userAvatar.className = 'content__avatar';
    userAvatar.src = data.avatar;
    NameUser.className = 'content__name';
    NameUser.textContent = data.name;

    users.appendChild(userConatiner);
    userConatiner.appendChild(userAvatar);
    userConatiner.appendChild(NameUser);
  });
};
let userData;
const reanderPosts = (result) => {
  result.forEach((data) => {
    const post = document.createElement('article');
    const postContainer = document.createElement('div');
    const userAvatar = document.createElement('img');
    const containerName = document.createElement('div');
    const NameUser = document.createElement('span');
    const postDate = document.createElement('span');
    const postTitle = document.createElement('span');
    const postImage = document.createElement('img');
    const postContent = document.createElement('span');

    post.className = 'post';
    postContainer.className = 'post__container';
    userAvatar.className = 'content__avatar';
    containerName.className = 'container__name';
    NameUser.className = 'content__name';
    postDate.className = 'post__date';
    postDate.textContent = data.post_date;
    postTitle.className = 'post__title';
    postTitle.textContent = data.post_title;
    postImage.className = 'post__image';
    postImage.src = data.post_img;
    postImage.alt = data.post_title;
    postContent.className = 'post_content';
    postContent.textContent = data.post_content;

    userData.forEach((e) => {
      if (data.user_id === e.id) {
        userAvatar.src = e.avatar;
        NameUser.textContent = e.name;
      }
    });

    posts.appendChild(post);
    post.appendChild(postContainer);
    postContainer.appendChild(userAvatar);
    postContainer.appendChild(containerName);
    containerName.appendChild(NameUser);
    containerName.appendChild(postDate);
    post.appendChild(postTitle);
    post.appendChild(postImage);
    post.appendChild(postContent);
  });
};

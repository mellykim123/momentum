// 핵심기능: css 를 사용하지 않고 랜덤한 배경이미지를 넣기
// Math.floor 를 사용해 정수로 만들어주고, Math.random 을 사용해 랜덤한 배열번호 선택

const images =["cloud.jpg","beach1.jpg","풍경3.jpg",];
const chosenImage = images[Math.floor(Math.random()*images.length)];
const bgImage = document.createElement("img");
bgImage.src=`img/${chosenImage}`;
document.body.appendChild(bgImage);
bgImage.id = 'bgImage';

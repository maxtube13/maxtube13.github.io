// The list that keeps all the videos from the gallery DO NOT MOVE
let videos = [];


// This function fills the video gallery with links to videos
function fillGallery(cartoonName) {
    // First clear the "videos" list (it has to stay outside to be visible to other functions)
    videos.length = 0;

    // Then create a list of the titles of all videos we'll be using (we take the list that corresponds to the cartoon name in "cartoons")
    const titles = cartoons[cartoonName];

    // Get the "videoGallery" element from the html file and make it empty
    const videogallery = document.getElementById('videoGallery');
    videogallery.innerHTML = '';

    // We'll be giving each video a number id so first we need to create a variable that will do that
    let nid = 0;

    // For each video title in our "titles" list create a list containing [id, title, path to video, path to poster image], 
    // add this list to "videos", 
    // and add 1 to the id variable
    titles.forEach(title => {
        const cartoon = [nid.toString(), title, `../videos/${cartoonName}/${title}.mp4`, `../images/${cartoonName}/preview ${title}.jpg`];
        videos.push(cartoon);
        nid++;
    });

    // For each element in "videos" list create a <div> element with class "videoLink",
    // create a link element that does nothing with an id, the poster image, and the video title from the list
    // make the link element activate the redirectToPlayer function with its own id as a parameter
    // add the link inside the <div> and <div> inside the video gallery
    videos.forEach(vid => {        
        const div = document.createElement('div');
        div.classList.add('videoLink');

        const a = document.createElement('a');
        a.id = vid[0];
        a.href = 'javascript:void(0);';
        a.innerHTML = `<img src="${vid[3]}" alt="${vid[1]}"><br>${vid[1]}`;

        a.addEventListener('click', function() {
            redirectToPlayer(this);
        });

        div.appendChild(a);
        videogallery.appendChild(div);
    });
}



// This function makes a clicked link open the right video
function redirectToPlayer(clickedElement) {
    // get the clicked element's id and send into local storage its id and "videos", then open player.html
    const clickedID = clickedElement.id;
    localStorage.setItem('clickedID', clickedID);
    localStorage.setItem('videos', JSON.stringify(videos));
    window.location.href = "player.html";
}





// This list keeps all cartoon names and corresponding lists of videos
const cartoons = {
    'prostokvashino' : 
    [
        'Трое из Простоквашино',
        'Каникулы в Простоквашино',
        'Зима в Простоквашино',
        '1 сезон 1 серия Возвращение в Простоквашино часть 1',
        '1 сезон 2 серия Возвращение в Простоквашино часть 2',
        '1 сезон 3 серия Сезон дождей',
        '1 сезон 4 серия Диета Матроскина',
        '1 сезон 5 серия Шарик хочет телефон',
        '1 сезон 6 серия Чудовище из Простоквашино',
        '1 сезон 7 серия Ген героя',  
        '1 сезон 8 серия НЕ настоящий детектив',
        '1 сезон 9 серия Мама и Тама',
        '1 сезон 10 серия Как бы не было зимы',
        '1 сезон 11 серия Вишнёвая феерия',
        '1 сезон 12 серия Неудобные соседи',
        '1 сезон 13 серия Магазин на лежанке',
        '1 сезон 14 серия Доброе молоко',
        '1 сезон 15 серия Гипноз',
        '1 сезон 16 серия Мамонт из Простоквашино',
        '1 сезон 17 серия Матроскин блюз',
        '1 сезон 18 серия Бродячие термиты',
        '1 сезон 19 серия Анфиса',
        '1 сезон 20 серия Маргарита Мегеровна',
        '1 сезон 21 серия Тайна фиолетового пятна',
        '1 сезон 22 серия Будьте здоровы!',
        '1 сезон 23 серия Счастливый рубль',
        '1 сезон 24 серия Комета',
        '1 сезон 25 серия Корпоратив',
        '1 сезон 26 серия Исчезновение коров',
        '1 сезон 27 серия Всё включено',
        '1 сезон 28 серия Подмена',
        '1 сезон 29 серия Лесной дух',
        '1 сезон 30 серия Доить или не доить'
    ],

    'smeshariki' : 
    [
        'Сборник серии 1-13',
        'Сборник серии 14-26',
        'Сборник серии 27-39',
        'Сборник серии 40-52',
        'Сборник серии 53-65',
        'Сборник серии 66-78',
        'Сборник серии 79-91',
        'Сборник серии 92-104',
        'Сборник серии 105-117',
        'Сборник серии 118-131'
    ]
};




// When the page first opens it fills the gallery with this cartoon:
fillGallery('smeshariki');



// Get all elements with class navLink (navigation links that should refill the gallery with other cartoons),
// cancel their default behavior and instead make them activate fillGallery function with their id as the cartoon name parameter
const navigation = document.querySelectorAll('.navLink');
navigation.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const cartoonName = event.currentTarget.id;
        fillGallery(cartoonName);
    });
});

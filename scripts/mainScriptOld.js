const titles = [
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

]

let nid = 0;

const videos = [];

titles.forEach(title => {
    const cartoon = [nid.toString(), title, '../videos/' + title + '.mp4', '../images/preview ' + title + '.jpg'];
    videos.push(cartoon);
    nid++;
})




const videogallery = document.getElementById('videoGallery');

videos.forEach(vid => {
    const htmlCode = "<a id=" + vid[0] + " href='javascript:void(0);' onclick='redirection(this);'> <img src='" + vid[3] + "' alt='" + vid[1] +"'> <br> " + vid[1] + "</a>";
    const div = document.createElement('div');
    div.classList.add('videoLink');
    div.innerHTML = htmlCode;
    videogallery.appendChild(div);
})


function redirection(clickedElement) {
    const clickedID = clickedElement.id;
    localStorage.setItem('vidLink', videos[clickedID][2]);
    localStorage.setItem('vidPreview', videos[clickedID][3]);
    window.location.href = "player.html";
}
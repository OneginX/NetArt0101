const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e7b656032dmsh9ca648b2b2eb9f2p1512eajsnf330914cbada',
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
	}
};

const number = Math.floor(Math.random() * 500) + 1;

async function getData(){
    const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${number}`, options);
    const data = await response.json();
    console.log(data);
    document.getElementById('name').innerHTML = data.title;
    document.getElementById('img').src = data.thumbnail;
    document.getElementById('date').textContent = data.release_date;
    document.getElementById('platform').textContent = data.platform;
    document.getElementById('genre').textContent = data.genre;
    document.getElementById('dev').textContent = data.developer;
    document.getElementById('btn').href = data.game_url;    
    document.getElementById('bg').style.backgroundImage =  `url(${data.thumbnail})`;
}

getData();



//----------------------------------------blanks----------------------------------
// function fillBlanks(){
//     document.getElementById('name').innerHTML = response.id;
// }

// fillBlanks();
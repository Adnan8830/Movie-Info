
const movieDetails = document.getElementById('movie-details');
const title = document.getElementById('title');
const year = document.getElementById('year');
const plot = document.getElementById('plot');
const cast = document.getElementById('cast');

function showMovieDetails(movie) {
    movieDetails.style.display = 'block';
   title.textContent = movies[movie].title;
   year.textContent = movies[movie].year;
    plot.textContent = movies[movie].plot;
    cast.textContent = movies[movie].cast;


}


const movies = {
    'Jawaan': {
        'title': 'Jawaan',
        'year': '2023',
        'plot': 'The story revolves around the lives of six men and a girl in Mumbai, where the film follows their paths and their lives as they struggle to make it in the city.',
        'cast': 'Kartik Aaryan, Sidharth Malhotra, Sara Ali Khan, Nawazuddin Siddiqui'
    },
    'Animal': {
        'title': 'Animal',
        'year': '2023',
        'plot': 'Animal is an upcoming Indian thriller film directed by Antony Perumbavoor. The film stars Sunny Deol and Mawra Hocane.',
        'cast': 'Sunny Deol, Mawra Hocane, Mohan Arora, J.M. Abhayananda'
    },
    'RRR': {
        'title': 'RRR',
        'year': '2023',
        'plot': 'RRR is an upcoming Indian action film directed by S. S. Rajamouli. The film features Ravi Teja and Nayanthara.',
        'cast': 'Ravi Teja, Nayanthara, Sharan, Jagapathi Babu'
    },
    'Bhool Bhulaiyya 2': {
        'title': 'Bhool Bhulaiyya',
        'year': '2023',
        'plot': 'Bhool Bhulaiyya is an upcoming Indian supernatural horror film directed by Dharmesh Darshan. The film features Dharmesh Darshan and Dhara Patel.',
        'cast': 'Dharmesh Darshan, Dhara Patel, Sahil Rhatore, Achyuth Kumar'
    },
    'Vikram Hitlist': {
        'title': 'Vikram Hitlist',
        'year': '2023',
        'plot': 'Vikram Hitlist is an upcoming Indian action film directed by Abi Ravelan. The film features Vikram, Gajala and Swati Chaudhary.',
        'cast': 'Vikram, Gajala, Swati Chaudhary, Nagendra Babu, Kondavalasa Bharadwaj, Bhuvanagiri Venkatesh'
    },
    'Family Man': {
        'title': 'Family Man',
        'year': '2022',
        'plot': 'A crime thriller web series originated by amazon prime video.',
        'cast': 'Manoj Bajpaye,Samantha ruth Prabhu,Sharib Hashmi'
    },
    'Kgf Chapter-2': {
        'title': 'Kgf Chapter-2',
        'year': '2022',
        'plot': 'As Rockys influence grows, many central ministers plan the downfall of Guru Pandians government, to bring in the Govt of Ramika Sen. They believe only Ramika can free India from the terror of Rocky and KGF. Rocky issues orders to start work in eight hidden mines.',
        'cast': 'Yash, Srinidhi, Sanjay Dutt'
    },

    'Sita Ramam': {
        'title': 'Sita Ramam',
        'year': '2022',
        'plot': 'An orphaned soldiers life changes after he receives a letter from a girl named Sita. He meets her and love blossoms between them. When he returns to her camp in Kashmir, he sends a letter to Sita that will not reach her.',
        'cast': 'Dulquer Salman, Mrunal Thakur'
    },
    'Tiger 3': {
        'title': 'Tiger 3',
        'year': '2023',
        'plot': 'In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and marginalized by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.',
        'cast': 'Tigers team, Zoya and ISI agents Abrar and Javed return to Istanbul, where they learn that Aatish and Pakistani Army General Imtiaz Haq are planning to assassinate Pakistani Prime Minister Nasreen Irani in order for Aatish to replace her. Tiger, Zoya, and their team secretly enter the PMO and reveal the plan to Irani.'
    },
    'Ludo': {
        'title': 'Ludo',
        'year': '2020',
        'plot': ' From a resurfaced sex tape to a rogue suitcase of money, four wildly different stories overlap at the whims of fate, chance and one eccentric criminal. ',
        'cast': 'Sanya Malhotra, Rohit Suresh, Fatima Sana Shaikh'
    },
    'Commando 2': {
        'title': 'Commando',
        'year': '2017',
        'plot': 'A skilled soldier and martial artist leads a team of four on a mission from India to Malaysia, where he is tasked with capturing the head of a money-laundering scheme that has siphoned a fortune to banks abroad, and returning the money to India.',
        'cast': 'Vidyut Jamval, Adah Sharma, Freddy Daruwala.'
    },

    'Leo': {
        'title': 'Leo',
        'year': '2023',
        'plot': 'Things start to take an awry turn for a mild-mannered cafe owner, who gets caught in the crosshairs of a drug cartel.',
        'cast': 'Vijay, Lokesh Kanagaraj, Trisha Krishnan.'
    }
};










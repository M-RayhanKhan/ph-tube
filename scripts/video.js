function getTimeString(time){
    const hours = parseInt(time / 3600);
    let remainingSecond = parseInt(time % 3600);
    const minute = parseInt(remainingSecond / 60);
    remainingSecond = remainingSecond % 60;

    return(`${hours} hours ${minute} minute ${remainingSecond} second`);
}


// create loadDataCategories
const loadCategories = () => {
    // fetch the data 
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        .then(res => res.json())
        .then(data => displayCategories(data.categories))
        .catch(error => console.log(error))
}

// create loadVideos data
const loadVideos = () => {
    // fetch the data 
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
        .then(res => res.json())
        .then(data => displayVideosData(data.videos))
        .catch(error => console.log(error))
}

// {
//     "category_id": "1001",
//     "video_id": "aaad",
//     "thumbnail": "https://i.ibb.co/f9FBQwz/smells.jpg",
//     "title": "Smells Like Teen Spirit",
//     "authors": [
//         {
//             "profile_picture": "https://i.ibb.co/k4tkc42/oliviar-harris.jpg",
//             "profile_name": "Oliver Harris",
//             "verified": true
//         }
//     ],
//     "others": {
//         "views": "5.4K",
//         "posted_date": "1672656000"
//     },
//     "description": "'Smells Like Teen Spirit' by Oliver Harris captures the raw energy and rebellious spirit of youth. With over 5.4K views, this track brings a grunge rock vibe, featuring powerful guitar riffs and compelling vocals. Oliver's verified profile guarantees a quality musical journey that resonates with fans of dynamic, high-energy performances."
// }

// loadCategoryVideo data
const loadCategoryVideo = (id) =>{
    // alert(id)
    fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
    .then(res => res.json())
    .then(data => displayVideosData(data.category))
    .catch(error => console.log(error))
}

// Display videosData
const displayVideosData = (videos) => {
    console.log(videos);
    const videosContainer = document.getElementById('videos');
    videosContainer.innerHTML = ''
    videos.forEach(video => {
        console.log(video);
        const cardDiv = document.createElement('div');
        cardDiv.classList = 'card bg-base-100 shadow-xl border';
        cardDiv.innerHTML = `
          <figure class="h-[200px] relative">
            <img class="h-full w-full object-cover"
            src="${video.thumbnail}"
            alt="Shoes" />
            ${video.others.posted_date.length === 0 ? "" : `  <span class="text-white text-xs bg-black p-1 absolute right-2 bottom-2">${getTimeString(video.others.posted_date)}</span>`}
          
        </figure>
        <div class="px-0 py-3 gap-2 flex">
            <div class="">
            <img class="w-10 h-10 object-cover rounded-full" src="${video.authors[0].profile_picture}" />
            </div>
            <div class="">
            <h2 class="text-xl font-bold">${video.title}</h2>
            <div class="flex items-center gap-2">
            <p class="text-gray-500">${video.authors[0].profile_name}</p>
            ${video.authors[0].verified === true ? `<img class="w-5 " src='https://img.icons8.com/?size=48&id=D9RtvkuOe31p&format=png' />` : ""}
            
            </div>
            </div>
        </div>
        `
        videosContainer.append(cardDiv)
    })
}



//create displayCategoriesData 
const displayCategories = (categories) => {
    const categoryContainer = document.getElementById('categories');
    categories.forEach((item) => {
        // console.log(item.category);
        const buttonContainer = document.createElement('div');
        buttonContainer.innerHTML = `
        <button onclick=(loadCategoryVideo(${item.category_id})) class='btn'>${item.category}</button>
        `
        categoryContainer.append(buttonContainer)
    })
}

// call function
loadCategories()
loadVideos()
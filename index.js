let button=document.getElementsByTagName('button')
button=button[0]


button.addEventListener('click', async ()=>{
    console.log('clicked')
    let url=document.getElementById('urlIn')

    //check cache

    // let cache=window.localStorage.getItem(url)

if(!cache)    
    //on hit, display that


    //on miss, api call and store 

    let res=fetch('https://rickandmortyapi.com/api/character').then(res=>{
        return res.json()
    }).then(data=>{

//add request url to cache with object of results 



        console.log(data.results, 'data')
        document.getElementById('noCache').innerText=data.results[0].name

        window.localStorage.setItem(url, JSON.stringify(data.results))
    })



    

})
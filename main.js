function search(){

      const searchName = document.getElementById('songName').value;
      const url = `https://api.lyrics.ovh/suggest/${searchName}`;
      let song= ""; 
      let fancy = "";
      fetch(url)
      .then(res => res.json())
      .then(data =>{
          //console.log(data);
        
          for(let i=0; i<10; i++){

           const title = data.data[i].title;
           const albumTilte =  data.data[i].album.title;
           const artistName = data.data[i].artist.name;
           const songList =`<p class="author-lead"><strong >${title}</strong> Album by <span>${artistName}</span> <button onclick="getLyrics('${title}','${artistName}')" class="btn btn-success">Get Lyrics</button></p>`;
           song += songList;

           const fancyList = ` <div class="single-result row align-items-center my-3 p-3">
           <div  class="col-md-9">
               <h3 class="lyrics-name">${title} </h3>
               <p class="author lead">Form <b style= "font-size: 25px;"> ${albumTilte} </b> Album by <span>${artistName}</span></p>
           </div>
           <div class="col-md-3 text-md-right text-center">
               <button onclick="getLyrics('${title}','${artistName}')" class="btn btn-success">Get Lyrics</button>
           </div>
       </div>`;
       fancy += fancyList;
            
            
          
          }
         document.getElementById("searchResults").innerHTML = song;
         document.getElementById("fancyResults").innerHTML = fancy;
         document.getElementById("searchResults").style.display = 'block';
         document.getElementById("fancyResults").style.display = 'block';
        
      })

    }


    function getLyrics( title, artist){


        const url = `https://api.lyrics.ovh/v1/${artist}/${title}`;
        console.log(url);

        fetch(url)
        .then(res => res.json())
        .then(data =>{
           // console.log(data);
            
            document.getElementById("lyricsTitle").innerText = artist + " - " + title;
            
            document.getElementById("single-lyrics").style.display = 'block';

            if(data.lyrics){
                document.getElementById("fullLyric").innerText = data.lyrics;
              
               
                }
                else{
                    document.getElementById("fullLyric").innerText = data.error;
                   
                }
        
       

                
        })
            

           
        }

    


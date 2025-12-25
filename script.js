
        let list = document.getElementById("boton");
        let X = 
        [
        
            "Dream big, work hard.",
             "Keep pushing forward."
        ];
        let resula = document.getElementById("result");
        list.addEventListener("click",() => 
        {
          let randomNum = Math.floor(Math.random() * X.length ) ;
          if(randomNum === X.length )
          {
            randomNum = randomNum - 1 ;
          }
          resula.innerHTML = `>>>${X[ randomNum ]}<<<` ;
        });
    
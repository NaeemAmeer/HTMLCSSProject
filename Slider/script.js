  const slides=document.querySelectorAll(".slide");
   var counter=0;
   console.log(slides);
        
   slides.forEach(
  (slide,index) => {
  slide.style.left=`${index *  100}%` 
    });    
    
    const ShowPre=()=>{
        

        if (counter == 0) {
            counter = slides.length - 1;
            showimage();
        } else {
            counter--;
            showimage();
        }

    }
    const ShowNext=()=>{

        if (counter == slides.length - 1) {
            counter = 0;
            showimage();
        } else {
            counter++;
            showimage();
        }
    }

   const showimage=()=>{
    slides.forEach(
        (slide)=>{
         slide.style.transform=`translateX(-${counter * 100}%)`;
        }
    )
   } 

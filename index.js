var numberOfDrumButtons=document.querySelectorAll(".drum").length;
for(var i=0;i<numberOfDrumButtons;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function ()
    {
       var bid=this.innerHTML;
       switch(bid)
       {
        case "w":
           var first=new Audio("sounds/first.mp3");
           first.play();
           break;
            
           

        case "a":
            var second=new Audio("sounds/second.mp3");
            second.play();
            break;

        case "s":
            var third=new Audio("sounds/third.mp3");
            third.play();
            break;

        case "d":
            var fourth=new Audio("sounds/fourth.mp3");
            fourth.play();
            break;

        case "j":
            var fifth=new Audio("sounds/fifth.mp3");
            fifth.play();
            break;

         case "k":
            var sixth=new Audio("sounds/sixth.mp3");
            sixth.play();
            break;

        case "l":
            var seventh=new Audio("sounds/seventh.mp3");
            seventh.play();
            break;

        default:console.log(bid);
       }
    });
}


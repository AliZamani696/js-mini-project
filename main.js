
  const colortarget = document.getElementById("colortarget");
                const colorinfo = document.getElementById("colorinfo");
                const counterelement = document.getElementById("counter");
                const counterinfo = document.getElementById("counterinfo");
                const eventlog = document.getElementById("eventlog");

                let entercount = 0;

                function getRandomColor (){
                        const letters = "0123456789ABCDEF";
                        let color = "#";
                        for (let i =0;i<6;i++){
                                color += letters[Math.floor(Math.random()*16)]
                        };
                        return color;
                };
                function addLogEntry(meesage){
                        const logEntry = document.createElement("div");
                        logEntry.className = "log-entry";
                        logEntry.textContent = meesage;
                        eventlog.prepend(logEntry);

                        if (eventlog.children.length > 5){
                                eventlog.removeChild(eventlog.lastChild);
                        };
                };

                colortarget.onmouseenter = function(){
                        const newColor = getRandomColor();
                        this.style.backgroundColor = newColor;
                        this.textContent = `Color:${newColor}`;

                        colorinfo.textContent = `mouse enterd at : ${new Date().toLocaleTimeString()}`;

                        entercount++;
                        counterelement.textContent = entercount;

                        counterinfo.textContent= `last enter at : ${new Date().toLocaleTimeString()}`;

                        addLogEntry(`color box mouseenter at : ${new Date().toLocaleTimeString()}`);

                        document.querySelector(".demo-area").addEventListener("mouseenter", function (event){
                                if(event.target.classList.contains("demo-box")){
                                        event.target.style.boxShadow = "0 10px 20px rgba(0,0,0,0.15)";
                                        addLogEntry(`Demo box entred at : ${new Date().toLocaleTimeString()}`);
                                };
                        });

                        document.querySelector(".demo-area").addEventListener("mouseleave",function(event){
                                if (event.target.classList.contains("demo-box")){
                                        event.target.style.boxShadow = "0 5px 19px rgba(0,0,0,0.1)";
                                };
                        });
                }

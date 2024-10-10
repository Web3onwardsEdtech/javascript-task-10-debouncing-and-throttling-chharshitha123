
let debouncedfunc=debounce(()=>{
    console.log("hello");
},1000);
debouncedfunc();
debouncedfunc();
debouncedfunc();
function debounce(fun,delay){
    let timeoutid;
    return function(...args){
        if(timeoutid)
            clearTimeout(timeoutid);
        timeoutid=setTimeout(
            ()=>{
                fun.apply(this,args)
            },delay
        );
    };

}

function throttle(funk,timee){
    let lasttime=0;
    return function(...args){
        const now=Date.now();
        if(now-lasttime>=timee){
            lasttime=now;
            funk.apply(this,args);

    }
};
}
const throttledScroll = throttle(() => console.log("Scroll event!"), 2000);


throttledScroll();
throttledScroll();
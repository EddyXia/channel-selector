console.log('Remove this console log and get started!')

//create a list of data to extract from
const data = [
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/PkADl0HubMY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe><div class="title">Title: Award Winning Animation With Only 20 Lines Of CSS?</div>',
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/Jt3A2lNN2aE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe><div class="title">Title: THIS Is Addictingly Good Website Interactivity</div>',
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/nG2IyH43xMU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe><div class="title">Title: Have I found the perfect website?</div>',
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/YJg02ivYzSs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe><div class="title">Title: HYPER-REALITY</div>',
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/8McISUEXb9g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe><div class="title">Title: Thug - Eve MV</div>',
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/GVT3WUa-48Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe><div class="title">Title: ANIME ROCK, PAPER, SCISSORS</div>',
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/fjhS6bwuxVc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe><div class="title">Title: Monkey longest sentence</div>',
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/JcniyQYFU6M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe><div class="title">Title: Heinz Automato 2</div>',
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/sHzdsFiBbFc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe><div class="title">Title: Spiders On Drugs</div>']
//create buttons

//function to extract data
function channelOne(){
    const random1to3 = Math.ceil(Math.random()*3)

    let channel1 = data.slice(random1to3-1, random1to3)

    document.getElementById('channel1').innerHTML = channel1
    console.log(random1to3)
}

function channelTwo(){
    const random4to6 = Math.ceil(Math.random()*3+3)
    
    let channel2 = data.slice(random4to6-1, random4to6)
    
    document.getElementById('channel1').innerHTML = channel2
    console.log(random4to6)
}

function channelThree(){
    const random7to9 = Math.ceil(Math.random()*3+6)
    
    let channel3 = data.slice(random7to9-1, random7to9)
    
    document.getElementById('channel1').innerHTML = channel3
    console.log(random7to9)
}


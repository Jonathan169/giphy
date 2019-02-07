const imgt=[$("#gif1"),$("#gif2"),$("#gif3"),$("#gif4"),$("#gif5"),$("#gif6"),$("#gif7"),$("#gif8"),$("#gif9"),$("#gif10")]
// const imgt=[$("#gif1"),$("#gif2"),$("#gif3"),$("#gif4"),$("#gif5"),$("#gif6"),$("#gif7"),$("#gif8"),$("#gif9","gif10"]
var searches;
var queryURL="https://api.giphy.com/v1/gifs/search?api_key=50NV38zVYz0INN8Yd54IQE5TNZJY0jr1&q="+searches+"&limit=10&offset=0&rating=PG-13&lang=en"

const link1={
    selector:$("#l1"),
    value:"lightsaber",
}
const link2={
    selector:$("#l2"),
    value:"jedi",
}
const link3={
    selector:$("#l3"),
    value:"strom trooper",
}
const linkss=[link1,link2,link3]
var snum=0;

$("#l1").on("click",function(){
    event.preventDefault();

    var searches;
    searches=link1.value;
    var queryURL="https://api.giphy.com/v1/gifs/search?api_key=50NV38zVYz0INN8Yd54IQE5TNZJY0jr1&q=" + searches + "&limit=10&offset=0&rating=PG-13&lang=en"
    $.ajax({
        url:queryURL,
        method:"GET"
    }).then(function(response){
        
        var results=response.data;
    
        for(let i=0;i<10;i++){
            imgt[i].attr("src",results[i].images.fixed_height_still.url)
            imgt[i].attr("data-animate",results[i].images.fixed_height.url)
            imgt[i].attr("data-still",results[i].images.fixed_height_still.url)
            var rating=results[i].rating
            $("#rating"+i+"").text(rating)
        }    
    })
    console.log("hi")
})

$("#l2").on("click",function(){
    event.preventDefault();

    var searches;
    searches=link2.value;
    var queryURL="https://api.giphy.com/v1/gifs/search?api_key=50NV38zVYz0INN8Yd54IQE5TNZJY0jr1&q=" + searches + "&limit=10&offset=0&rating=PG-13&lang=en"
    $.ajax({
        url:queryURL,
        method:"GET"
    }).then(function(response){
        
        var results=response.data;
    
        for(let i=0;i<10;i++){
            imgt[i].attr("src",results[i].images.fixed_height_still.url)
            imgt[i].attr("data-animate",results[i].images.fixed_height.url)
            imgt[i].attr("data-still",results[i].images.fixed_height_still.url)
            var rating=results[i].rating
            $("#rating"+i+"").text(rating)
        }   
    })
    console.log("hi")
})
$("#l3").on("click",function(){
    event.preventDefault();

    var searches;
    searches=link3.value;
    var queryURL="https://api.giphy.com/v1/gifs/search?api_key=50NV38zVYz0INN8Yd54IQE5TNZJY0jr1&q=" + searches + "&limit=10&offset=0&rating=PG-13&lang=en"
    $.ajax({
        url:queryURL,
        method:"GET"
    }).then(function(response){
        
        var results=response.data;
        for(let i=0;i<10;i++){
            imgt[i].attr("src",results[i].images.fixed_height_still.url)
            imgt[i].attr("data-animate",results[i].images.fixed_height.url)
            imgt[i].attr("data-still",results[i].images.fixed_height_still.url)
            var rating=results[i].rating
            $("#rating"+i+"").text(rating)
        }    
    })
    console.log("hi")
})

$("#searchb").on("click",function(){
    event.preventDefault();

    var searches;
    searches=$("#inputb").val().trim();
    if(snum===0||snum===1||snum===2){
        linkss[snum].value=searches.toUpperCase();
        linkss[snum].selector.html(linkss[snum].value);
        snum++;
        console.log(snum)
    }
    else{
        snum=0;
        linkss[snum].value=searches.toUpperCase();
        linkss[snum].selector.html(linkss[snum].value)
        console.log(snum)
    }
    $("#inputb").val("")
var queryURL="https://api.giphy.com/v1/gifs/search?api_key=50NV38zVYz0INN8Yd54IQE5TNZJY0jr1&q="+searches+"&limit=10&offset=0&rating=PG-13&lang=en"

$.ajax({
    url:queryURL,
    method:"GET"
}).then(function(response){
    
    var results=response.data;

    for(let i=0;i<10;i++){
        imgt[i].attr("src",results[i].images.fixed_height_still.url)
        imgt[i].attr("data-animate",results[i].images.fixed_height.url)
        imgt[i].attr("data-still",results[i].images.fixed_height_still.url)
        var rating=results[i].rating
        $("#rating"+i+"").text(rating)
    }

})
    
})

$(".gifss").on("click", function(){
    var animate= $(this).attr("data-animate");
    var state= $(this).attr("data-state")
    var still= $(this).attr("data-still")
    if(state==="still"){
    $(this).attr("src",animate);
    $(this).attr("data-state","animate");
    } else if(state==="animate"){
    $(this).attr("src",still);
    $(this).attr("data-state","still");
    }
})




$.ajax({
    url:queryURL,
    method:"GET"
}).then(function(response){
    
    var results=response.data;

    for(let i=0;i<results.length;i++){
        imgt[i].attr("src",results[i].images.fixed_height_still.url)
        imgt[i].attr("data-animate",results[i].images.fixed_height.url)
        imgt[i].attr("data-still",results[i].images.fixed_height_still.url)
        var rating=results[i].rating
        var rr=$("<p>").text(rating)
        var idg="rating"+i;
        rr.attr("id", idg)
        rr.attr("class","rating")
        imgt[i].parent().prepend(rr) 

    }

})
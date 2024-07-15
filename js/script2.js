$('#btn').on('click',function(){

    const targetArtistName = $("#keyword").val();
    const requestUrl=`https://itunes.apple.com/search?lang=ja_JP&entry=music&media=music&country=JP&limit=50&term=${targetArtistName}`;


    $.getJSON(requestUrl,function(data){
        console.log(data);

        const previewUrl= data.results[0].previewUrl;

    $("#audio").attr("src",previewUrl);
    $("#audio")[0].play();

    });
});
    



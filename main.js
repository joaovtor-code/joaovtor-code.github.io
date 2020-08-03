fetch("https://api.edmodo.com/stream.replies_threaded_json?request_origin=react-web-app&page=1&per_page=5&item_types=note,poll,assignment,quiz,app_message,video,template_message,activity_studio&template_types=basic,banner,promo&user_conversations=false&exclude_creator_id=false&context=home&num_replies=1", {
    "credentials": "omit",
    "headers": {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; rv:79.0) Gecko/20100101 Firefox/79.0",
        "Accept": "*/*",
        "Accept-Language": "en-US,en;q=0.5"
    },
    "referrer": "https://new.edmodo.com/home",
    "method": "OPTIONS",
    "mode": "cors"
}).then((response)=>{
    document.getElementById('lpost').textContent = response.json();
})
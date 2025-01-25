const fs = require("fs");
const enter = {
    engine: "https://bgithub.xyz/5jzztsqs/engine/raw/refs/heads/main/engine.apk",
    name: "影视通",
    titles: [
        {
            name: "电影",
            type: "movie"
        },
        {
            name: "剧集",
            type: "tv"
        },
        {
            name: "综艺",
            type: "show"
        },
        {
            name: "动漫",
            type: "anime"
        },
        {
            name: "短剧",
            type: "short"
        }
    ]
}
fs.writeFile("index.json", JSON.stringify(enter), error => {
    if (error)
        console.log(err);
    else
        console.log("success");
});
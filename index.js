const fs = require("fs");
const enter = {
    engine: "http://192.168.0.100/app-release.apk",
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
        }
    ]
}
fs.writeFile("index.json", JSON.stringify(enter), error => {
    if (error)
        console.log(err);
    else
        console.log("success");
});
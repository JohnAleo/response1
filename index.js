const http=require("http");
const server= http.createServer((req, res) => {
if (req.url === "/"){
    res.end('<h1>Bismillah 1th response</h1>');
} else if (req.url==="/students"){
    res.end('<h1>Janet</h1> <br> <h1>Michael</h1> <br> <h1>Julia</h1> <br> <h1>Nick</h1>')
} else {
    res.end('<h1>404 ERROR</h1>')
}
})

const PORT= process.env.PORT || 5001;
server.listen(PORT, () => {
console.log("Server running on port", PORT)
});

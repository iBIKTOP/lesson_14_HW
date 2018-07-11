var http = require("http");
var fs = require("fs");
var server = http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
		if(req.url==='/contact'){
			var data = fs.readFileSync('./index.html', "utf8");
			res.write("<h5 style='color:red;'>Файл прочитан и показан на экране</h5>");
			res.write(data);
		}
		else if(req.url==='/about'){
			res.write("Данные о запросе были отправлены в консоль...");
			console.log(req);
		}
		else if(req.url==='/stop'){
			res.write("Сервер на localhost:3000 остановлен");
	        server.close();
		}
		else{
			res.write("Привет мир!!!");
		}
	res.end();
	
}).listen(3000, function () {
	console.log("server at localhost:3000");
});

//использовать process!!!!!!!!!!!!!!!!!

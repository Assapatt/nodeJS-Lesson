var base64Str = "emhhbmdzYW46MTIzNDU2";
var buf = Buffer.from(base64Str, "base64");
var utf8Str = buf.toString("utf-8");
console.log(utf8Str);
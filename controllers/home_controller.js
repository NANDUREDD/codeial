module.exports.home=function(req,res)
{
    return res.end('<h1> express is setup for codeial</h1>');
}
module.exports.contact=function(req,res)
{
    return res.end("<h1>contact page</h1>");
}
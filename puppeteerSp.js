﻿/**
 * Created by zyj on 2018/1/19.
 */
var fs = require('fs');
var webpage = require('webpage');
var page = webpage.create();
phantom.outputEncoding="gbk";
page.open('https://www.tianyancha.com/search?key=%E5%A4%A7%E8%BF%9E%E6%B1%87%E8%9E%8D&checkFrom=searchBox', function (status) {
    var content = page.evaluate(function () {
        var cont = '';
        var listComputer = document.querySelectorAll('.f18');
        for(var j=0;j<listComputer.length;j++){
            var computer = listComputer[j].innerText;
            cont += computer+'\n';
        }
        return cont;
    })

    try {
        fs.write('./movie.html',content,'a');
    }catch (e){
        console.log(e);
    }
    page.close();//关闭网页
    phantom.exit();//退出phantomjs命令行
});

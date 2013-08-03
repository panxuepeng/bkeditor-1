/*! Bkeditor - v0.9.0 - 2013-08-03
* https://github.com/daixianfeng/bkeditor
* Copyright (c) 2013 daixianfeng;*/
(function(e,t){var n,i,r=!1;e.addPlugin({id:"shortcutmenu",totext:function(){var i=t(n).text();e.$(n).replaceWith(i)},unlink:function(){var i=t(n).html();return e.$(n).replaceWith(i),!0},remove:function(){n.parentNode.removeChild(n)},editRefer:function(){return!0},removeImage:function(){var e=t(n);e.closest("div.img").length?e=e.closest("div.img"):e.closest("a").length&&(e=e.closest("a")),confirm("确定删除这个图片？")&&e.remove()},alignImage:function(e){a.update(n,e,"align")},resizeImage:function(e){a.update(n,e,"resize")},moveImage:function(){r=!0},descImage:function(){var e=t(n).closest("div.img"),i="";e.length&&(i=e.attr("class"),i.indexOf("img_l")>-1?i="left":i.indexOf("img_c")>-1?i="center":i.indexOf("img_r")>-1&&(i="right")),a.update(n,i,"desc")},contextmenu:function(){return r?(r=!1,!1):!0},select:function(){e.curEditor.selectNode(n)}}),t(document).delegate(".bke-shortcutmenu","click",function(n){var i=t(n.target).closest("[cmd]");if(i.closest(".bke-disabled").length)return!0;if(i.length){var r=i.attr("cmd"),o=i.attr("param"),a=i.attr("args");return e.command(r,o,a),t(this).css({top:"-2000px"}),!1}}),e.addEvent({name:"shortcutmenu-mousedown",type:["mousedown"],area:"editArea",fn:function(t){var o=e.$(t.target);r||(i=null,n=null,o.is("img")&&o.closest("div.img").length&&(o=o.closest("div.img")),o.is("div.img,img,h2,h3,a,sup.refer,pre")&&(i=o.offset(),i.top+=o.outerHeight()+2,n=t.target))}}),e.addEvent({name:"shortcutmenu-mouseup",type:["mouseup"],area:"editArea",fn:function(s){var l=e.$(s.target);if(3!==s.event.which)if(r)if(l.is("div.img,img,h2,h3,a,sup.refer"))e.errorMessage("此处不适合放置图片，请重新选择");else{var d=e.curEditor.getRange();t(n).closest("div.img").length&&(n=t(n).closest("div.img")[0]),d.insertNode(n),r=!1}else{l=t(".bke-shortcutmenu");var c=t(n),u=null;i?(u=n.tagName.toLowerCase(),l.removeClass("bke-shortcutmenu-img bke-shortcutmenu-sup bke-shortcutmenu-other"),c.is("img")?(l.addClass("bke-shortcutmenu-img"),setTimeout(function(){a.callback(n,l)},0)):c.is("sup")?l.addClass("bke-shortcutmenu-sup"):c.is("pre")?l.addClass("bke-shortcutmenu-pre"):l.addClass("bke-shortcutmenu-other"),l.css(i),l.html(o[u]())):l.css({top:"-2000px"})}}}),e.addEvent({name:"shortcutmenu-keyup",type:["keyup"],area:"editArea",fn:function(t){if(27===t.event.keyCode){var n="";n||e.plugin("shortcutmenu").totext()}}});var o={h2:function(){var e=[];return e.push('<a cmd="shortcutmenu" param="totext">取消目录(Esc)</a>'),e.push('<span class="bke-vline">|</span>'),e.push('<a  cmd="shortcutmenu" param="remove">删除目录</a>'),e.join("")},h3:function(){return this.h2()},a:function(){var e,i=[],r=t(n),o=r.text(),a=r.attr("href");return i.push('<a cmd="shortcutmenu" param="unlink" title="将链接转为纯文本">取消链接(Esc)</a>'),a&&(e=/^http:\/\/www\.(hudong|baike)\.com\/wiki\//.test(a)||r.hasClass("baikelink")||r.hasClass("innerlink")?"http://www.baike.com/wiki/"+encodeURI(o):a,i.push('<span class="bke-vline">|</span>'),i.push(' <a href="'+e+'" title="'+e+'" target="_blank">打开链接</a>')),i.join("")},sup:function(){return'<a cmd="shortcutmenu" param="editRefer">编辑</a><span class="bke-vline">|</span><a cmd="shortcutmenu" param="remove">删除</a>'},pre:function(){return'<a cmd="shortcutmenu" param="select">选中</a><span class="bke-vline">|</span><a cmd="shortcutmenu" param="remove">删除</a>'},img:function(){var e=[],t=/a\d\.att\.(hudong|baike)\.com/i.test(n.src);return e.push('<a cmd="shortcutmenu" param="descImage">添加描述</a>'),e.push('<span class="bke-vline">|</span>'),e.push('<a cmd="shortcutmenu" param="moveImage" title="点击我，然后将光标移到到新的位置，左键插入右键取消">移动图片</a>'),e.push('<a cmd="shortcutmenu" param="removeImage" style="float:right;color:red;">删除</a>'),e.push('<div class="bke-dottedline"></div>'),e.push("排版："),e.push('<a cmd="shortcutmenu" param="alignImage" args="left">居左</a> '),e.push('<a cmd="shortcutmenu" param="alignImage" args="center">居中</a> '),e.push('<a cmd="shortcutmenu" param="alignImage" args="right">居右</a>'),e.push('<span class="bke-vline">|</span>'),t?(e.push('<a cmd="shortcutmenu" param="resizeImage" args="_950">大图</a> '),e.push('<a cmd="shortcutmenu" param="resizeImage" args="_s">中图</a> '),e.push('<a cmd="shortcutmenu" param="resizeImage" args="_140">小图</a>')):e.push("大图 中图 小图"),e.join("")},table:function(){return'<a cmd="shortcutmenu" param="editRefer">表格全选</a><span class="bke-vline">|</span><a cmd="shortcutmenu" param="remove">行列拖拽</a>'}},a={update:function(n,i,r){function o(t){var n=(s.attr("src"),d[i]?d[i]:"img_c");"number"==typeof t&&(l=t),l>a&&(l=a,s.width=l),s.closest("a").length&&(s=s.closest("a"));var o=s.closest("div.img");o.length?"resize"==r?o.width(l).find("img").width(l):o.removeClass("img_l img_c img_r").addClass(n):(o=e.$('<div class="img '+n+'" style="width:'+l+'px"></div>').append(s.clone()),s.replaceWith(o)),"desc"==r?(c=s.attr("title")?s.attr("title"):s.attr("alt")?s.attr("alt"):"图片描述",o.find("strong").length?o.find("strong").text(c):o.append("<strong>"+c+"</strong>")):o.find("strong").removeAttr("style")}var a=600,s=t(n),l=s.width(),d={left:"img_l",center:"img_c",right:"img_r"},c="",u="";if("resize"==r&&/a\d\.att\.(hudong|baike)\.com/i.test(s.attr("src"))){u=s.attr("src").replace(/_140|_s|_950/i,i),s.attr("src",u);var m=new Image;m.onload=function(){s.attr("width",m.width),o(m.width)},m.src=u}else o()},callback:function(e,n){var i=t(e).closest("div.img"),r=null,o={left:"img_l",center:"img_c",right:"img_r"},a=["_950","_s","_140"],s={color:"#666666",cursor:"default","text-decoration":"none"};if(i.length&&i.attr("class").indexOf("img")>-1){var l=i.attr("class");for(var d in o){var c=o[d];if(l.indexOf(c)>-1){r=d;break}}if(r){var u=n.find("[args="+r+"]");u.css(s).removeAttr("cmd")}var m=i.find("strong");m.length>0&&t.trim(m.text())&&(m=n.find("[param=descImage]"),m.css(s).removeAttr("cmd").attr("title","已存在图片描述，直接修改即可"))}if(/a\d\.att\.(hudong|baike)\.com/i.test(e.src))for(var f=e.src,h=0;a.length>h;h++){var c=a[h];if(f.indexOf(c)>-1){var p=n.find("[args="+c+"]");p.css(s).removeAttr("cmd");break}}}}})(jQuery.jQEditor,jQuery);
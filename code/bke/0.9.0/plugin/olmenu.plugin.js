/*! Bkeditor - v0.9.0 - 2013-08-03
* https://github.com/daixianfeng/bkeditor
* Copyright (c) 2013 daixianfeng;*/
(function(e){e.addPlugin({id:"olmenu",type:"panel",isEnable:!0,fill:function(t){var n="",i=[{name:"1.2.3...",cmd:"insertorderedlist",param:"decimal"},{name:"a,b,c...",cmd:"insertorderedlist",param:"lower-alpha"},{name:"A,B,C...",cmd:"insertorderedlist",param:"upper-alpha"},{name:"i,ii,iii...",cmd:"insertorderedlist",param:"lower-roman"},{name:"I,II,III...",cmd:"insertorderedlist",param:"upper-roman"}];n=e.Menu.create(i),e.fillPanel("insertorderedlistmenu",n,t)}})})(window.jQuery.jQEditor);
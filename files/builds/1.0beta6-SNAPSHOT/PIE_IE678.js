(function(L,G){var h=L.PIE||(L.PIE={});h.Ba=function(a){var b,d,e,c,g=arguments;b=1;for(d=g.length;b<d;b++){c=g[b];for(e in c)if(c.hasOwnProperty(e))a[e]=c[e]}return a};h.Ba(h,{L:"-pie-",jb:"Pie",La:"pie_",nc:{TD:1,TH:1},Rb:{TABLE:1,THEAD:1,TBODY:1,TFOOT:1,TR:1,INPUT:1,TEXTAREA:1,SELECT:1,OPTION:1,IMG:1,HR:1},Vb:{A:1,INPUT:1,TEXTAREA:1,SELECT:1,BUTTON:1},xd:{submit:1,button:1,reset:1},fd:function(){}});try{G.execCommand("BackgroundImageCache",false,true)}catch(Y){}(function(){for(var a=4,b=G.createElement("div"),
d=b.getElementsByTagName("i");b.innerHTML="<!--[if gt IE "+ ++a+"]><i></i><![endif]--\>",d[0];);h.V=a;if(a===6)h.L=h.L.replace(/^-/,"");h.ka=G.documentMode||h.V;b.innerHTML='<v:shape adj="1"/>';a=b.firstChild;a.style.behavior="url(#default#VML)";h.mc=typeof a.adj==="object"})();(function(){var a=0,b={};h.F={Q:function(d){return d&&d.uniqueID||d._pieId||(d._pieId="_"+a++)},tc:function(d,e,c){var g=b[d],i,j;if(g)Object.prototype.toString.call(g)==="[object Array]"?g.push([e,c]):e.call(c,g);else{j=b[d]=
[[e,c]];i=new Image;i.onload=function(){g=b[d]={f:i.width,d:i.height};for(var f=0,k=j.length;f<k;f++)j[f][0].call(j[f][1],g);i.onload=null};i.src=d}}}})();h.gb={od:function(a,b,d,e){function c(){k=i>=90&&i<270?b:0;n=i<180?d:0;l=b-k;m=d-n}function g(){for(;i<0;)i+=360;i%=360}var i=e.ua;e=e.ub;var j,f,k,n,l,m,r,o;if(e){e=e.coords(a,b,d);j=e.x;f=e.y}if(i){i=i.Zc();g();c();if(!e){j=k;f=n}e=h.gb.ic(j,f,i,l,m);a=e[0];e=e[1]}else if(e){a=b-j;e=d-f}else{j=f=a=0;e=d}r=a-j;o=e-f;if(i===void 0){i=!r?o<0?90:
270:!o?r<0?180:0:-Math.atan2(o,r)/Math.PI*180;g();c()}return{ua:i,Sd:j,Td:f,he:a,ie:e,Qd:k,Rd:n,gd:l,hd:m,$c:r,ad:o,zd:h.gb.Sb(j,f,a,e)}},ic:function(a,b,d,e,c){if(d===0||d===180)return[e,b];else if(d===90||d===270)return[a,c];else{d=Math.tan(-d*Math.PI/180);a=d*a-b;b=-1/d;e=b*e-c;c=b-d;return[(e-a)/c,(d*e-b*a)/c]}},Sb:function(a,b,d,e){a=d-a;b=e-b;return Math.abs(a===0?b:b===0?a:Math.sqrt(a*a+b*b))}};h.ba=function(){this.zb=[];this.bc={}};h.ba.prototype={X:function(a){var b=h.F.Q(a),d=this.bc,e=
this.zb;if(!(b in d)){d[b]=e.length;e.push(a)}},Ha:function(a){a=h.F.Q(a);var b=this.bc;if(a&&a in b){delete this.zb[b[a]];delete b[a]}},za:function(){for(var a=this.zb,b=a.length;b--;)a[b]&&a[b]()}};h.Na=new h.ba;h.Na.Id=function(){var a=this;if(!a.Jd){setInterval(function(){a.za()},250);a.Jd=1}};(function(){function a(){h.K.za();L.detachEvent("onunload",a);L.PIE=null}h.K=new h.ba;L.attachEvent("onunload",a);h.K.va=function(b,d,e){b.attachEvent(d,e);this.X(function(){b.detachEvent(d,e)})}})();h.Pa=
new h.ba;h.K.va(L,"onresize",function(){h.Pa.za()});(function(){function a(){h.ib.za()}h.ib=new h.ba;h.K.va(L,"onscroll",a);h.Pa.X(a)})();(function(){function a(){d=h.fb.bd()}function b(){if(d){for(var e=0,c=d.length;e<c;e++)h.attach(d[e]);d=0}}var d;h.K.va(L,"onbeforeprint",a);h.K.va(L,"onafterprint",b)})();h.hb=new h.ba;h.K.va(G,"onmouseup",function(){h.hb.za()});h.Jb=function(){function a(f){this.$=f}var b=G.createElement("length-calc"),d=G.body,e=b.style,c={},g=["mm","cm","in","pt","pc"],i=g.length,
j={};e.position="absolute";e.top=e.left="-9999px";for(d.appendChild(b);i--;){e.width="100"+g[i];c[g[i]]=b.offsetWidth/100}d.removeChild(b);e.width="1em";a.prototype={Ab:/(px|em|ex|mm|cm|in|pt|pc|%)$/,Yb:function(){var f=this.Bd;if(f===void 0)f=this.Bd=parseFloat(this.$);return f},tb:function(){var f=this.Xd;if(!f)f=this.Xd=(f=this.$.match(this.Ab))&&f[0]||"px";return f},a:function(f,k){var n=this.Yb(),l=this.tb();switch(l){case "px":return n;case "%":return n*(typeof k==="function"?k():k)/100;case "em":return n*
this.rb(f);case "ex":return n*this.rb(f)/2;default:return n*c[l]}},rb:function(f){var k=f.currentStyle.fontSize,n,l;if(k.indexOf("px")>0)return parseFloat(k);else if(f.tagName in h.Rb){l=this;n=f.parentNode;return h.j(k).a(n,function(){return l.rb(n)})}else{f.appendChild(b);k=b.offsetWidth;b.parentNode===f&&f.removeChild(b);return k}}};a.kc=function(f){return f/c.pt};h.j=function(f){return j[f]||(j[f]=new a(f))};return a}();h.Ja=function(){function a(c){this.Z=c}var b=h.j("50%"),d={top:1,center:1,
bottom:1},e={left:1,center:1,right:1};a.prototype={sd:function(){if(!this.Ob){var c=this.Z,g=c.length,i=h.p,j=i.ta,f=h.j("0");j=j.qa;f=["left",f,"top",f];if(g===1){c.push(new i.kb(j,"center"));g++}if(g===2){j&(c[0].i|c[1].i)&&c[0].c in d&&c[1].c in e&&c.push(c.shift());if(c[0].i&j)if(c[0].c==="center")f[1]=b;else f[0]=c[0].c;else if(c[0].S())f[1]=h.j(c[0].c);if(c[1].i&j)if(c[1].c==="center")f[3]=b;else f[2]=c[1].c;else if(c[1].S())f[3]=h.j(c[1].c)}this.Ob=f}return this.Ob},coords:function(c,g,i){var j=
this.sd(),f=j[1].a(c,g);c=j[3].a(c,i);return{x:j[0]==="right"?g-f:f,y:j[2]==="bottom"?i-c:c}}};return a}();h.Ka=function(){function a(b,d){this.f=b;this.d=d}a.prototype={a:function(b,d,e,c,g){var i=this.f,j=this.d,f=d/e;c=c/g;if(i==="contain"){i=c>f?d:e*c;j=c>f?d/c:e}else if(i==="cover"){i=c<f?d:e*c;j=c<f?d/c:e}else if(i==="auto"){j=j==="auto"?g:j.a(b,e);i=j*c}else{i=i.a(b,d);j=j==="auto"?i/c:j.a(b,e)}return{f:i,d:j}}};a.Cc=new a("auto","auto");return a}();h.vc=function(){function a(b){this.$=b}a.prototype=
{Ab:/[a-z]+$/i,tb:function(){return this.Oc||(this.Oc=this.$.match(this.Ab)[0].toLowerCase())},Zc:function(){var b=this.Jc,d;if(b===undefined){b=this.tb();d=parseFloat(this.$,10);b=this.Jc=b==="deg"?d:b==="rad"?d/Math.PI*180:b==="grad"?d/400*360:b==="turn"?d*360:0}return b}};return a}();h.Bc=function(){function a(d){this.$=d}var b={};a.Hd=/\s*rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d+|\d*\.\d+)\s*\)\s*/;a.yb={aliceblue:"F0F8FF",antiquewhite:"FAEBD7",aqua:"0FF",aquamarine:"7FFFD4",
azure:"F0FFFF",beige:"F5F5DC",bisque:"FFE4C4",black:"000",blanchedalmond:"FFEBCD",blue:"00F",blueviolet:"8A2BE2",brown:"A52A2A",burlywood:"DEB887",cadetblue:"5F9EA0",chartreuse:"7FFF00",chocolate:"D2691E",coral:"FF7F50",cornflowerblue:"6495ED",cornsilk:"FFF8DC",crimson:"DC143C",cyan:"0FF",darkblue:"00008B",darkcyan:"008B8B",darkgoldenrod:"B8860B",darkgray:"A9A9A9",darkgreen:"006400",darkkhaki:"BDB76B",darkmagenta:"8B008B",darkolivegreen:"556B2F",darkorange:"FF8C00",darkorchid:"9932CC",darkred:"8B0000",
darksalmon:"E9967A",darkseagreen:"8FBC8F",darkslateblue:"483D8B",darkslategray:"2F4F4F",darkturquoise:"00CED1",darkviolet:"9400D3",deeppink:"FF1493",deepskyblue:"00BFFF",dimgray:"696969",dodgerblue:"1E90FF",firebrick:"B22222",floralwhite:"FFFAF0",forestgreen:"228B22",fuchsia:"F0F",gainsboro:"DCDCDC",ghostwhite:"F8F8FF",gold:"FFD700",goldenrod:"DAA520",gray:"808080",green:"008000",greenyellow:"ADFF2F",honeydew:"F0FFF0",hotpink:"FF69B4",indianred:"CD5C5C",indigo:"4B0082",ivory:"FFFFF0",khaki:"F0E68C",
lavender:"E6E6FA",lavenderblush:"FFF0F5",lawngreen:"7CFC00",lemonchiffon:"FFFACD",lightblue:"ADD8E6",lightcoral:"F08080",lightcyan:"E0FFFF",lightgoldenrodyellow:"FAFAD2",lightgreen:"90EE90",lightgrey:"D3D3D3",lightpink:"FFB6C1",lightsalmon:"FFA07A",lightseagreen:"20B2AA",lightskyblue:"87CEFA",lightslategray:"789",lightsteelblue:"B0C4DE",lightyellow:"FFFFE0",lime:"0F0",limegreen:"32CD32",linen:"FAF0E6",magenta:"F0F",maroon:"800000",mediumauqamarine:"66CDAA",mediumblue:"0000CD",mediumorchid:"BA55D3",
mediumpurple:"9370D8",mediumseagreen:"3CB371",mediumslateblue:"7B68EE",mediumspringgreen:"00FA9A",mediumturquoise:"48D1CC",mediumvioletred:"C71585",midnightblue:"191970",mintcream:"F5FFFA",mistyrose:"FFE4E1",moccasin:"FFE4B5",navajowhite:"FFDEAD",navy:"000080",oldlace:"FDF5E6",olive:"808000",olivedrab:"688E23",orange:"FFA500",orangered:"FF4500",orchid:"DA70D6",palegoldenrod:"EEE8AA",palegreen:"98FB98",paleturquoise:"AFEEEE",palevioletred:"D87093",papayawhip:"FFEFD5",peachpuff:"FFDAB9",peru:"CD853F",
pink:"FFC0CB",plum:"DDA0DD",powderblue:"B0E0E6",purple:"800080",red:"F00",rosybrown:"BC8F8F",royalblue:"4169E1",saddlebrown:"8B4513",salmon:"FA8072",sandybrown:"F4A460",seagreen:"2E8B57",seashell:"FFF5EE",sienna:"A0522D",silver:"C0C0C0",skyblue:"87CEEB",slateblue:"6A5ACD",slategray:"708090",snow:"FFFAFA",springgreen:"00FF7F",steelblue:"4682B4",tan:"D2B48C",teal:"008080",thistle:"D8BFD8",tomato:"FF6347",turquoise:"40E0D0",violet:"EE82EE",wheat:"F5DEB3",white:"FFF",whitesmoke:"F5F5F5",yellow:"FF0",
yellowgreen:"9ACD32"};a.prototype={parse:function(){if(!this.Ta){var d=this.$,e;if(e=d.match(a.Hd)){this.Ta="rgb("+e[1]+","+e[2]+","+e[3]+")";this.Kb=parseFloat(e[4])}else{if((e=d.toLowerCase())in a.yb)d="#"+a.yb[e];this.Ta=d;this.Kb=d==="transparent"?0:1}}},fa:function(d){this.parse();return this.Ta==="currentColor"?d.currentStyle.color:this.Ta},Va:function(){this.parse();return this.Kb}};h.ia=function(d){return b[d]||(b[d]=new a(d))};return a}();h.p=function(){function a(d){this.Ya=d;this.ch=0;
this.Z=[];this.Ga=0}var b=a.ta={Ia:1,Hb:2,q:4,Dc:8,Ib:16,qa:32,J:64,ra:128,sa:256,Qa:512,Gc:1024,URL:2048};a.kb=function(d,e){this.i=d;this.c=e};a.kb.prototype={Aa:function(){return this.i&b.J||this.i&b.ra&&this.c==="0"},S:function(){return this.Aa()||this.i&b.Qa}};a.prototype={ae:/\s/,Cd:/^[\+\-]?(\d*\.)?\d+/,url:/^url\(\s*("([^"]*)"|'([^']*)'|([!#$%&*-~]*))\s*\)/i,ac:/^\-?[_a-z][\w-]*/i,Ud:/^("([^"]*)"|'([^']*)')/,ud:/^#([\da-f]{6}|[\da-f]{3})/i,Yd:{px:b.J,em:b.J,ex:b.J,mm:b.J,cm:b.J,"in":b.J,pt:b.J,
pc:b.J,deg:b.Ia,rad:b.Ia,grad:b.Ia},Tc:{rgb:1,rgba:1,hsl:1,hsla:1},next:function(d){function e(m,r){m=new a.kb(m,r);if(!d){k.Z.push(m);k.Ga++}return m}function c(){k.Ga++;return null}var g,i,j,f,k=this;if(this.Ga<this.Z.length)return this.Z[this.Ga++];for(;this.ae.test(this.Ya.charAt(this.ch));)this.ch++;if(this.ch>=this.Ya.length)return c();i=this.ch;g=this.Ya.substring(this.ch);j=g.charAt(0);switch(j){case "#":if(f=g.match(this.ud)){this.ch+=f[0].length;return e(b.q,f[0])}break;case '"':case "'":if(f=
g.match(this.Ud)){this.ch+=f[0].length;return e(b.Gc,f[2]||f[3]||"")}break;case "/":case ",":this.ch++;return e(b.sa,j);case "u":if(f=g.match(this.url)){this.ch+=f[0].length;return e(b.URL,f[2]||f[3]||f[4]||"")}}if(f=g.match(this.Cd)){j=f[0];this.ch+=j.length;if(g.charAt(j.length)==="%"){this.ch++;return e(b.Qa,j+"%")}if(f=g.substring(j.length).match(this.ac)){j+=f[0];this.ch+=f[0].length;return e(this.Yd[f[0].toLowerCase()]||b.Dc,j)}return e(b.ra,j)}if(f=g.match(this.ac)){j=f[0];this.ch+=j.length;
if(j.toLowerCase()in h.Bc.yb||j==="currentColor"||j==="transparent")return e(b.q,j);if(g.charAt(j.length)==="("){this.ch++;if(j.toLowerCase()in this.Tc){g=function(m){return m&&m.i&b.ra};f=function(m){return m&&m.i&(b.ra|b.Qa)};var n=function(m,r){return m&&m.c===r},l=function(){return k.next(1)};if((j.charAt(0)==="r"?f(l()):g(l()))&&n(l(),",")&&f(l())&&n(l(),",")&&f(l())&&(j==="rgb"||j==="hsa"||n(l(),",")&&g(l()))&&n(l(),")"))return e(b.q,this.Ya.substring(i,this.ch));return c()}return e(b.Ib,j)}return e(b.qa,
j)}this.ch++;return e(b.Hb,j)},z:function(){return this.Z[this.Ga-- -2]},all:function(){for(;this.next(););return this.Z},pa:function(d,e){for(var c=[],g,i;g=this.next();){if(d(g)){i=true;this.z();break}c.push(g)}return e&&!i?null:c}};return a}();h.Gb=function(a){this.e=a};h.Gb.prototype={U:0,Ed:function(){var a=this.lb,b;return!a||(b=this.n())&&(a.x!==b.x||a.y!==b.y)},Nd:function(){var a=this.lb,b;return!a||(b=this.n())&&(a.f!==b.f||a.d!==b.d)},Wb:function(){var a=this.e,b=a.getBoundingClientRect(),
d=h.ka===9;return{x:b.left,y:b.top,f:d?a.offsetWidth:b.right-b.left,d:d?a.offsetHeight:b.bottom-b.top}},n:function(){return this.U?this.Ua||(this.Ua=this.Wb()):this.Wb()},td:function(){return!!this.lb},$a:function(){++this.U},db:function(){if(!--this.U){if(this.Ua)this.lb=this.Ua;this.Ua=null}}};(function(){function a(b){var d=h.F.Q(b);return function(){if(this.U){var e=this.Mb||(this.Mb={});return d in e?e[d]:(e[d]=b.call(this))}else return b.call(this)}}h.u={U:0,ma:function(b){function d(e){this.e=
e;this.Lb=this.ja()}h.Ba(d.prototype,h.u,b);d.Nc={};return d},m:function(){var b=this.ja(),d=this.constructor.Nc;return b?b in d?d[b]:(d[b]=this.na(b)):null},ja:a(function(){var b=this.e,d=this.constructor,e=b.style;b=b.currentStyle;var c=this.xa,g=this.Fa,i=d.Lc||(d.Lc=h.L+c);d=d.Mc||(d.Mc=h.jb+g.charAt(0).toUpperCase()+g.substring(1));return e[d]||b.getAttribute(i)||e[g]||b.getAttribute(c)}),h:a(function(){return!!this.m()}),I:a(function(){var b=this.ja(),d=b!==this.Lb;this.Lb=b;return d}),wa:a,
$a:function(){++this.U},db:function(){--this.U||delete this.Mb}}})();h.Db=h.u.ma({xa:h.L+"background",Fa:h.jb+"Background",Qc:{scroll:1,fixed:1,local:1},cb:{"repeat-x":1,"repeat-y":1,repeat:1,"no-repeat":1},hc:{"padding-box":1,"border-box":1,"content-box":1},Fd:{top:1,right:1,bottom:1,left:1,center:1},Od:{contain:1,cover:1},bb:{Ma:"backgroundClip",q:"backgroundColor",aa:"backgroundImage",Oa:"backgroundOrigin",M:"backgroundPosition",ca:"backgroundRepeat",Ra:"backgroundSize"},na:function(a){function b(t){return t&&
t.S()||t.i&k&&t.c in o}function d(t){return t&&(t.S()&&h.j(t.c)||t.c==="auto"&&"auto")}var e=this.e.currentStyle,c,g,i,j=h.p.ta,f=j.sa,k=j.qa,n=j.q,l,m,r=0,o=this.Fd,p,q,s={N:[]};if(this.qb()){c=new h.p(a);for(i={};g=c.next();){l=g.i;m=g.c;if(!i.R&&l&j.Ib&&m==="linear-gradient"){p={oa:[],R:m};for(q={};g=c.next();){l=g.i;m=g.c;if(l&j.Hb&&m===")"){q.color&&p.oa.push(q);p.oa.length>1&&h.Ba(i,p);break}if(l&n){if(p.ua||p.ub){g=c.z();if(g.i!==f)break;c.next()}q={color:h.ia(m)};g=c.next();if(g.S())q.fc=
h.j(g.c);else c.z()}else if(l&j.Ia&&!p.ua&&!q.color&&!p.oa.length)p.ua=new h.vc(g.c);else if(b(g)&&!p.ub&&!q.color&&!p.oa.length){c.z();p.ub=new h.Ja(c.pa(function(t){return!b(t)},false))}else if(l&f&&m===","){if(q.color){p.oa.push(q);q={}}}else break}}else if(!i.R&&l&j.URL){i.wb=m;i.R="image"}else if(b(g)&&!i.da){c.z();i.da=new h.Ja(c.pa(function(t){return!b(t)},false))}else if(l&k)if(m in this.cb&&!i.Za)i.Za=m;else if(m in this.hc&&!i.Wa){i.Wa=m;if((g=c.next())&&g.i&k&&g.c in this.hc)i.Qb=g.c;else{i.Qb=
m;c.z()}}else if(m in this.Qc&&!i.Rc)i.Rc=m;else return null;else if(l&n&&!s.color)s.color=h.ia(m);else if(l&f&&m==="/"&&!i.Xa&&i.da){g=c.next();if(g.i&k&&g.c in this.Od)i.Xa=new h.Ka(g.c);else if(g=d(g)){l=d(c.next());if(!l){l=g;c.z()}i.Xa=new h.Ka(g,l)}else return null}else if(l&f&&m===","&&i.R){i.gc=a.substring(r,c.ch-1);r=c.ch;s.N.push(i);i={}}else return null}if(i.R){i.gc=a.substring(r);s.N.push(i)}}else this.rc(h.ka<9?function(){var t=this.bb,u=e[t.M+"X"],E=e[t.M+"Y"],A=e[t.aa],x=e[t.q];if(x!==
"transparent")s.color=h.ia(x);if(A!=="none")s.N=[{R:"image",wb:(new h.p(A)).next().c,Za:e[t.ca],da:new h.Ja((new h.p(u+" "+E)).all())}]}:function(){var t=this.bb,u=/\s*,\s*/,E=e[t.aa].split(u),A=e[t.q],x,B,I,M,w,N;if(A!=="transparent")s.color=h.ia(A);if((M=E.length)&&E[0]!=="none"){A=e[t.ca].split(u);x=e[t.M].split(u);B=e[t.Oa].split(u);I=e[t.Ma].split(u);t=e[t.Ra].split(u);s.N=[];for(u=0;u<M;u++)if((w=E[u])&&w!=="none"){N=t[u].split(" ");s.N.push({gc:w+" "+A[u]+" "+x[u]+" / "+t[u]+" "+B[u]+" "+I[u],
R:"image",wb:(new h.p(w)).next().c,Za:A[u],da:new h.Ja((new h.p(x[u])).all()),Wa:B[u],Qb:I[u],Xa:new h.Ka(N[0],N[1])})}}});return s.color||s.N[0]?s:null},rc:function(a){var b=h.ka>8,d=this.bb,e=this.e.runtimeStyle,c=e[d.aa],g=e[d.q],i=e[d.ca],j,f,k,n;if(c)e[d.aa]="";if(g)e[d.q]="";if(i)e[d.ca]="";if(b){j=e[d.Ma];f=e[d.Oa];n=e[d.M];k=e[d.Ra];if(j)e[d.Ma]="";if(f)e[d.Oa]="";if(n)e[d.M]="";if(k)e[d.Ra]=""}a=a.call(this);if(c)e[d.aa]=c;if(g)e[d.q]=g;if(i)e[d.ca]=i;if(b){if(j)e[d.Ma]=j;if(f)e[d.Oa]=f;
if(n)e[d.M]=n;if(k)e[d.Ra]=k}return a},ja:h.u.wa(function(){return this.qb()||this.rc(function(){var a=this.e.currentStyle,b=this.bb;return a[b.q]+" "+a[b.aa]+" "+a[b.ca]+" "+a[b.M+"X"]+" "+a[b.M+"Y"]})}),qb:h.u.wa(function(){var a=this.e;return a.style[this.Fa]||a.currentStyle.getAttribute(this.xa)}),ld:function(a,b,d){var e=this.e,c=b.n();b=c.f;c=c.d;if(a!=="border-box")if((d=d.m())&&(d=d.T)){b-=d.l.a(e)+d.l.a(e);c-=d.t.a(e)+d.b.a(e)}if(a==="content-box"){a=h.j;d=e.currentStyle;b-=a(d.paddingLeft).a(e)+
a(d.paddingRight).a(e);c-=a(d.paddingTop).a(e)+a(d.paddingBottom).a(e)}return{f:b,d:c}},cc:function(){var a=0;if(h.V<7){a=this.e;a=""+(a.style[h.jb+"PngFix"]||a.currentStyle.getAttribute(h.L+"png-fix"))==="true"}return a},h:h.u.wa(function(){return(this.qb()||this.cc())&&!!this.m()})});h.Fb=h.u.ma({lc:["Top","Right","Bottom","Left"],Ad:{thin:"1px",medium:"3px",thick:"5px"},na:function(){var a={},b={},d={},e=false,c=true,g=true,i=true;this.sc(function(){for(var j=this.e.currentStyle,f=0,k,n,l,m,r,
o,p;f<4;f++){l=this.lc[f];p=l.charAt(0).toLowerCase();k=b[p]=j["border"+l+"Style"];n=j["border"+l+"Color"];l=j["border"+l+"Width"];if(f>0){if(k!==m)g=false;if(n!==r)c=false;if(l!==o)i=false}m=k;r=n;o=l;d[p]=h.ia(n);l=a[p]=h.j(b[p]==="none"?"0":this.Ad[l]||l);if(l.a(this.e)>0)e=true}});return e?{T:a,Vd:b,Uc:d,ke:i,Vc:c,Wd:g}:null},ja:h.u.wa(function(){var a=this.e,b=a.currentStyle,d;a.tagName in h.nc&&a.offsetParent.currentStyle.borderCollapse==="collapse"||this.sc(function(){d=b.borderWidth+"|"+b.borderStyle+
"|"+b.borderColor});return d}),sc:function(a){var b=this.e.runtimeStyle,d=b.borderWidth,e=b.borderColor;if(d)b.borderWidth="";if(e)b.borderColor="";a=a.call(this);if(d)b.borderWidth=d;if(e)b.borderColor=e;return a}});(function(){h.eb=h.u.ma({xa:"border-radius",Fa:"borderRadius",na:function(b){var d=null,e,c,g,i,j=false;if(b){c=new h.p(b);var f=function(){for(var k=[],n;(g=c.next())&&g.S();){i=h.j(g.c);n=i.Yb();if(n<0)return null;if(n>0)j=true;k.push(i)}return k.length>0&&k.length<5?{tl:k[0],tr:k[1]||
k[0],br:k[2]||k[0],bl:k[3]||k[1]||k[0]}:null};if(b=f()){if(g){if(g.i&h.p.ta.sa&&g.c==="/")e=f()}else e=b;if(j&&b&&e)d={x:b,y:e}}}return d}});var a=h.j("0");a={tl:a,tr:a,br:a,bl:a};h.eb.uc={x:a,y:a}})();h.Eb=h.u.ma({xa:"border-image",Fa:"borderImage",cb:{stretch:1,round:1,repeat:1,space:1},na:function(a){var b=null,d,e,c,g,i,j,f=0,k=h.p.ta,n=k.qa,l=k.ra,m=k.Qa;if(a){d=new h.p(a);b={};for(var r=function(q){return q&&q.i&k.sa&&q.c==="/"},o=function(q){return q&&q.i&n&&q.c==="fill"},p=function(){g=d.pa(function(q){return!(q.i&
(l|m))});if(o(d.next())&&!b.fill)b.fill=true;else d.z();if(r(d.next())){f++;i=d.pa(function(q){return!q.S()&&!(q.i&n&&q.c==="auto")});if(r(d.next())){f++;j=d.pa(function(q){return!q.Aa()})}}else d.z()};a=d.next();){e=a.i;c=a.c;if(e&(l|m)&&!g){d.z();p()}else if(o(a)&&!b.fill){b.fill=true;p()}else if(e&n&&this.cb[c]&&!b.repeat){b.repeat={d:c};if(a=d.next())if(a.i&n&&this.cb[a.c])b.repeat.qc=a.c;else d.z()}else if(e&k.URL&&!b.src)b.src=c;else return null}if(!b.src||!g||g.length<1||g.length>4||i&&i.length>
4||f===1&&i.length<1||j&&j.length>4||f===2&&j.length<1)return null;if(!b.repeat)b.repeat={d:"stretch"};if(!b.repeat.qc)b.repeat.qc=b.repeat.d;a=function(q,s){return{t:s(q[0]),r:s(q[1]||q[0]),b:s(q[2]||q[0]),l:s(q[3]||q[1]||q[0])}};b.slice=a(g,function(q){return h.j(q.i&l?q.c+"px":q.c)});if(i&&i[0])b.T=a(i,function(q){return q.S()?h.j(q.c):q.c});if(j&&j[0])b.Ca=a(j,function(q){return q.Aa()?h.j(q.c):q.c})}return b}});h.Ac=h.u.ma({xa:"box-shadow",Fa:"boxShadow",na:function(a){var b,d=h.j,e=h.p.ta,c;
if(a){c=new h.p(a);b={Ca:[],xb:[]};for(a=function(){for(var g,i,j,f,k,n;g=c.next();){j=g.c;i=g.i;if(i&e.sa&&j===",")break;else if(g.Aa()&&!k){c.z();k=c.pa(function(l){return!l.Aa()})}else if(i&e.q&&!f)f=j;else if(i&e.qa&&j==="inset"&&!n)n=true;else return false}g=k&&k.length;if(g>1&&g<5){(n?b.xb:b.Ca).push({be:d(k[0].c),ce:d(k[1].c),blur:d(k[2]?k[2].c:"0"),Pd:d(k[3]?k[3].c:"0"),color:h.ia(f||"currentColor")});return true}return false};a(););}return b&&(b.xb.length||b.Ca.length)?b:null}});h.Hc=h.u.ma({ja:h.u.wa(function(){var a=
this.e.currentStyle;return a.visibility+"|"+a.display}),na:function(){var a=this.e,b=a.runtimeStyle;a=a.currentStyle;var d=b.visibility,e;b.visibility="";e=a.visibility;b.visibility=d;return{$d:e!=="hidden",cd:a.display!=="none"}},h:function(){return false}});h.Ic=function(){function a(c){return function(){var g=arguments,i=0,j=g.length,f=this.w(),k,n;if(f){if(c)f=f[c];for(;i<j;i+=2){k=g[i];if(n=e[k])n.call(this,f,k,g[i+1]);else f[k]=g[i+1]}}else for(f=this[d+c]||(this[d+c]={});i<j;i+=2)f[g[i]]=g[i+
1]}}function b(c,g){this.Tb="_pie_"+(c||"shape")+h.F.Q(this);this.ab=g||0}var d="_attrs_",e={colors:function(c,g,i){if(c[g])c[g].value=i;else c[g]=i},size:function(c,g,i){if(i){c[g].x=1;c[g]=i}else delete c[g]}};b.prototype={Pb:"behavior:url(#default#VML);",Yc:"position:absolute;top:0px;left:0px;",Xc:'coordorigin="1,1" stroked="false" ',tagName:"shape",ec:0,w:function(){return this.ec?this.Nb||(this.Nb=G.getElementById(this.Tb)):null},Y:a(""),Ea:a("style"),C:a("fill"),Kd:a("imagedata"),Da:function(c,
g){this.Ea("width",c+"px","height",g+"px");this.Y("coordsize",c*2+","+g*2)},rd:function(){var c=this[d+"style"]||{},g=[],i;for(i in c)c.hasOwnProperty(i)&&g.push(i+":"+c[i]);return this.Pb+this.Yc+g.join(";")},Xb:function(){function c(l){if(l)for(var m in l)l.hasOwnProperty(m)&&i.push(" "+m+'="'+l[m]+'"')}function g(l){var m=j[d+l];if(m){i.push(k+l);c(m);i.push(n)}}var i,j=this,f=j.tagName,k="<v:",n=' style="'+j.Pb+'" />';j.ec=1;i=[k,f,' id="',j.Tb,'" style="',j.rd(),'" ',j.Xc];c(j[d]);i.push(">");
g("fill");g("imagedata");i.push("</v:"+f+">");return i.join("")},k:function(){var c=this.w(),g=c&&c.parentNode;if(g){g.removeChild(c);delete this.Nb}}};return b}();h.s={la:function(a){function b(d,e,c,g){this.e=d;this.o=e;this.g=c;this.parent=g}h.Ba(b.prototype,h.s,a);return b},dc:false,W:function(){return false},jc:h.fd,oc:function(){this.h()?this.ya():this.k()},Bb:function(){this.dc=true},vb:function(){this.e.runtimeStyle.borderColor="transparent"},k:function(){}};h.Ba(h.s,{w:function(a,b){var d=
this.ob||(this.ob={}),e=d[a];if(!e){e=d[a]=new h.Ic(a,b);this.parent.jd(e)}return e},ga:function(a){var b=this.ob,d=b&&b[a];if(d){d.k();this.parent.Gd(d);delete b[a]}return!!d},qd:function(a){var b=this.e,d=this.o.n(),e=d.f,c=d.d,g,i,j,f,k,n;d=a.x.tl.a(b,e);g=a.y.tl.a(b,c);i=a.x.tr.a(b,e);j=a.y.tr.a(b,c);f=a.x.br.a(b,e);k=a.y.br.a(b,c);n=a.x.bl.a(b,e);a=a.y.bl.a(b,c);e=Math.min(e/(d+i),c/(j+k),e/(n+f),c/(g+a));if(e<1){d*=e;g*=e;i*=e;j*=e;f*=e;k*=e;n*=e;a*=e}return{x:{tl:d,tr:i,br:f,bl:n},y:{tl:g,
tr:j,br:k,bl:a}}},P:function(a,b,d,e,c,g){var i,j=Math,f=j.floor;j=j.ceil;if(g||this.g.B.h()){a=this.ha(a,b,d,e,c,g);a="m"+a[0]+","+a[1]+"qy"+a[2]+","+a[3]+"l"+a[4]+","+a[5]+"qx"+a[6]+","+a[7]+"l"+a[8]+","+a[9]+"qy"+a[10]+","+a[11]+"l"+a[12]+","+a[13]+"qx"+a[14]+","+a[15]+"x"}else{i=this.o.n();g=i.f*c;i=i.d*c;a*=c;b*=c;d*=c;e*=c;a="m"+f(e)+","+f(a)+"l"+j(g-b)+","+f(a)+"l"+j(g-b)+","+j(i-d)+"l"+f(e)+","+j(i-d)+"x"}return a},ha:function(a,b,d,e,c,g){var i=this.o.n(),j=i.f*c;i=i.d*c;var f=Math,k=f.floor,
n=f.ceil,l=f.max;f=f.min;var m=this.qd(g||this.g.B.m());g=m.x.tl*c;var r=m.y.tl*c,o=m.x.tr*c,p=m.y.tr*c,q=m.x.br*c,s=m.y.br*c,t=m.x.bl*c;m=m.y.bl*c;a*=c;b*=c;d*=c;e*=c;return[k(e),k(f(l(r,a),i-d)),k(f(l(g,e),j-b)),k(a),n(l(e,j-l(o,b))),k(a),n(j-b),k(f(l(p,a),i-d)),n(j-b),n(l(a,i-l(s,d))),n(l(e,j-l(q,b))),n(i-d),k(f(l(t,e),j-b)),n(i-d),k(e),n(l(a,i-l(m,d)))]},vb:function(){var a=this.e,b=a.currentStyle,d=a.runtimeStyle,e=a.tagName,c=h.V===6,g;if(c&&(e in h.Rb||e==="FIELDSET")||e==="BUTTON"||e==="INPUT"&&
a.type in h.xd){d.borderWidth="";e=this.g.v.lc;for(g=e.length;g--;){c=e[g];d["padding"+c]="";d["padding"+c]=h.j(b["padding"+c]).a(a)+h.j(b["border"+c+"Width"]).a(a)+(h.V!==8&&g%2?1:0)}d.borderWidth=0}else if(c){if(a.childNodes.length!==1||a.firstChild.tagName!=="ie6-mask"){b=G.createElement("ie6-mask");e=b.style;e.visibility="visible";for(e.zoom=1;e=a.firstChild;)b.appendChild(e);a.appendChild(b);d.visibility="hidden"}}else d.borderColor="transparent"},je:function(){},k:function(){var a=this.ob,b;
if(a)for(b in a)a.hasOwnProperty(b)&&this.ga(b)}});h.Fc=h.s.la({h:function(){var a=this.Sc;for(var b in a)if(a.hasOwnProperty(b)&&a[b].h())return true;return false},W:function(){return this.g.Cb.I()},Bb:function(){if(this.h()&&this.pb()){var a=this.Zb(),b=a,d;a=a.currentStyle;var e=a.position,c=this.pb().style,g=0,i=0;i=this.o.n();if(e==="fixed"&&h.V>6){g=i.x;i=i.y;b=e}else{do b=b.offsetParent;while(b&&b.currentStyle.position==="static");if(b){d=b.getBoundingClientRect();b=b.currentStyle;g=i.x-d.left-
(parseFloat(b.borderLeftWidth)||0);i=i.y-d.top-(parseFloat(b.borderTopWidth)||0)}else{b=G.documentElement;g=i.x+b.scrollLeft-b.clientLeft;i=i.y+b.scrollTop-b.clientTop}b="absolute"}c.position=b;c.left=g;c.top=i;c.zIndex=e==="static"?-1:a.zIndex;this.dc=true}},Zd:function(){var a=this.g.Cb,b=this.Sa;if(b&&a.I()){a=a.m();b.style.display=a.$d&&a.cd?"":"none"}},oc:function(){this.h()?this.Zd():this.k()},Zb:function(){var a=this.e;return a.tagName in h.nc?a.offsetParent:a},pb:function(){var a=this.Sa;
if(!a)a=this.Sa=G.getElementById("_pie"+h.F.Q(this));return a},kd:function(){var a=this.nb,b,d,e,c,g,i;if(a){if(b=this.mb){d=0;for(e=a.length;d<e;d++){for(c=b.length;c--;)if(b[c].ab<a[d].ab)break;if(c<0){g=this.pb();i="afterBegin"}else{g=b[c].w();i="afterEnd"}g.insertAdjacentHTML(i,a[d].Xb());b.splice(c<0?0:c,0,a[d])}}else{a.sort(this.Ld);b=['<css3pie id="_pie'+h.F.Q(this)+'" style="direction:ltr;position:absolute;">'];d=0;for(e=a.length;d<e;d++)b.push(a[d].Xb());b.push("</css3pie>");this.Zb().insertAdjacentHTML("beforeBegin",
b.join(""));this.Bb();this.mb=a}delete this.nb}},Ld:function(a,b){return a.ab-b.ab},jd:function(a){(this.nb||(this.nb=[])).push(a)},Gd:function(a){var b=this.mb,d;if(b)for(d=b.length;d--;)if(b[d]===a){b.splice(d,1);break}},k:function(){var a=this.Sa,b;if(a&&(b=a.parentNode))b.removeChild(a);delete this.Sa;delete this.mb}});G.createElement("css3pie");h.wc=h.s.la({D:2,W:function(){var a=this.g;return a.G.I()||a.B.I()},h:function(){var a=this.g;return a.H.h()||a.B.h()||a.G.h()||a.ea.h()&&a.ea.m().xb},
ya:function(){var a=this.o.n();if(a.f&&a.d){this.dd();this.ed()}},dd:function(){var a=this.g.G.m(),b=this.o.n(),d=this.e,e=a&&a.color;if(e&&e.Va()>0){this.$b();a=this.w("bgColor",this.D);a.Da(b.f,b.d);a.Y("path",this.P(0,0,0,0,2));a.C("color",e.fa(d));b=e.Va();b<1&&a.C("opacity",b)}else this.ga("bgColor")},ed:function(){var a=this.g.G.m(),b=this.o.n();a=a&&a.N;var d,e,c,g;if(a){this.$b();e=b.f;c=b.d;for(g=a.length;g--;){b=a[g];d=this.w("bgImage"+g,this.D+(0.5-g/1E3));d.Y("path",this.P(0,0,0,0,2));
d.Da(e,c);if(b.R==="linear-gradient")this.Pc(d,b);else{d.C("type","tile","color","none");this.Dd(d,b.wb,g)}}}for(g=a?a.length:0;this.ga("bgImage"+g++););},Dd:function(a,b,d){h.F.tc(b,function(e){var c=this.e,g=this.o.n(),i=g.f;g=g.d;if(i&&g){var j=this.g.G,f=j.m().N[d],k=j.ld(f.Wa,this.o,this.g.v);j=(f.Xa||h.Ka.Cc).a(this.e,k.f,k.d,e.f,e.d);var n=this.md(f.Wa);c=f.da?f.da.coords(c,k.f-j.f,k.d-j.d):{x:0,y:0};f=f.Za;var l=0,m=0,r=i+1,o=g+1,p=h.V===8?0:1;k=Math.round(n.x+c.x)+0.5;n=Math.round(n.y+c.y)+
0.5;a.C("src",b,"position",k/i+","+n/g,"size",j.f!==e.f||j.d!==e.d||screen.logicalXDPI/screen.deviceXDPI!==1?h.Jb.kc(j.f)+"pt,"+h.Jb.kc(j.d)+"pt":"");if(f&&f!=="repeat"){if(f==="repeat-x"||f==="no-repeat"){l=n+1;o=n+j.d+p}if(f==="repeat-y"||f==="no-repeat"){m=k+1;r=k+j.f+p}a.Ea("clip","rect("+l+"px,"+r+"px,"+o+"px,"+m+"px)")}}},this)},md:function(a){var b=this.e,d=0,e=0,c;if(a!=="border-box")if((c=this.g.v.m())&&(c=c.T)){d+=c.l.a(b);e+=c.t.a(b)}if(a==="content-box"){a=h.j;c=b.currentStyle;d+=a(c.paddingLeft).a(b);
e+=a(c.paddingTop).a(b)}return{x:d,y:e}},Pc:function(a,b){var d=this.e,e=this.o.n(),c=e.f,g=e.d;e=b.oa;var i=e.length,j=Math.PI,f=h.gb,k=f.ic,n=f.Sb;b=f.od(d,c,g,b);f=b.ua;var l=b.Sd,m=b.Td,r=b.Qd,o=b.Rd,p=b.gd,q=b.hd,s=b.$c,t=b.ad;b=b.zd;c=f%90?Math.atan2(s*c/g,t)/j*180:f+90;c+=180;c%=360;p=k(r,o,f,p,q);g=n(r,o,p[0],p[1]);j=[];p=k(l,m,f,r,o);n=n(l,m,p[0],p[1])/g*100;k=[];for(f=0;f<i;f++)k.push(e[f].fc?e[f].fc.a(d,b):f===0?0:f===i-1?b:null);for(f=1;f<i;f++){if(k[f]===null){l=k[f-1];b=f;do m=k[++b];
while(m===null);k[f]=l+(m-l)/(b-f+1)}k[f]=Math.max(k[f],k[f-1])}for(f=0;f<i;f++)j.push(n+k[f]/g*100+"% "+e[f].color.fa(d));a.C("angle",c,"type","gradient","method","sigma","color",e[0].color.fa(d),"color2",e[i-1].color.fa(d),"colors",j.join(","))},$b:function(){var a=this.e.runtimeStyle;a.backgroundImage="url(about:blank)";a.backgroundColor="transparent"},k:function(){h.s.k.call(this);var a=this.e.runtimeStyle;a.backgroundImage=a.backgroundColor=""}});h.yc=h.s.la({D:4,Md:{t:[2,1,0,3,4,7,6,5,90],r:[4,
7,6,5,10,9,8,11,0],b:[10,9,8,11,12,15,14,13,270],l:[12,15,14,13,2,1,0,3,180]},Wc:{dotted:1,dashed:1},W:function(){var a=this.g;return a.v.I()||a.B.I()},h:function(){var a=this.g;return(a.B.h()||a.G.h())&&!a.H.h()&&a.v.h()},ya:function(){var a=this.e,b=this.g.v.m(),d=this.o.n(),e,c,g;if(b){this.vb();e=this.nd();c=0;for(g=e.length;c<g;c+=2){b=this.w("border"+c,this.D);b.Da(d.f,d.d);b.Y("path",e[c]);b.C("color",e[c+1].fa(a))}for(;this.ga("border"+c++););}},O:function(a,b,d,e,c,g,i){i=e*(i==="dashed"?
3:1);e=c+e;var j;if(i<d-b)for(b+=(d-b-i)/2%i;b<d;){j=Math.min(b+i,d);a.push(g?"m"+c+","+b+"l"+c+","+j+"l"+e+","+j+"l"+e+","+b+"x":"m"+b+","+c+"l"+j+","+c+"l"+j+","+e+"l"+b+","+e+"x");b+=i*2}},nd:function(){var a=this.g.v,b=[];if(a.h()){var d=this.e,e=this.o.n(),c=a.m(),g=c.T;a=c.Vd;var i=c.Uc,j=Math,f=j.abs,k=j.round;j=k(g.t.a(d));var n=k(g.r.a(d)),l=k(g.b.a(d));d=k(g.l.a(d));g=[];var m,r,o;k=this.Md;var p,q=this.Wc,s;if(c.Wd&&c.Vc){if(i.t.Va()>0){g[0]=this.P(0,0,0,0,2);s=a.t;if(s==="double")g.push(this.P(j/
3,n/3,l/3,d/3,2)+this.P(j*2/3,n*2/3,l*2/3,d*2/3,2));else if(s in q){c=this.ha(j,n,l,d,2);this.O(g,c[2],c[4],j*2,0,0,a.t);this.O(g,c[7],c[9],n*2,(e.f-n)*2,1,a.r);this.O(g,c[12],c[10],l*2,(e.d-l)*2,0,a.b);this.O(g,c[1],c[15],d*2,0,1,a.l)}g.push(this.P(j,n,l,d,2));b.push(g.join(""),i.t)}}else{m=this.ha(0,0,0,0,2);c=this.ha(j,n,l,d,2);for(p in k)if(k.hasOwnProperty(p)){s=k[p];var t=s[0],u=s[1],E=s[2],A=s[3],x=s[4],B=s[5],I=s[6],M=s[7],w=s[8];s=a[p];g[0]="al"+m[t]+","+m[u]+","+f(m[E]-m[t])+","+f(m[A]-
m[u])+","+(w+45)*65535+",-2949075ae"+m[x]+","+m[B]+","+f(m[I]-m[x])+","+f(m[M]-m[B])+","+w*65535+",-2949075";if(s==="double"){if(!r){r=this.ha(j/3,n/3,l/3,d/3,2);o=this.ha(j*2/3,n*2/3,l*2/3,d*2/3,2)}g.push("ae"+r[x]+","+r[B]+","+f(r[I]-r[x])+","+f(r[M]-r[B])+","+(w-45)*65535+",2949075ae"+r[t]+","+r[u]+","+f(r[E]-r[t])+","+f(r[A]-r[u])+","+w*65535+",2949075xal"+o[t]+","+o[u]+","+f(o[E]-o[t])+","+f(o[A]-o[u])+","+(w+45)*65535+",-2949075ae"+o[x]+","+o[B]+","+f(o[I]-o[x])+","+f(o[M]-o[B])+","+w*65535+
",-2949075")}g.push("ae"+c[x]+","+c[B]+","+f(c[I]-c[x])+","+f(c[M]-c[B])+","+(w-45)*65535+",2949075ae"+c[t]+","+c[u]+","+f(c[E]-c[t])+","+f(c[A]-c[u])+","+w*65535+",2949075x");if(s in q)p==="t"?this.O(g,c[2],c[4],j*2,0,0,s):p==="r"?this.O(g,c[7],c[9],n*2,(e.f-n)*2,1,s):p==="b"?this.O(g,c[12],c[10],l*2,(e.d-l)*2,0,s):this.O(g,c[1],c[15],d*2,0,1,s);b.push(g.join(""),i[p]);g.length=0}}}return b},k:function(){if(this.Ub||!this.g.H.h())this.e.runtimeStyle.borderColor="";h.s.k.call(this)}});h.xc=h.s.la({D:5,
W:function(){return this.g.H.I()},h:function(){return this.g.H.h()},ya:function(){var a=this,b=a.g.H.m(),d=a.g.v.m(),e=a.o.n(),c=a.e;h.F.tc(b.src,function(g){function i(t,u,E,A,x){var B=Math.max;a.sb(t).Ea("width",B(u,0)+"px","height",B(E,0)+"px","left",A+"px","top",x+"px")}function j(t,u,E){for(var A=b.src,x=0,B=t.length;x<B;x++)a.sb(t[x]).Kd("src",A,u,E)}var f=e.f,k=e.d,n=h.j("0"),l=b.T||(d?d.T:{t:n,r:n,b:n,l:n});n=l.t.a(c);var m=l.r.a(c),r=l.b.a(c);l=l.l.a(c);var o=b.slice,p=o.t.a(c),q=o.r.a(c),
s=o.b.a(c);o=o.l.a(c);i("tl",l,n,0,0);i("t",f-l-m,n,l,0);i("tr",m,n,f-m,0);i("r",m,k-n-r,f-m,n);i("br",m,r,f-m,k-r);i("b",f-l-m,r,l,k-r);i("bl",l,r,0,k-r);i("l",l,k-n-r,0,n);i("c",f-l-m,k-n-r,l,n);j(["tl","t","tr"],"cropBottom",(g.d-p)/g.d);j(["tl","l","bl"],"cropRight",(g.f-o)/g.f);j(["bl","b","br"],"cropTop",(g.d-s)/g.d);j(["tr","r","br"],"cropLeft",(g.f-q)/g.f);j(["l","r","c"],"cropTop",p/g.d);j(["l","r","c"],"cropBottom",s/g.d);j(["t","b","c"],"cropLeft",o/g.f);j(["t","b","c"],"cropRight",q/g.f);
a.sb("c").Ea("display",b.fill?"":"none")},a)},sb:function(a){a=this.w("borderImage"+a,this.D);a.tagName="rect";a.Y("filled",false);return a},jc:function(){if(this.h()){var a=this.e,b=a.runtimeStyle,d=this.g.H.m().T;b.borderStyle="solid";if(d){b.borderTopWidth=d.t.a(a);b.borderRightWidth=d.r.a(a);b.borderBottomWidth=d.b.a(a);b.borderLeftWidth=d.l.a(a)}this.vb()}},k:function(){var a=this.e.runtimeStyle;a.borderStyle="";if(this.Ub||!this.g.v.h())a.borderColor=a.borderWidth="";h.s.k.call(this)}});h.zc=
h.s.la({D:1,W:function(){var a=this.g;return a.ea.I()||a.B.I()},h:function(){var a=this.g.ea;return a.h()&&a.m().Ca[0]},ya:function(){var a=this.e,b=this.g,d=b.ea.m().Ca;b=b.B.m();var e=d.length,c=e,g=this.o.n(),i=g.f;g=g.d;for(var j,f,k,n,l,m,r,o,p,q;c--;){j=d[c];k=j.be.a(a);n=j.ce.a(a);l=j.Pd.a(a);m=j.blur.a(a);j=j.color;r=j.Va();j=j.fa(a);f=-l-m;if(!b&&m)b=h.eb.uc;o=this.P(f,f,f,f,2,b);f=this.w("shadow"+c,this.D+(0.5-c/1E3));if(m){p=(l+m)*2+i;q=(l+m)*2+g;l=m*2/p;m=m*2/q;if(l>0.5||m>0.5){p=0.5/
Math.max(l,m);l*=p;m*=p;r*=p*p}if(r!==f.yd){if(f.w()){this.ga("shadow"+c);f=this.w("shadow"+c,this.D+(0.5-c/1E3))}r<1&&f.C("o:opacity2",r);f.yd=r}f.C("type","gradienttitle","color2",j,"focusposition",l+","+m,"focussize",1-l*2+","+(1-m*2),"opacity",0)}else f.C("type","solid","opacity",r);f.Y("path",o);f.C("color",j);f.Ea("left",k+"px","top",n+"px");f.Da(i,g)}for(;this.ga("shadow"+e++););}});h.Ec=h.s.la({D:6,W:function(){var a=this.g;return this.e.src!==this.Kc||a.B.I()},h:function(){var a=this.g;return a.B.h()||
a.G.cc()},ya:function(){this.Kc=g;this.vd();var a=this.w("img",this.D),b=this.o.n(),d=b.f;b=b.d;var e=this.g.v.m(),c=e&&e.T;e=this.e;var g=e.src,i=Math.round,j=e.currentStyle,f=h.j;if(!c||h.V<7){c=h.j("0");c={t:c,r:c,b:c,l:c}}a.Y("path",this.P(i(c.t.a(e)+f(j.paddingTop).a(e)),i(c.r.a(e)+f(j.paddingRight).a(e)),i(c.b.a(e)+f(j.paddingBottom).a(e)),i(c.l.a(e)+f(j.paddingLeft).a(e)),2));a.C("type","frame","src",g,"position",(d?0.5/d:0)+","+(b?0.5/b:0));a.Da(d,b)},vd:function(){this.e.runtimeStyle.filter=
"alpha(opacity=0)"},k:function(){h.s.k.call(this);this.e.runtimeStyle.filter=""}});h.fb=function(){function a(o,p){o.className+=" "+p}function b(o){var p=r.slice.call(arguments,1),q=p.length;setTimeout(function(){for(;q--;)a(o,p[q])},0)}function d(o){var p=r.slice.call(arguments,1),q=p.length;setTimeout(function(){for(;q--;){var s=p[q];s=m[s]||(m[s]=new RegExp("\\b"+s+"\\b","g"));o.className=o.className.replace(s,"")}},0)}function e(o){function p(){if(!T){var v,y,z=h.ka,K=o.currentStyle,F=K.getAttribute(g)===
"true";P=K.getAttribute(i);P=z>7?P!=="false":P==="true";if(!Q){Q=1;o.runtimeStyle.zoom=1;K=o;for(var W=1;K=K.previousSibling;)if(K.nodeType===1){W=0;break}W&&a(o,n)}D.$a();if(F&&(y=D.n())&&(v=G.documentElement||G.body)&&(y.y>v.clientHeight||y.x>v.clientWidth||y.y+y.d<0||y.x+y.f<0)){if(!U){U=1;h.ib.X(p)}}else{T=1;U=Q=0;h.ib.Ha(p);if(z===9){C={G:new h.Db(o),H:new h.Eb(o),v:new h.Fb(o)};O=[C.G,C.H];H=new h.fe(o,D,C);v=[new h.de(o,D,C,H),new h.ee(o,D,C,H)]}else{C={G:new h.Db(o),v:new h.Fb(o),H:new h.Eb(o),
B:new h.eb(o),ea:new h.Ac(o),Cb:new h.Hc(o)};O=[C.G,C.v,C.H,C.B,C.ea,C.Cb];H=new h.Fc(o,D,C);v=[new h.zc(o,D,C,H),new h.wc(o,D,C,H),new h.yc(o,D,C,H),new h.xc(o,D,C,H)];o.tagName==="IMG"&&v.push(new h.Ec(o,D,C,H));H.Sc=v}J=[H].concat(v);if(v=o.currentStyle.getAttribute(h.L+"watch-ancestors")){v=parseInt(v,10);y=0;for(F=o.parentNode;F&&(v==="NaN"||y++<v);){w(F,"onpropertychange",M);w(F,"onmouseenter",u);w(F,"onmouseleave",E);w(F,"onmousedown",A);if(F.tagName in h.Vb){w(F,"onfocus",B);w(F,"onblur",
I)}F=F.parentNode}}if(P){h.Na.X(s);h.Na.Id()}s(0,1)}if(!R){R=1;z<9&&w(o,"onmove",q);w(o,"onresize",q);w(o,"onpropertychange",t);w(o,"onmouseenter",u);w(o,"onmouseleave",E);w(o,"onmousedown",A);if(o.tagName in h.Vb){w(o,"onfocus",B);w(o,"onblur",I)}h.Pa.X(q);h.K.X(N)}D.db()}}function q(){D&&D.td()&&s()}function s(v,y){if(!V)if(T){D.$a();for(var z=O.length;z--;)O[z].$a();var K=J.length,F=D.Nd();for(z=0;z<K;z++)J[z].jc();if(y||D.Ed())for(z=0;z<K;z++)J[z].Bb();for(z=0;z<K;z++)if(y||F||v&&J[z].W())J[z].oc();
H.kd();for(v=O.length;v--;)O[v].db();D.db()}else Q||p()}function t(){var v=event;v&&v.propertyName in l||s(1)}function u(){b(o,j)}function E(){d(o,j,f)}function A(){b(o,f);h.hb.X(x)}function x(){d(o,f);h.hb.Ha(x)}function B(){b(o,k)}function I(){d(o,k)}function M(){var v=event.propertyName;if(v==="className"||v==="id")t()}function w(v,y,z){v.attachEvent(y,z);S.push([v,y,z])}function N(){if(R){for(var v=S.length,y;v--;){y=S[v];y[0].detachEvent(y[1],y[2])}h.K.Ha(N);R=0;S=[]}}function X(){if(!V){var v,
y;N();V=1;if(J){v=0;for(y=J.length;v<y;v++){J[v].Ub=1;J[v].k()}}P&&h.Na.Ha(s);h.Pa.Ha(s);J=D=C=O=o=null}}var J,H,D=new h.Gb(o),C,O,Q,T,R,S=[],U,V,P;this.wd=p;this.k=X}var c={},g=h.L+"lazy-init",i=h.L+"poll",j=h.La+"hover",f=h.La+"active",k=h.La+"focus",n=h.La+"first-child",l={background:1,bgColor:1,display:1},m={},r=[];e.pd=function(o){var p=h.F.Q(o);return c[p]||(c[p]=new e(o))};e.k=function(o){o=h.F.Q(o);var p=c[o];if(p){p.k();delete c[o]}};e.bd=function(){var o=[],p;if(c){for(var q in c)if(c.hasOwnProperty(q)){p=
c[q];o.push(p.ge);p.k()}c={}}return o};return e}();h.version="1.0beta6-SNAPSHOT";h.supportsVML=h.mc;h.attach=function(a){if(h.ka===9||h.ka<9&&h.mc)h.fb.pd(a).wd()};h.detach=function(a){h.fb.k(a)}})(window,document);
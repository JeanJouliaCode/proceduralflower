(function(t){function e(e){for(var r,s,i=e[0],l=e[1],c=e[2],u=0,d=[];u<i.length;u++)s=i[u],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&d.push(a[s][0]),a[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);p&&p(e);while(d.length)d.shift()();return n.push.apply(n,c||[]),o()}function o(){for(var t,e=0;e<n.length;e++){for(var o=n[e],r=!0,i=1;i<o.length;i++){var l=o[i];0!==a[l]&&(r=!1)}r&&(n.splice(e--,1),t=s(s.s=o[0]))}return t}var r={},a={app:0},n=[];function s(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=t,s.c=r,s.d=function(t,e,o){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(o,r,function(e){return t[e]}.bind(null,r));return o},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/proceduralflower/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var p=l;n.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"0169":function(t,e,o){},"034f":function(t,e,o){"use strict";o("85ec")},"20e4":function(t,e,o){"use strict";o("53d3")},3948:function(t,e,o){t.exports=o.p+"img/letter.63578f84.png"},"53d3":function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var r=o("2b0e"),a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("div",{attrs:{id:"nav"}},[o("router-link",{attrs:{to:"/"}},[t._v("Generate Flower")]),o("router-link",{attrs:{to:"/field"}},[t._v("Field of flowers")])],1),o("div",{staticClass:"content-page"},[o("router-view")],1)])},n=[],s={},i=s,l=(o("034f"),o("2877")),c=Object(l["a"])(i,a,n,!1,null,null,null),p=c.exports,u=o("8c4f"),d=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"page"},[r("div",{staticClass:"wrapper"},[r("img",{staticClass:"reload",attrs:{src:o("b318"),alt:"refresh"},on:{click:t.reload}}),r("div",{staticClass:"flowerContainer"},[r("Flower",{ref:"flower",staticClass:"flower",attrs:{options:t.optionJson}}),r("Button",{staticClass:"button",on:{click:t.download}},[t._v("Download svg")])],1),r("div",{staticClass:"atributeContainer",class:{hide:!t.showFlower}},[r("div",{staticClass:"seeds-atributes"},[r("div",{staticClass:"sliders-wrapper"},[r("Slider",{attrs:{label:"radius"},model:{value:t.radius,callback:function(e){t.radius=e},expression:"radius"}}),r("Slider",{attrs:{label:"petals color"},model:{value:t.petalColor1,callback:function(e){t.petalColor1=e},expression:"petalColor1"}}),r("Slider",{attrs:{label:"number of petals"},model:{value:t.petalNumber1,callback:function(e){t.petalNumber1=e},expression:"petalNumber1"}}),r("Slider",{attrs:{label:"petals length"},model:{value:t.petalLength1,callback:function(e){t.petalLength1=e},expression:"petalLength1"}}),r("Slider",{attrs:{label:"petals width"},model:{value:t.petalWidth1,callback:function(e){t.petalWidth1=e},expression:"petalWidth1"}}),r("Slider",{attrs:{label:"sub-petals color"},model:{value:t.petalColor2,callback:function(e){t.petalColor2=e},expression:"petalColor2"}}),r("Slider",{attrs:{label:"number of sub-petals"},model:{value:t.petalNumber2,callback:function(e){t.petalNumber2=e},expression:"petalNumber2"}}),r("Slider",{attrs:{label:"sub-petals length"},model:{value:t.petalLength2,callback:function(e){t.petalLength2=e},expression:"petalLength2"}}),r("Slider",{attrs:{label:"sub-petals width"},model:{value:t.petalWidth2,callback:function(e){t.petalWidth2=e},expression:"petalWidth2"}}),r("Slider",{attrs:{label:"center of flower color"},model:{value:t.centerColor,callback:function(e){t.centerColor=e},expression:"centerColor"}}),r("Slider",{attrs:{label:"stem color"},model:{value:t.stemColor,callback:function(e){t.stemColor=e},expression:"stemColor"}}),r("Slider",{attrs:{label:"stem length"},model:{value:t.stemLength,callback:function(e){t.stemLength=e},expression:"stemLength"}}),r("Slider",{attrs:{label:"stem width"},model:{value:t.stemWidth,callback:function(e){t.stemWidth=e},expression:"stemWidth"}}),r("Slider",{attrs:{label:"stem amplitude"},model:{value:t.stemAmplitude,callback:function(e){t.stemAmplitude=e},expression:"stemAmplitude"}}),r("Slider",{attrs:{label:"stem frequency"},model:{value:t.stemFrequency,callback:function(e){t.stemFrequency=e},expression:"stemFrequency"}})],1),r("img",{staticClass:"letter",attrs:{src:o("3948"),alt:""},on:{load:t.showScreen}})])])])])},h=[],m=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("div",{ref:"flower",staticClass:"flower",attrs:{id:"flower"}}),o("div",{ref:"stem",staticClass:"stem",attrs:{id:"stem"}}),t._m(0)])},f=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"pot"},[r("img",{staticClass:"pot__image",attrs:{src:o("8c6a"),alt:"pot"}})])}],w=(o("d3b7"),o("25f0"),o("3ca3"),o("ddb0"),o("2b3d"),o("9861"),o("d4ec")),b=o("bee2"),g=(o("b64b"),o("99af"),1),v=200,C=1.2,y=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(Object(w["a"])(this,t),this.options={length:Math.random(),width:Math.random(),color:Math.random(),frequency:Math.random(),amplitude:Math.random(),flowerHeadRadius:.1},e)for(var o=0,r=Object.keys(e);o<r.length;o++){var a=r[o];this.options[a]?this.options[a]=e[a]:console.error('option: "'.concat(a,"\" doesn't exist"))}}return Object(b["a"])(t,[{key:"setOption",value:function(t,e){if(this.options[t])return this.options[t]=e,this;console.error('option: "'.concat(t,"\" doesn't exist"))}},{key:"getSVG",value:function(){var t=document.createElementNS("http://www.w3.org/2000/svg","g"),e=Math.max(this.options.flowerHeadRadius*this.options.width*C,.05),o=Math.floor(340*this.options.color);return t.appendChild(this.getLine("hsl(".concat(o+20,", 50%, 20%)"),e)),t}},{key:"getStemViewBox",value:function(){return this.options.length*g+.1}},{key:"getLine",value:function(t,e){for(var o=document.createElementNS("http://www.w3.org/2000/svg","path"),r=-.5,a=this.options.length*g+.1,n=2*Math.floor(4*this.options.frequency),s=.07*this.options.amplitude,i=(Math.abs(r)+a)/v,l="",c=0;c<v;c++)l+="".concat(0===c?"M":"L"," ").concat(s*Math.sin(Math.PI*n/v*c)," ").concat(.5+r+c*i," ");return o.setAttribute("stroke",t),o.setAttribute("fill","transparent"),o.setAttribute("stroke-width",e),o.setAttribute("d","".concat(l)),o}}]),t}(),M=13,k=.2,x=.18,A=.4,S=340,L=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(Object(w["a"])(this,t),this.options={centerRadius:Math.random(),petalNumber1:Math.random(),petalLength1:Math.random(),petalWidth1:Math.random(),petalColor1:Math.random(),petalNumber2:Math.random(),petalLength2:Math.random(),petalWidth2:Math.random(),petalColor2:Math.random(),centerColor:Math.random()},e){for(var o=0,r=Object.keys(e);o<r.length;o++){var a=r[o];this.options[a]&&(this.options[a]=e[a])}this.flowerHeadRadius=Math.max(.05,this.options.centerRadius*k)}}return Object(b["a"])(t,[{key:"setOption",value:function(t,e){if(this.options[t])return this.options[t]=e,this;console.error('option: "'.concat(t,"\" doesn't exist"))}},{key:"getSVG",value:function(){var t=document.createElementNS("http://www.w3.org/2000/svg","g"),e=Math.round(this.options.petalColor1*S),o=Math.round(this.options.petalColor2*S),r=this.options.petalLength1*x,a=this.options.petalWidth1*A,n=this.options.petalLength2*x,s=this.options.petalWidth2*A,i=Math.round(this.options.petalNumber1*M),l=Math.round(this.options.petalNumber2*M),c=this.getPetals(e,i,r,a),p=this.getPetals(o,l,n,s);return t.appendChild(c),t.appendChild(p),t.appendChild(this.getRound()),t}},{key:"getPetals",value:function(t,e,o,r){for(var a=document.createElementNS("http://www.w3.org/2000/svg","g"),n=document.createElementNS("http://www.w3.org/2000/svg","g"),s=2*Math.PI/(2*e),i=0;i<2*e;i++){var l=this.getPetal(s*i+Math.PI/8,o,r,t);a.appendChild(l)}return n.appendChild(a),n.appendChild(this.getPetalsHalfReverse(a)),n}},{key:"getPetal",value:function(t,e,o){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,a=document.createElementNS("http://www.w3.org/2000/svg","ellipse");return a.setAttribute("rx","".concat(e)),a.setAttribute("ry","".concat(o)),a.setAttribute("cx","".concat(e-.1*this.flowerHeadRadius)),a.setAttribute("cy","".concat(0)),a.setAttribute("stroke-width","0.005"),a.setAttribute("stroke","hsl(".concat(r+20,", 50%, 20%)")),a.setAttribute("fill","hsl(".concat(r,", 50%, 50%)")),a.setAttribute("transform","".concat("translate(".concat(this.flowerHeadRadius*Math.cos(t),",").concat(this.flowerHeadRadius*Math.sin(t),")"),"\n      rotate(",360*t/(2*Math.PI),")")),a}},{key:"getPetalsHalfReverse",value:function(t){var e=document.createElementNS("http://www.w3.org/2000/svg","mask"),o=document.createElementNS("http://www.w3.org/2000/svg","g"),r=document.createElementNS("http://www.w3.org/2000/svg","rect"),a=t.cloneNode(!0);return r.setAttribute("width","0.5"),r.setAttribute("height","1"),r.setAttribute("fill","white"),r.setAttribute("x","-0.5"),r.setAttribute("y","-0.5"),a.setAttribute("mask","url(#myMask)"),e.appendChild(r),e.setAttribute("id","myMask"),a.setAttribute("transform","rotate(".concat(180,")")),o.appendChild(e),o.appendChild(a),o}},{key:"getRound",value:function(){var t=document.createElementNS("http://www.w3.org/2000/svg","circle"),e=Math.round(this.options.centerColor*S);return t.setAttribute("r","".concat(this.flowerHeadRadius)),t.setAttribute("cx","0"),t.setAttribute("cy","0"),t.setAttribute("fill","hsl(".concat(e,", 50%, 50%)")),t}}]),t}(),N={props:{options:{default:function(){}},optionsArray:{default:function(){return[]}}},data:function(){return{optionsCpy:{}}},methods:{downloadSVG:function(){var t=document.getElementById("flower").innerHTML,e=new Blob([t.toString()]),o=document.createElement("a");o.download="w3c.svg",o.href=window.URL.createObjectURL(e),o.click(),o.remove()},buildFlower:function(){var t=this.$refs.flower,e=this.$refs.stem;t.innerHTML="",e.innerHTML="",this.optionsCpy=this.options,this.optionsArray.length>0&&(this.optionsCpy={centerRadius:this.optionsArray[0],petalNumber1:this.optionsArray[1],petalLength1:this.optionsArray[2],petalWidth1:this.optionsArray[3],petalColor1:this.optionsArray[4],petalNumber2:this.optionsArray[5],petalLength2:this.optionsArray[6],petalWidth2:this.optionsArray[7],petalColor2:this.optionsArray[8],centerColor:this.optionsArray[9],stemColor:this.optionsArray[10],stemLength:this.optionsArray[11],stemWidth:this.optionsArray[12],amplitude:this.optionsArray[13],frequency:this.optionsArray[14]});var o=new L({centerRadius:this.optionsCpy.centerRadius,petalNumber1:this.optionsCpy.petalNumber1,petalLength1:this.optionsCpy.petalLength1,petalWidth1:this.optionsCpy.petalWidth1,petalColor1:this.optionsCpy.petalColor1,petalNumber2:this.optionsCpy.petalNumber2,petalLength2:this.optionsCpy.petalLength2,petalWidth2:this.optionsCpy.petalWidth2,petalColor2:this.optionsCpy.petalColor2,centerColor:this.optionsCpy.centerColor}),r=o.getSVG(),a=new y({color:this.optionsCpy.stemColor,length:this.optionsCpy.stemLength,width:this.optionsCpy.stemWidth,flowerHeadRadius:o.flowerHeadRadius,frequency:this.optionsCpy.frequency,amplitude:this.optionsCpy.amplitude}),n=a.getSVG();n.style.overflow="visible";var s=document.createElementNS("http://www.w3.org/2000/svg","svg");s.setAttribute("viewBox","-0.5 -0.5 1 ".concat(1+a.getStemViewBox())),s.setAttribute("xmlns","http://www.w3.org/2000/svg"),s.appendChild(n),s.appendChild(r),t.appendChild(s)}},mounted:function(){this.buildFlower()},watch:{options:function(){this.buildFlower()},optionsArray:function(){this.buildFlower()}}},_=N,W=(o("c62f"),Object(l["a"])(_,m,f,!1,null,"c96861c6",null)),F=W.exports,O=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("input",{directives:[{name:"model",rawName:"v-model",value:t.model,expression:"model"}],staticClass:"slider",attrs:{type:"range",min:"0",max:t.max,id:"myRange"},domProps:{value:t.model},on:{__r:function(e){t.model=e.target.value}}}),o("label",{attrs:{for:"myRange"}},[t._v(t._s(t.label))])])},R=[],j=(o("a9e3"),{data:function(){return{model:this.value}},props:{max:{type:Number,default:100},value:{type:Number},label:{type:String,required:!0}},watch:{model:function(t){this.$emit("input",parseInt(t))}}}),E=j,P=Object(l["a"])(E,O,R,!1,null,null,null),H=P.exports,q={data:function(){return{radius:100*Math.random(),petalNumber1:100*Math.random(),petalLength1:100*Math.random(),petalWidth1:100*Math.random(),petalColor1:100*Math.random(),petalNumber2:100*Math.random(),petalLength2:100*Math.random(),petalWidth2:100*Math.random(),petalColor2:100*Math.random(),centerColor:100*Math.random(),stemColor:100*Math.random(),stemLength:100*Math.random(),stemWidth:100*Math.random(),stemAmplitude:100*Math.random(),stemFrequency:100*Math.random(),showFlower:!1}},computed:{optionJson:function(){return{centerRadius:this.radius/100,petalNumber1:this.petalNumber1/100,petalLength1:this.petalLength1/100,petalWidth1:this.petalWidth1/100,petalColor1:this.petalColor1/100,petalNumber2:this.petalNumber2/100,petalLength2:this.petalLength2/100,petalWidth2:this.petalWidth2/100,petalColor2:this.petalColor2/100,centerColor:this.centerColor/100,stemColor:this.stemColor/100,stemLength:this.stemLength/100,stemWidth:this.stemWidth/100,amplitude:this.stemAmplitude/100,frequency:this.stemFrequency/100}}},methods:{showScreen:function(){this.showFlower=!0},reload:function(){location.reload()},download:function(){this.$refs.flower.downloadSVG()}},components:{Flower:F,Slider:H}},$=q,T=(o("ad12"),Object(l["a"])($,d,h,!1,null,"60ecd14c",null)),V=T.exports,G=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"page"},[o("div",{staticClass:"parent"},[o("div",{staticClass:"div1"},[o("div",{staticClass:"wrapper"},t._l(t.options,(function(e,r){return o("div",{key:r,staticClass:"cube",on:{click:function(){return t.chooseFlower(r)}}},[o("flower",{staticClass:"flower",attrs:{optionsArray:e.dna}})],1)})),0)]),o("div",{staticClass:"div2"},[o("span",{staticClass:"rule"},[t._v("Choose a flower on the left and try to match the one on the right. Keep going and try to get as close as you can")]),o("div",{staticClass:"flowerWrapper"},[o("div",{staticClass:"container-flower"},[o("h1",[t._v("Flower to copy")]),o("flower",{staticClass:"flowerExemple",attrs:{optionsArray:t.flowerToCopy}})],1),t.selectedFlower?o("span",[t._v(" score : "+t._s(Math.floor(100*(1-t.flowerLookLikeScore)))+"%")]):t._e(),t.selectedFlower?o("div",{staticClass:"container-flower"},[o("h1",[t._v("Choosen flower")]),o("flower",{staticClass:"flowerExemple",attrs:{optionsArray:t.selectedFlower}})],1):t._e()])])])])},B=[],I=o("2909"),J=o("1da1"),U=(o("96cf"),o("159b"),{components:{flower:F},data:function(){return{options:this.getOptions(),flowerToCopy:this.getRandomFlower(),selectedFlower:null}},computed:{flowerLookLikeScore:function(){var t=this.selectedFlower,e=this.flowerToCopy;if(!t||!e)return"";var o=0;return t.forEach((function(t,r){o+=Math.abs(e[r]-t)/Math.max(e[r],1-e[r])})),o/t.length}},methods:{getOptions:function(){for(var t=[],e=0;e<16;e++){var o=this.getRandomFlower();t.push({dna:o,score:0})}return t},getRandomFlower:function(){return[Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random()]},chooseFlower:function(t){var e=this;return Object(J["a"])(regeneratorRuntime.mark((function o(){var r,a,n,s,i,l;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return r=Object(I["a"])(e.options[t].dna),e.selectedFlower=r,e.options=[],a=[],o.next=6,e.$nextTick();case 6:for(n=0;n<16;n++)s=Math.floor(r.length*Math.random()),i=Math.floor(r.length*Math.random()),l=Object(I["a"])(r),l[s]=e.getMutation(l[s]),l[i]=e.getMutation(l[i]),a.push({dna:l,score:e.getFlowerLookLikeScore(l,e.flowerToCopy)}),e.options=a;case 7:case"end":return o.stop()}}),o)})))()},getMutation:function(t){var e=t+.5*(Math.random()-.5);return e>1&&(e=1),e<0&&(e=0),e},getFlowerLookLikeScore:function(t,e){if(!t||!e)return"";var o=0;return t.forEach((function(t,r){o+=Math.abs(e[r]-t)/Math.max(e[r],1-e[r])})),o/t.length}}}),D=U,K=(o("20e4"),Object(l["a"])(D,G,B,!1,null,"583abf7a",null)),z=K.exports;r["a"].use(u["a"]);var Q=[{path:"/",name:"Home",component:V},{path:"/field",name:"field",component:z}],X=new u["a"]({mode:"history",base:"/proceduralflower/",routes:Q}),Y=X,Z=o("2f62");r["a"].use(Z["a"]);var tt=new Z["a"].Store({state:{},mutations:{},actions:{},modules:{}});r["a"].config.productionTip=!1,new r["a"]({router:Y,store:tt,render:function(t){return t(p)}}).$mount("#app")},"6bf1":function(t,e,o){},"85ec":function(t,e,o){},"8c6a":function(t,e,o){t.exports=o.p+"img/pot.f9e8ee95.png"},ad12:function(t,e,o){"use strict";o("0169")},b318:function(t,e,o){t.exports=o.p+"img/reload.78d5a8b9.svg"},c62f:function(t,e,o){"use strict";o("6bf1")}});
//# sourceMappingURL=app.e43ecb8c.js.map
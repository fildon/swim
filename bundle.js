!function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(1);document.addEventListener("DOMContentLoaded",function(){(new i.default).start()},!1)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(2),r=n(4),o=function(){function t(){this.canvas=new r.default,this.player=new i.default}return t.prototype.start=function(){this.tick()},t.prototype.draw=function(){this.canvas.draw(this.player)},t.prototype.step=function(){this.player.step()},t.prototype.tick=function(){var t=this;setTimeout(function(){return t.tick()},20),this.draw(),this.step()},t}();e.default=o},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(3),r=function(){function t(){var t=this;this.up=!1,this.down=!1,this.left=!1,this.right=!1,this.position=new i.default(window.innerWidth/2,window.innerHeight/2),window.addEventListener("keyup",function(e){t.handleKeyUp(e)}),window.addEventListener("keydown",function(e){t.handleKeyDown(e)})}return t.prototype.handleKeyUp=function(t){switch(t.key){case"ArrowDown":this.down=!1;break;case"ArrowUp":this.up=!1;break;case"ArrowLeft":this.left=!1;break;case"ArrowRight":this.right=!1;break;default:return}},t.prototype.handleKeyDown=function(t){switch(t.key){case"ArrowDown":this.down=!0;break;case"ArrowUp":this.up=!0;break;case"ArrowLeft":this.left=!0;break;case"ArrowRight":this.right=!0;break;default:return}},t.prototype.step=function(){var t=+this.right-+this.left,e=+this.down-+this.up;this.position.x+=t,this.position.y+=e},t}();e.default=r},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(t,e){this.x=t,this.y=e};e.default=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(){this.canvas=document.getElementById("canvas"),this.ctx=this.canvas.getContext("2d"),this.setScreenSize()}return t.prototype.setScreenSize=function(){this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight},t.prototype.draw=function(t){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.setScreenSize(),this.drawPlayer(t)},t.prototype.drawPlayer=function(t){this.ctx.beginPath(),this.ctx.arc(t.position.x,t.position.y,10,0,2*Math.PI),this.ctx.fillStyle="red",this.ctx.fill()},t}();e.default=i}]);
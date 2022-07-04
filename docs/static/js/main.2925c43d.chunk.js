(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{16:function(e,n,t){e.exports=t(25)},21:function(e,n,t){},24:function(e,n,t){},25:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(8),i=t.n(l),o=(t(21),t(9)),c=t(10),m=t(15),s=t(14),p=t(1),d=t(2);function u(){var e=Object(p.a)(["\n    height: 40px;\n    margin: 0 10px;\n"]);return u=function(){return e},e}function h(){var e=Object(p.a)(['\n    color: #988e9f;\n    font-weight: 300;\n    margin:20px 0;\n    font-size: 18px;\n    position: relative;\n    &: before{\n        content:"";\n        position: absolute;\n        top: 50%;\n        left: -25px;\n        width: 10px;\n        height: 10px;\n        transform: translateY(-50%);\n        border-radius: 50%;\n        border: 2px solid #5918df;\n        background-color: #0f0d16;\n    }\n    &:after {\n        content:"/>";\n    }\n']);return h=function(){return e},e}function f(){var e=Object(p.a)(["\n    margin-left: calc(10% + 20px);\n    margin-right: 10%;\n"]);return f=function(){return e},e}function v(){var e=Object(p.a)(["\n    position: absolute;\n    left: 10%;\n    top: 0;\n    bottom:0;\n    width:0px;\n    border-left: 2px solid #5918df;\n"]);return v=function(){return e},e}var g=d.a.div(v()),E=d.a.div(f()),x=d.a.div(h()),b=d.a.img(u());function w(e){var n=e.name;return r.a.createElement(b,{src:"./images/icons/".concat(n,".svg")})}function k(){var e=Object(p.a)(["\n    color: #988e9f;\n    font-weight: 500;\n    margin:10px 0;\n    font-size: 1.6vw;\n    @media only screen and (max-width: 900px) {\n        font-size: 4vw;\n    }\n"]);return k=function(){return e},e}function y(){var e=Object(p.a)(["\n    font-weight: 900;\n    line-height: 1.5;\n    .name{\n        color: #5918df;\n    }\n    font-size: 2vw;\n    @media only screen and (max-width: 900px) {\n        font-size: 4.5vw;\n    }\n"]);return y=function(){return e},e}function j(){var e=Object(p.a)(["\n    margin-left: calc(10% + 20px);\n    margin-right: 10%;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    /* bottom:0; */\n    align-items:center;\n    & > div {\n        flex:1;\n        min-width:300px;\n    }\n    .profileImg {\n        margin:20px;\n        border-radius: 50%;\n        border: 20px solid #5918df;\n        min-width: 200px;\n        max-width: 400px;\n        box-shadow: 0px 0px 30px 0px #5918df88,0px 0px 30px 0px #5918df88 inset;\n        animation-duration: 2s;\n        animation-name: slideIn;\n        transition: box-shadow .2s;\n        overflow: hidden;\n    }\n    .profileImg img {\n        width:100%;\n        animation-duration: 2.5s;\n        animation-name: slideUp;\n        transition: transform .2s;\n        transform: translateY(10%)\n    }\n    .profileImg:hover img{\n        transform: translateY(5%) scale(1.1);\n    }\n    .profileImg:hover{\n        box-shadow: 0px 0px 40px 0px #5918df88;\n    }\n    @keyframes slideIn {\n        from {\n            transform: translateX(100%);\n            opacity: 0.5;\n        }\n\n        to {\n            transform: translateX(0%);\n            opacity: 1;\n        }\n    }    \n    @keyframes slideUp {\n        from {\n            transform: translateY(100%);\n            opacity: 0.5;\n        }\n\n        to {\n            transform: translateY(10%);\n            opacity: 1;\n        }\n    }  \n"]);return j=function(){return e},e}function O(){var e=Object(p.a)(["\n    background-color: #0f0d16;\n    position: relative;    \n    color: white;\n    min-height: 100vh;\n    display: grid;\n    align-items: center;\n"]);return O=function(){return e},e}var N=d.a.div(O()),L=Object(d.a)(E)(j()),S=d.a.div(y()),z=d.a.div(k());var I=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(N,{id:"start"},r.a.createElement(g,null),r.a.createElement(L,null,r.a.createElement("div",null,r.a.createElement(x,null,"Start"),r.a.createElement(S,null,"Hi, my name is"," ",r.a.createElement("span",{className:"name"},"Keshav Mahawar"),r.a.createElement("br",null),"i am a fullstack developer",r.a.createElement("br",null),"i love to bring ideas come true through code"),r.a.createElement(z,null,"Let me show you....")),r.a.createElement("div",{className:"profileImg"},r.a.createElement("img",{src:"./keshav.png",alt:"keshav mahawar"})))))},C=t(4);function H(){var e=Object(p.a)(["\n    width: 30px;\n    margin: 10px 0;\n"]);return H=function(){return e},e}function G(){var e=Object(p.a)(['\n    width: 400px;\n    position: absolute;\n    transition: transform 0.2s;\n    margin-left:50px;\n\n    .overlay{\n        position: absolute;\n        top:0;\n        left:0;\n        width:100%;\n        height: 100%;\n        background: linear-gradient(45deg,#191426,transparent);\n        transition: opacity 0.5s;\n    }\n\n    \n    \n    .textWrapper{\n        position:absolute;\n        bottom: 0;\n        /* border: 1px solid white; */\n        left: -50px;\n        width: 150px;\n        font-size: 25px;\n        font-weight:700;\n        /* padding-bottom:10px; */\n        color: white;\n        \n        img{\n            width:30px;\n            margin-right:5px;\n            margin-top:15px;\n        }\n    }\n\n    .textWrapper::after{\n        bottom:45px;\n        left:0;\n        content:"";\n        position: absolute;\n        width:100%;\n        height: 4px;\n        box-shadow: 0 0 15px 0px black;\n        background: white;\n    }\n\n    .bgImage {\n        width:100%;\n        display: block;\n    }\n\n    .techStack{\n        position : absolute;\n        top: 0;\n        bottom: 0;\n        right:0;\n        display: flex;\n        flex-direction: column;\n\n        img{\n            transition: transform 0.7s;\n            transform: translateX(55%)\n        }\n\n\n    }\n    &: hover{\n        z-index:2;\n        transform: scale(1.075);\n        box-shadow: 0px 0px 100px 15px black;\n        \n        .textWrapper{\n            text-shadow: 0 0 8px black;\n        }\n        .overlay{\n            opacity: 0;\n        }\n        .techStack{\n            img{\n\n            transform: scale(1.3) translateX(60%)\n            }\n        }\n    }\n    \n    @media only screen and (max-width: 1450px) {\n        width: 350px;\n\n    }\n\n    @media only screen and (max-width: 1350px) {\n        width: 300px;\n\n    }\n\n    @media only screen and (max-width: 1200px) {\n        width: 290px;\n\n    }\n\n    @media only screen and (max-width: 1100px) {\n        width: 70%;\n        position: static;\n        margin:  30px 10px 30px 50px;\n    }\n']);return G=function(){return e},e}var M=d.a.div(G()),Y=d.a.img(H());function _(e){var n=e.name;return r.a.createElement(Y,{src:"./images/icons/".concat(n,".svg")})}var T=function(e){var n=e.data,t=n.name,a=n.image,l=n.stack,i=n.gitHubLink,o=n.liveLink,c=n.videoLink;return r.a.createElement(M,{style:e.location},r.a.createElement("div",{style:{position:"relative"}},r.a.createElement("div",{className:"overlay"}),r.a.createElement("div",{className:"textWrapper"},t,r.a.createElement("br",null),i&&r.a.createElement("a",{href:i,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"./images/icons/github.svg",alt:"github icon"})),o&&r.a.createElement("a",{href:o,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"./images/icons/chain.svg",alt:"liveIcon"})),c&&r.a.createElement("a",{href:c,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"./images/icons/play.png",alt:"playIcon"}))),r.a.createElement("div",{className:"techStack"},l.map((function(e){return r.a.createElement(_,{key:e,name:e})}))),r.a.createElement("img",{className:"bgImage",src:a,alt:t})))};function R(){var e=Object(p.a)(["\n    background:linear-gradient(#191426,#0f0d16);\n    position: relative;\n    min-height: 1200px;\n    border: 1px solid #00000000;\n"]);return R=function(){return e},e}var W=d.a.div(R());var X=function(){var e=[{top:"100px",left:"2%"},{top:"220px",left:"34%"},{top:"180px",right:"4%"},{top:"550px",left:"2%"},{top:"500px",left:"34%"},{top:"580px",right:"4%"},{top:"850px",left:"10%"},{top:"880px",right:"15%"}];return r.a.createElement(W,{id:"projects"},r.a.createElement(g,null),r.a.createElement(E,null,r.a.createElement(x,null,"Projects")),r.a.createElement(E,null,null===C||void 0===C?void 0:C.map((function(n,t){return r.a.createElement(T,{data:n,location:e[t],key:n.name})}))))};function B(){var e=Object(p.a)(["\n    color: #eeff31;\n"]);return B=function(){return e},e}function J(){var e=Object(p.a)(["\n    color: #e39d24;\n"]);return J=function(){return e},e}function K(){var e=Object(p.a)(["\n    display:flex;\n    color: #24e33a;\n    flex-wrap: wrap;\n    &:div{\n       display:flex; \n    }\n"]);return K=function(){return e},e}function A(){var e=Object(p.a)(["\n    color: #24e394;\n"]);return A=function(){return e},e}function F(){var e=Object(p.a)(["\n    color: #e3244c;\n"]);return F=function(){return e},e}function P(){var e=Object(p.a)(["\n     color:#5918df;\n"]);return P=function(){return e},e}function q(){var e=Object(p.a)(["\n    position: relative;\n    border: 1px solid transparent;\n    background-color: #14121c;\n"]);return q=function(){return e},e}function D(){var e=Object(p.a)(["\n    color: white;\n    line-height: 1.5;\n    font-size: 20px;\n    letter-spacing: 1.5px;\n    .blue{\n        color:#5918df;\n    }\n    .yellow{\n        color:#eeff31;\n    }\n    .dot{\n        color: #3b3553;\n    }\n    .comment{\n        color: #78707e\n    }\n    @media only screen and (max-width: 900px) {\n        .dot{\n            display: none;\n        }\n        font-size: 18px;\n\n    }\n    div{\n        display: flex;\n        flex-wrap: wrap;\n        align-items: center;\n    }\n"]);return D=function(){return e},e}var U=Object(d.a)(E)(D()),V=d.a.div(q()),Q=d.a.span(P()),Z=d.a.span(F()),$=d.a.span(A()),ee=d.a.span(K()),ne=d.a.span(J()),te=d.a.span(B());var ae=function(){return r.a.createElement(V,{id:"about"},r.a.createElement(g,null),r.a.createElement(U,null,r.a.createElement(x,null,"About"),r.a.createElement("div",null,r.a.createElement("span",{className:"blue"},"class\xa0"),r.a.createElement("span",{className:"yellow"},"KeshavMahawar "),"{"),r.a.createElement("div",null,r.a.createElement("span",{className:"dot"},"...."),r.a.createElement("span",{className:"comment"},"// I'm ambitious and love new challenges :)")),r.a.createElement("div",null,r.a.createElement("span",{className:"dot"},"...."),r.a.createElement("span",{className:"comment"},"// My variety of skills is continuously expanding.")),r.a.createElement("div",null,r.a.createElement("span",{className:"dot"},"...."),r.a.createElement(te,null,"constructor"),"() {"),r.a.createElement("div",null,r.a.createElement("span",{className:"dot"},"........"),r.a.createElement(Z,null,"this"),".",r.a.createElement($,null,"name"),r.a.createElement(Z,null,"\xa0=\xa0 "),r.a.createElement(ee,null,"'Keshav Mahawar'")),r.a.createElement("div",null,r.a.createElement("span",{className:"dot"},"........"),r.a.createElement(Z,null,"this"),".",r.a.createElement($,null,"dateOfBirthTimestamp"),r.a.createElement(Z,null,"\xa0=\xa0"),r.a.createElement(ne,null,"926879400000")),r.a.createElement("div",null,r.a.createElement("span",{className:"dot"},"........"),r.a.createElement(Z,null,"this"),".",r.a.createElement($,null,"email"),r.a.createElement(Z,null,"\xa0=\xa0 "),r.a.createElement(ee,null,"'kes.mahawar@gamil.com'")),r.a.createElement("div",null,r.a.createElement("span",{className:"dot"},"........"),r.a.createElement(Z,null,"this"),".",r.a.createElement($,null,"phoneNo"),r.a.createElement(Z,null,"\xa0=\xa0"),r.a.createElement(ne,null,"+91-7891442004")),r.a.createElement("div",null,r.a.createElement("span",{className:"dot"},"...."),"}"),r.a.createElement("div",null,r.a.createElement("span",{className:"dot"},"...."),r.a.createElement(te,null,"skills"),"()"," {"),r.a.createElement("div",null,r.a.createElement("span",{className:"dot"},"........"),r.a.createElement(Q,null,"return"),"[",r.a.createElement(ee,null,r.a.createElement("div",null,"'",r.a.createElement(w,{name:"html"})," HTML',"),r.a.createElement("div",null,"'",r.a.createElement(w,{name:"css"}),"CSS',"),r.a.createElement("div",null,"'",r.a.createElement(w,{name:"javascript"})," JS',"),"'",r.a.createElement(w,{name:"react"})," React',",r.a.createElement("div",null,"'",r.a.createElement(w,{name:"redux"})," Redux',"),r.a.createElement("div",null,"'",r.a.createElement(w,{name:"bootstrap"})," Bootstrap'"),r.a.createElement("div",null,"'",r.a.createElement(w,{name:"node"})," Node.js',"),r.a.createElement("div",null,"'",r.a.createElement(w,{name:"express"}),"express',"),r.a.createElement("div",null,"'",r.a.createElement(w,{name:"mongodb"}),"',")),"]"),r.a.createElement("div",null,r.a.createElement("span",{className:"dot"},"...."),r.a.createElement(te,null,"tools"),"()"," {"),r.a.createElement("div",null,r.a.createElement("span",{className:"dot"},"........"),r.a.createElement(Q,null,"return"),"[",r.a.createElement(ee,null,r.a.createElement("div",null,"'",r.a.createElement(w,{name:"git"})," Git' ,"),r.a.createElement("div",null,"'",r.a.createElement(w,{name:"npm"})," Npm'")),"]"),r.a.createElement("div",null,r.a.createElement("span",{className:"dot"},"...."),"}"),r.a.createElement("div",null,"}")))};function re(){var e=Object(p.a)(["\n    height: 40px;\n    margin: 10px;\n"]);return re=function(){return e},e}function le(){var e=Object(p.a)(["\n    height: 500px;\n    .container{\n        position: absolute;\n        top: 50%;\n        transform: translateY(-50%);\n        .heading{\n            color: white;\n            font-size: 45px;\n        }\n        .contactGrid{\n            width: 800px;\n            display: grid;\n            grid-template-columns: 1fr 1fr 1fr;\n            font-size: 30px;\n            div a{\n                color: white;\n                display: flex;\n                text-decoration: none;\n                align-items: center;\n            }\n            \n            @media only screen and (max-width: 1000px) {\n                grid-template-columns: 1fr 1fr;\n                font-size: 35px;\n            }\n\n            @media only screen and (max-width: 650px) {\n                grid-template-columns: 1fr;\n                font-size: 30px;\n            }\n        }\n    }\n"]);return le=function(){return e},e}function ie(){var e=Object(p.a)(["\n    position: relative;\n    border: 1px solid transparent;\n    background-color: #0e0d10;\n"]);return ie=function(){return e},e}var oe=d.a.div(ie()),ce=Object(d.a)(E)(le()),me=d.a.img(re());var se=function(){return r.a.createElement(oe,{id:"contact"},r.a.createElement(g,null),r.a.createElement(ce,null,r.a.createElement(x,null,"Contact"),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"heading"},"Find me on :"),r.a.createElement("div",{className:"contactGrid"},r.a.createElement("div",null,r.a.createElement("a",{href:"https://www.linkedin.com/in/keshav-m-191a8b131/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(me,{src:"./images/icons/linkedin.svg"}),"Linked in")),r.a.createElement("div",null,r.a.createElement("a",{href:"https://github.com/keshavmahawar",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(me,{src:"./images/icons/github.svg"}),"Github")),r.a.createElement("div",null,r.a.createElement("a",{href:"mailto:kes.mahawar@gmail.com",rel:"noopener noreferrer"},r.a.createElement(me,{src:"./images/icons/gmail.svg"}),"kes.mahawar@gmail.com")),r.a.createElement("div",null,r.a.createElement("a",{href:"https://twitter.com/kesmahawar",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(me,{src:"./images/icons/twitter.svg"}),"Twitter")),r.a.createElement("div",null,r.a.createElement("a",{href:"https://medium.com/@kesmahawar",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(me,{src:"./images/icons/medium.svg"}),"Medium"))))))};function pe(){var e=Object(p.a)(["\n    position: fixed;\n    top:0;\n    width: 90%;\n    display: flex;\n    padding:0 5%;\n    align-items: baseline;\n    z-index:3;\n    background:linear-gradient(#0f0d16,transparent);\n    transition: all 1s;\n    transform: translateY(",');\n\n    .left{\n        flex:1;\n        .heading{\n            color: white;\n            font-weight: bold;\n            font-size: 2.1rem;\n            margin: 5px 0;\n        }\n        \n\n    }\n    a{\n        text-decoration:none;\n        color: white;\n    }\n    .right{\n        display: flex;\n        & > div{\n            color: white;\n            font-size:23px;\n            font-weight:bold;\n            margin: 15px 10px;\n            opacity: 0.7;\n            transition: opacity 0.5s;\n        }   \n        & > div:hover{\n            opacity: 1;\n        }\n        & > div::after{\n            content: " />";\n            color: #494949;\n\n        }\n    }\n    @media only screen and (max-width: 600px) {\n        .right div{\n            font-size:19px;\n        }\n        .right div::after{\n            display: none;\n        }\n    }\n    @media only screen and (max-width: 900px) {\n        .heading{\n            display:none;\n        }        \n    }\n\n']);return pe=function(){return e},e}var de=d.a.div(pe(),(function(e){return e.hidden?"-100%":"0%"}));var ue=function(e){return console.log("render"),r.a.createElement(de,{hidden:e.hidden},r.a.createElement("div",{className:"left"},r.a.createElement("div",{className:"heading"},"< Keshav />")),r.a.createElement("div",{className:"right"},r.a.createElement("div",null,r.a.createElement("a",{href:"#start"},"Start")),r.a.createElement("div",null,r.a.createElement("a",{href:"#projects"},"Projects")),r.a.createElement("div",null,r.a.createElement("a",{href:"#about"},"About")),r.a.createElement("div",null,r.a.createElement("a",{href:"#contact"},"Contact"))))},he=(t(24),function(e){Object(m.a)(t,e);var n=Object(s.a)(t);function t(e){var a;return Object(o.a)(this,t),(a=n.call(this,e)).state={hidden:!1},a.prev=window.pageYOffset,a}return Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("scroll",(function(){var n=window.pageYOffset;n>e.prev&&!e.state.hidden?e.setState({hidden:!0}):n<=e.prev&&e.state.hidden&&e.setState({hidden:!1}),e.prev=n}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"app"},r.a.createElement(ue,{hidden:this.state.hidden}),r.a.createElement(I,null),r.a.createElement(X,null),r.a.createElement(ae,null),r.a.createElement(se,null))}}]),t}(r.a.Component));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(he,null)),document.getElementById("root"))},4:function(e){e.exports=JSON.parse('[{"name":"Bolt Edge","image":"./images/projects/p7.png","stack":["react","node","mongodb","express"],"gitHubLink":"","liveLink":"http://15.206.81.222/","videoLink":"https://drive.google.com/file/d/1FqjHTDnR2-Rz02d332AGqnXTcMVOjnx4/view?usp=sharing"},{"name":"Trivia Game","image":"./images/projects/p1.png","stack":["html","css","javascript"],"gitHubLink":"https://github.com/keshavmahawar/TriviaGame","liveLink":"https://keshavmahawar.github.io/TriviaGame/index.html"},{"name":"2 Players Chess","image":"./images/projects/p2.png","stack":["html","css","javascript"],"gitHubLink":"https://github.com/keshavmahawar/ChessGame","liveLink":"https://keshavmahawar.github.io/ChessGame/"},{"name":"Medium Clone","image":"./images/projects/p3.png","stack":["bootstrap","es6"],"gitHubLink":"https://github.com/keshavmahawar/medium-clone","liveLink":"https://keshavmahawar.github.io/medium-clone/"},{"name":"Chitrakala","image":"./images/projects/p5.png","stack":["react"],"gitHubLink":"https://github.com/arjun1237/Chitrakala_React","liveLink":"https://chitrakala.vercel.app/"},{"name":"Calculator","image":"./images/projects/p4.png","stack":["react","css"],"gitHubLink":"https://github.com/keshavmahawar/Calculator_react","liveLink":"https://calculator-react-three.vercel.app/"},{"name":"Sudoku Solver","image":"./images/projects/p6.png","stack":["es6"],"gitHubLink":"https://github.com/keshavmahawar/sudokuSolver","liveLink":"https://keshavmahawar.github.io/sudokuSolver/sudoku.html"},{"name":"Simba Webpage","image":"./images/projects/p8.png","stack":["html","css"],"gitHubLink":"https://github.com/keshavmahawar/Simba","liveLink":"https://keshavmahawar.github.io/Simba/"}]')}},[[16,1,2]]]);
//# sourceMappingURL=main.2925c43d.chunk.js.map
(this["webpackJsonpplabs-react"]=this["webpackJsonpplabs-react"]||[]).push([[0],{193:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(9),i=n.n(c),o=(n(85),n(86),n(21)),l=n(33),s=n(18),b=n(37),u=n.n(b),d=function(e,t){var n=Object(a.useState)({name:"",email:"",phoneNumber:"",dob:""}),r=Object(s.a)(n,2),c=r[0],i=r[1],b=Object(a.useState)({}),d=Object(s.a)(b,2),j=d[0],h=d[1],m=Object(a.useState)(!1),O=Object(s.a)(m,2),p=O[0],x=O[1];return Object(a.useEffect)((function(){0===Object.keys(j).length&&p&&u.a.post("http://127.0.0.1:5000/",c).then((function(t){200===t.status&&e.history.push("/users")})).catch((function(e){console.log("error occured",e.response),h(Object(l.a)(Object(l.a)({},j),{},{phoneNumber:e.response.data})),console.log(j)}))}),[j]),{values:c,handleChange:function(e){var t=e.target,n=t.value,a=t.name;i(Object(l.a)(Object(l.a)({},c),{},Object(o.a)({},a,n))),console.log(c),console.log(j)},handleSubmit:function(e){e.preventDefault(),h(t(c)),x(!0)},errors:j}},j=n(73),h=n.n(j);function m(e){var t={};if(e.name.trim()||(t.name="Name required"),e.email?h.a.isEmail(e.email)||(t.email="Email address is invalid"):t.email="Email required",e.dob){var n=new Date(e.dob),a=new Date;new Date(a.getFullYear()-18,a.getMonth(),a.getDate()).getTime()<n.getTime()&&(t.dob="You should be 18 years old",console.log(e.dob))}else t.dob="DOB required";return t}var O=n(227),p=n(223),x=n(228),f=n(7),v=Object(p.a)((function(e){return{root:{display:"block",width:"100%",minWidth:120,alignItems:"center",justifyContent:"center",alignSelf:"center",justify:"center","& .MuiTextField-root":{margin:e.spacing(2)}}}})),g=function(e){var t=d(e,m),n=t.values,a=t.handleChange,r=t.handleSubmit,c=t.errors,i=v();return Object(f.jsxs)("form",{className:i.root,noValidate:!0,onSubmit:r,children:[Object(f.jsx)("div",{children:Object(f.jsx)(O.a,{error:!!c.name,id:"name",label:"Name",variant:"outlined",name:"name",onChange:a,helperText:c.name,value:n.name})}),Object(f.jsx)("div",{children:Object(f.jsx)(O.a,{error:!!c.email,id:"email",label:"Email",variant:"outlined",name:"email",onChange:a,helperText:c.email,value:n.email})}),Object(f.jsx)("div",{children:Object(f.jsx)(O.a,{error:!!c.phoneNumber,id:"phoneNumber",label:"Phone Number",variant:"outlined",name:"phoneNumber",onChange:a,value:n.phoneNumber,helperText:c.phoneNumber})}),Object(f.jsx)("div",{children:Object(f.jsx)(O.a,{error:!!c.dob,id:"dob",type:"date",variant:"outlined",name:"dob",onChange:a,helperText:c.dob,value:n.dob})}),Object(f.jsx)("div",{children:Object(f.jsx)(x.a,{type:"submit",variant:"contained",color:"primary",size:"medium",children:"Submit"})})]})},N=n(75),y=n(11),S=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){u.a.get("http://127.0.0.1:5000/users").then((function(e){return r(e.data)})).catch((function(e){return alert("error",e)}))}),[]),Object(f.jsx)("table",{children:Object(f.jsxs)("tbody",{children:[Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{children:"Name"}),Object(f.jsx)("th",{children:"Email"}),Object(f.jsx)("th",{children:"Phone Number"}),Object(f.jsx)("th",{children:"Date of Birth"})]}),n.map((function(e,t){return Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:e.name}),Object(f.jsx)("td",{children:e.email}),Object(f.jsx)("td",{children:e.phoneNumber}),Object(f.jsx)("td",{children:e.dob})]},t)}))]})})};var C=function(){return Object(f.jsx)(N.a,{children:Object(f.jsx)("div",{className:"App",children:Object(f.jsxs)(y.c,{children:[Object(f.jsx)(y.a,{path:"/",exact:!0,component:g}),Object(f.jsx)(y.a,{path:"/users",exact:!0,component:S})]})})})},T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,230)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};i.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(C,{})}),document.getElementById("root")),T()},85:function(e,t,n){},86:function(e,t,n){}},[[193,1,2]]]);
//# sourceMappingURL=main.fb0bca49.chunk.js.map
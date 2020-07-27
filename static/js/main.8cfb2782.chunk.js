(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{18:function(e,t,a){e.exports=a(28)},23:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(3),l=a.n(r),o=a(14),m=a(11),u=a(12),i=a(16),s=a(13),b=a(32),f=a(15),E=a(30),d=(a(23),function(e){var t=e.submitForm,a=e.name,r=e.contactName,l=e.number,o=e.contactNumber,m=Object(n.useState)(!1),u=Object(f.a)(m,2),i=u[0],s=u[1];return Object(n.useEffect)((function(){s(!0)}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement(E.a,{in:i,classNames:"title",timeout:500,mountOnEnter:!0},c.a.createElement("h2",{className:"title"},"Phonebook")),c.a.createElement("form",{className:"form",onSubmit:t},c.a.createElement("span",null,"Name"),c.a.createElement("br",null),c.a.createElement("input",{className:"input_name",type:"text",name:"name",value:a,onChange:r}),c.a.createElement("br",null),c.a.createElement("span",null,"Number"),c.a.createElement("br",null),c.a.createElement("input",{className:"input_number",type:"text",name:"number",value:l,onChange:o}),c.a.createElement("br",null),c.a.createElement("button",{className:"submit_btn",type:"submit"},"Add contact")))}),p=a(31),h=(a(26),function(e){var t=e.filtered,a=e.filterValue,n=e.deleteContact;return c.a.createElement(c.a.Fragment,null,t.length>1&&c.a.createElement("div",{className:"search-container"},c.a.createElement("span",null,"Find contacts by name"),c.a.createElement("br",null),c.a.createElement("input",{type:"text",onChange:a})),c.a.createElement("div",{className:"search_info"},c.a.createElement(p.a,{component:"ul",className:"contact_list"},t.map((function(e){return c.a.createElement(E.a,{key:e.id,classNames:"list__item",timeout:800},c.a.createElement("li",{className:"contact_item",key:e.id},e.name," : ",e.number,c.a.createElement("button",{className:"delete_btn",type:"button",id:e.id,onClick:n},"Delete")))})))))}),g=(a(27),function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={contacts:[],filter:"",name:"",number:"",value:!1},e.contactName=function(t){e.setState({name:t.target.value})},e.contactNumber=function(t){e.setState({number:t.target.value})},e.filterValue=function(t){e.setState({filter:t.target.value})},e.getFilteredContacts=function(){var t=e.state,a=t.contacts,n=t.filter;return a.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}))},e.deleteContact=function(t){var a=t.target.id;e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==a}))}}))},e.submitForm=function(t){t.preventDefault();var a=e.state,n=a.name,c=a.number,r=a.contacts,l=a.value;if(r.find((function(t){return t.name===e.state.name})))e.toggle(l);else{var m={name:n,number:c,id:Object(b.a)()};e.setState((function(e){return{contacts:[].concat(Object(o.a)(e.contacts),[m]),filter:"",name:"",number:""}}))}},e.toggle=function(t){e.setState({value:!t})},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("contacts");e&&this.setState({contacts:JSON.parse(e)})}},{key:"componentDidUpdate",value:function(e,t){t.contacts!==this.state.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var e=this,t=this.getFilteredContacts(),a=this.state,n=a.name,r=a.number,l=a.value;return c.a.createElement(c.a.Fragment,null,c.a.createElement(E.a,{in:l,classNames:"alert",timeout:500,mountOnEnter:!0,unmountOnExit:!0},c.a.createElement("button",{className:"alert",onClick:function(){e.toggle(!0)}},"".concat(n," alredy exist"))),c.a.createElement(d,{submitForm:this.submitForm,name:n,contactName:this.contactName,number:r,contactNumber:this.contactNumber}),c.a.createElement(h,{filtered:t,filterValue:this.filterValue,deleteContact:this.deleteContact}))}}]),a}(n.Component));l.a.render(c.a.createElement(c.a.Fragment,null,c.a.createElement(g,null)),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.8cfb2782.chunk.js.map
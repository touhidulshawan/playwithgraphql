(this.webpackJsonpbookstore=this.webpackJsonpbookstore||[]).push([[0],{40:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var r,n,c,s,l,o=a(3),i=a.n(o),b=a(29),d=a.n(b),u=(a(40),a(55)),j=a(57),m=a(54),x=a(10),h=a(58),O=a(16),g=a(56),p=Object(g.a)(r||(r=Object(O.a)(["\n  query GET_BOOKS {\n    books {\n      name\n      genre\n      id\n      author {\n        name\n      }\n    }\n  }\n"]))),N=Object(g.a)(n||(n=Object(O.a)(["\n  query GET_BOOK_WITH_AUTHOR_WITH_BOOKS($id: ID!) {\n    book(id: $id) {\n      name\n      genre\n      author {\n        name\n        books {\n          id\n          name\n        }\n      }\n    }\n  }\n"]))),f=Object(g.a)(c||(c=Object(O.a)(["\n  query GET_AUTHORS {\n    authors {\n      id\n      name\n    }\n  }\n"]))),y=Object(g.a)(s||(s=Object(O.a)(["\n  mutation ADD_BOOK($name: String!, $genre: String!, $authorID: ID!) {\n    addBook(name: $name, genre: $genre, authorID: $authorID) {\n      name\n    }\n  }\n"]))),v=Object(g.a)(l||(l=Object(O.a)(["\n  mutation ADD_AUTHOR($name: String!, $age: Int) {\n    addAuthor(name: $name, age: $age) {\n      name\n    }\n  }\n"]))),k=a(2),w=function(e){var t=e.bookID,a=Object(h.a)(N,{variables:{id:t}}),r=a.loading,n=a.data;return!n&&r?Object(k.jsx)("p",{className:"text-center mt-4 text-yellow-600 p-4 uppercase tracking-widest",children:"Loading Book Details"}):n?Object(k.jsxs)("div",{className:"bg-purple-100 p-4 min-h-screen",children:[Object(k.jsxs)("div",{children:[Object(k.jsx)("h3",{className:"text-2xl text-purple-900 inline-block",children:n.book.name}),Object(k.jsx)("small",{className:"text-xs bg-red-200 px-2 py-1 rounded-3xl font-bold text-red-700 inline ml-2",children:n.book.genre})]}),Object(k.jsx)("blockquote",{className:"text-pink-600 pb-2 border-b-2 border-purple-200 mb-2",children:n.book.author.name}),Object(k.jsxs)("div",{children:[Object(k.jsxs)("h4",{className:"text-lg text-purple-500",children:["Other Books by the ",n.book.author.name]}),Object(k.jsx)("ul",{className:"my-2",children:n.book.author.books.map((function(e){return Object(k.jsx)("li",{className:"text-base text-gray-800 list-inside list-disc py-1",children:e.name},e.id)}))})]})]}):Object(k.jsx)("p",{className:"text-center mt-4 text-red-600 p-4 uppercase tracking-widest",children:"No Book Select Yet"})},S=function(){var e=Object(h.a)(p),t=e.loading,a=e.error,r=e.data,n=Object(o.useState)(null),c=Object(x.a)(n,2),s=c[0],l=c[1];return t?"Loading....":a?"Error: ".concat(a.message):Object(k.jsxs)("div",{className:"grid grid-cols-2",children:[Object(k.jsx)("div",{className:"min-w-96 my-4 px-2",children:Object(k.jsx)("ul",{className:"grid grid-cols-2 gap-4",children:r.books.map((function(e){return Object(k.jsx)("li",{className:"bg-blue-200 text-blue-900 p-2 border-b-4 border-r-4 border-blue-400 shadow-sm rounded-sm cursor-pointer",onClick:function(){return l(e.id)},children:e.name},e.id)}))})}),Object(k.jsx)("div",{children:Object(k.jsx)(w,{bookID:s})})]})},D=a(59),A=function(){var e=Object(o.useState)(""),t=Object(x.a)(e,2),a=t[0],r=t[1],n=Object(o.useState)(""),c=Object(x.a)(n,2),s=c[0],l=c[1],i=Object(o.useState)(""),b=Object(x.a)(i,2),d=b[0],u=b[1],j=Object(h.a)(f),m=j.loading,O=j.error,g=j.data,N=Object(D.a)(y),v=Object(x.a)(N,1)[0];if(O)return Object(k.jsx)("pre",{children:O.message});return Object(k.jsxs)("form",{onSubmit:function(e){e.preventDefault();try{v({variables:{name:a,genre:s,authorID:d},refetchQueries:[{query:p}]})}catch(t){alert("Please fill all data correctly",t.message)}r(""),l(""),u("")},children:[Object(k.jsxs)("div",{className:"flex justify-between items-center",children:[Object(k.jsx)("label",{className:"text-gray-700 text-sm p-2",htmlFor:"bookName",children:"Book Name"}),Object(k.jsx)("input",{className:"bg-blue-100 px-2 text-blue-900",type:"text",name:"bookName",id:"bookName",value:a,required:!0,onChange:function(e){return r(e.target.value)}})]}),Object(k.jsxs)("div",{className:"flex justify-between items-center",children:[Object(k.jsx)("label",{className:"text-gray-700 text-sm  p-2",htmlFor:"genreName",children:"Genre"}),Object(k.jsx)("input",{className:"bg-blue-100 px-2 text-blue-900",type:"text",name:"genreName",id:"genreName",value:s,required:!0,onChange:function(e){return l(e.target.value)}})]}),Object(k.jsxs)("div",{className:"flex justify-between items-center",children:[Object(k.jsx)("label",{className:"text-gray-700 text-sm p-2",htmlFor:"author",children:"Author"}),Object(k.jsxs)("select",{className:"bg-gray-100 text-gray-800 border-2 border-gray-600 rounded",name:"author",id:"author",value:d,required:!0,onChange:function(e){return u(e.target.value)},children:[Object(k.jsx)("option",{value:"",className:"bg-red-300 text-red-800 tracking-wider",children:"Select Author"}),m?Object(k.jsx)("option",{children:"Loading Authors Data"}):g.authors.map((function(e){return Object(k.jsx)("option",{value:e.id,children:e.name},e.id)}))]})]}),Object(k.jsx)("button",{type:"submit",className:"bg-green-600 w-10 h-10 text-2xl text-green-100 rounded-full border-b border-l-4 border-green-700 shadow-lg",children:"+"})]})},I=function(){var e=Object(D.a)(v),t=Object(x.a)(e,1)[0],a=Object(o.useState)(""),r=Object(x.a)(a,2),n=r[0],c=r[1],s=Object(o.useState)(0),l=Object(x.a)(s,2),i=l[0],b=l[1];return Object(k.jsxs)("form",{onSubmit:function(e){e.preventDefault();try{t({variables:{name:n,age:parseInt(i)},refetchQueries:[{query:f}]})}catch(a){window.alert("Please fill out all info correctly",+a.message)}c(""),b(0)},children:[Object(k.jsxs)("div",{className:"flex justify-between items-center",children:[Object(k.jsx)("label",{className:"text-gray-700 text-sm p-2",htmlFor:"authorName",children:"Author Name"}),Object(k.jsx)("input",{className:"bg-blue-100 px-2 text-blue-900",type:"text",name:"authorName",id:"authorName",required:!0,value:n,onChange:function(e){return c(e.target.value)}})]}),Object(k.jsxs)("div",{className:"flex justify-between items-center",children:[Object(k.jsx)("label",{className:"text-gray-700 text-sm p-2",htmlFor:"authorAge",children:"Author Age"}),Object(k.jsx)("input",{className:"bg-blue-100 px-2 text-blue-900",type:"number",name:"authoAge",id:"authorAge",value:i,onChange:function(e){return b(e.target.value)}})]}),Object(k.jsx)("button",{className:"bg-green-600 w-10 h-10 text-2xl text-green-100 rounded-full border-b border-l-4 border-green-700 shadow-lg",type:"submit",children:"+"})]})},$=function(){return Object(k.jsxs)("div",{className:"bg-gray-100  min-h-screen",children:[Object(k.jsx)("header",{className:"bg-gray-900 p-4",children:Object(k.jsx)("h1",{className:"text-gray-200 text-2xl uppercase text-center",children:"Book Store"})}),Object(k.jsxs)("main",{className:"grid grid-cols-2 grid-rows-2",children:[Object(k.jsx)("section",{className:"col-span-2",children:Object(k.jsx)(S,{})}),Object(k.jsxs)("div",{className:"w-screen fixed left-0 bottom-0 flex justify-between items-center  bg-gray-100 p-4 border-t-2 border-gray-300",children:[Object(k.jsx)("section",{className:"",children:Object(k.jsx)(A,{})}),Object(k.jsx)("section",{children:Object(k.jsx)(I,{})})]})]})]})},q=new u.a({uri:"http://touhidulshawan-books-rest-api.herokuapp.com/graphql",cache:new j.a});d.a.render(Object(k.jsx)(i.a.StrictMode,{children:Object(k.jsx)(m.a,{client:q,children:Object(k.jsx)($,{})})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.3da68121.chunk.js.map
const sheetURL="https://docs.google.com/spreadsheets/d/e/2PACX-1vSezjEZM3mDav5Zr1rGK3yOPuY3YTnMg3xWGFZ1PRcn3BZmd7q9xGZcF6MBdYgN26pKESNq6q3soTnI/pub?gid=0&single=true&output=csv";

fetch(sheetURL)
.then(res=>res.text())
.then(data=>{

const rows=data.split("\n").slice(1);

const container=document.getElementById("projects");

rows.forEach(row=>{

const cols=row.split(",");

const title=cols[0];
const desc=cols[1];
const img=cols[2];
const link=cols[3];

container.innerHTML+=`

<div class="card">

<img src="${img}" style="width:100%;border-radius:10px">

<h3>${title}</h3>

<p>${desc}</p>

<a href="${link}" target="_blank">View Project</a>

</div>

`;

});

});

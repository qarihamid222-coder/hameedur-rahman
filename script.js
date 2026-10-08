const chat=document.getElementById("chat");
function openChat(){chat.style.display="block"}
function closeChat(){chat.style.display="none"}
document.querySelector(".hamburger").addEventListener("click",()=>{const n=document.querySelector("nav");n.style.display=n.style.display==="flex"?"none":"flex";if(n.style.display==="flex"){n.style.position="absolute";n.style.top="72px";n.style.right="5%";n.style.flexDirection="column";n.style.background="#fff";n.style.padding="15px";n.style.borderRadius="14px"}});

document.getElementById("chatForm").addEventListener("submit",e=>{
 e.preventDefault(); const input=document.getElementById("chatInput"),q=input.value.trim(); if(!q)return;
 const body=document.getElementById("chatBody"); body.insertAdjacentHTML("beforeend",`<div class="user">${safe(q)}</div>`);
 let a="آپ Arabic Grammar، قرآن یا Arabic Language کلاس کے بارے میں سوال کر سکتے ہیں۔ مزید معلومات کے لیے WhatsApp پر رابطہ کریں۔";
 const x=q.toLowerCase();
 if(x.includes("grammar")||q.includes("گرامر"))a="Arabic Grammar میں نحو، صرف، جملوں کی ساخت اور عربی قواعد آسان انداز میں پڑھائے جائیں گے۔";
 else if(x.includes("quran")||q.includes("قرآن"))a="قرآن کی آن لائن کلاس بچوں اور بڑوں دونوں کے لیے رکھی جا سکتی ہے۔";
 else if(x.includes("class")||q.includes("کلاس"))a="کلاس کے لیے اپنی مطلوبہ کلاس اور طالب علم کی معلومات WhatsApp پر بھیجیں۔";
 else if(x.includes("price")||q.includes("فیس"))a="فیس اور اوقات کی تازہ معلومات کے لیے WhatsApp پر براہِ راست رابطہ کریں۔";
 body.insertAdjacentHTML("beforeend",`<div class="bot">${a}</div>`);input.value="";body.scrollTop=body.scrollHeight;
});
function safe(s){return s.replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]))}
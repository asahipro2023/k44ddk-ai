(function () {

    if (document.getElementById("k44ddk-ai-button")) return;

    //========================
    // CSS
    //========================
    const style = document.createElement("style");

    style.textContent = `
    #k44ddk-ai-button{
        position:fixed;
        right:20px;
        bottom:20px;
        width:60px;
        height:60px;
        border-radius:50%;
        background:#0d6efd;
        color:#fff;
        display:flex;
        align-items:center;
        justify-content:center;
        font-size:28px;
        cursor:pointer;
        box-shadow:0 8px 25px rgba(0,0,0,.25);
        z-index:999999;
        transition:.3s;
        user-select:none;
    }

    #k44ddk-ai-button:hover{
        transform:scale(1.08);
    }

    #k44ddk-ai-chat{
        position:fixed;
        right:20px;
        bottom:90px;
        width:360px;
        height:520px;
        background:#fff;
        border-radius:18px;
        overflow:hidden;
        box-shadow:0 15px 45px rgba(0,0,0,.25);
        display:none;
        flex-direction:column;
        z-index:999998;
        font-family:Arial,sans-serif;
    }

    #k44ddk-header{
        background:#0d6efd;
        color:white;
        padding:15px;
        display:flex;
        justify-content:space-between;
        align-items:center;
        font-size:18px;
        font-weight:bold;
    }

    #k44ddk-close{
        cursor:pointer;
        font-size:24px;
    }

    #k44ddk-body{
        flex:1;
        padding:15px;
        overflow-y:auto;
        background:#f5f5f5;
    }

    #k44ddk-footer{
        padding:10px;
        border-top:1px solid #ddd;
        display:flex;
        gap:8px;
    }

    #k44ddk-input{
        flex:1;
        padding:10px;
        border:1px solid #ccc;
        border-radius:8px;
        outline:none;
    }

    #k44ddk-send{
        background:#0d6efd;
        color:white;
        border:none;
        padding:10px 18px;
        border-radius:8px;
        cursor:pointer;
    }

    .message{
        margin-bottom:10px;
        display:flex;
    }

    .message.user{
        justify-content:flex-end;
    }

    .message.bot{
        justify-content:flex-start;
    }

    .bubble{
        max-width:80%;
        padding:10px 14px;
        border-radius:14px;
        word-break:break-word;
    }

    .user .bubble{
        background:#0d6efd;
        color:white;
    }

    .bot .bubble{
        background:white;
        border:1px solid #ddd;
    }
    `;

    document.head.appendChild(style);

    //========================
    // Button
    //========================

    const button = document.createElement("div");
    button.id = "k44ddk-ai-button";
    button.innerHTML = "🤖";
    document.body.appendChild(button);

    //========================
    // Chat Window
    //========================

    const chat = document.createElement("div");

    chat.id = "k44ddk-ai-chat";

    chat.innerHTML = `
        <div id="k44ddk-header">
            <span>🤖 K44DDK AI</span>
            <span id="k44ddk-close">✕</span>
        </div>

        <div id="k44ddk-body"></div>

        <div id="k44ddk-footer">
            <input id="k44ddk-input" placeholder="Nhập tin nhắn...">
            <button id="k44ddk-send">Gửi</button>
        </div>
    `;

    document.body.appendChild(chat);

    const body = document.getElementById("k44ddk-body");
    const input = document.getElementById("k44ddk-input");
    const send = document.getElementById("k44ddk-send");

    //========================
    // Hiển thị tin nhắn
    //========================

    function addMessage(text, type){

        const message = document.createElement("div");
        message.className = "message " + type;

        const bubble = document.createElement("div");
        bubble.className = "bubble";
        bubble.textContent = text;

        message.appendChild(bubble);

        body.appendChild(message);

        body.scrollTop = body.scrollHeight;
    }

    addMessage("👋 Xin chào! Mình là K44DDK AI.", "bot");

    //========================
    // Gửi tin nhắn
    //========================

    function sendMessage(){

        const text = input.value.trim();

        if(text==="") return;

        addMessage(text,"user");

        input.value="";

        // AI giả lập
        setTimeout(function(){

            addMessage("Bạn vừa gửi: " + text,"bot");

        },500);

    }

    send.onclick = sendMessage;

    input.addEventListener("keydown",function(e){

        if(e.key==="Enter"){

            sendMessage();

        }

    });

    //========================
    // Mở / đóng cửa sổ
    //========================

    button.onclick=function(){

        chat.style.display="flex";

        input.focus();

    }

    document.getElementById("k44ddk-close").onclick=function(){

        chat.style.display="none";

    }

})();
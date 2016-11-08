///////////////////////////////////////////////////////////////////
var DrawTask = document.createElement('button'); // ստեղծում ենք նկարելու buttun-ը
DrawTask.setAttribute('type', 'button');
DrawTask.innerHTML='DrawTask';
DrawTask.setAttribute('onclick', 'Draw()');
DrawTask.setAttribute('id', 'TaskDraw');
DrawTask.setAttribute('class', 'header-button');
document.body.appendChild(DrawTask);
var clear = document.createElement('button'); // ստեղծում ենք ջնջելու buttun-ը
clear.setAttribute('type', 'button');
clear.innerHTML='Clear Task';
clear.setAttribute('class', 'header-button');
clear.setAttribute('onclick', 'Delete()');
document.body.appendChild(clear);
//////////////////////////////////////////////////////////////////
function Draw()                                  // նկարելու ֆունկցյիան
{
    var DrawCheck = document.getElementById('BodyOgLogin');   // ստուգում
    if ( DrawCheck === null) {
        var body = document.getElementsByTagName('body'); //
        bd = document.createElement('div');  // ստեղծում ենք մարմինը
        bd.setAttribute('class', 'bd');
        bd.setAttribute('id', 'BodyOgLogin');
        document.body.appendChild(bd);
        var bd1 = document.createElement('div'); // ստեղծում ենք header
        bd1.setAttribute('class', 'bd1');
        bd.appendChild(bd1);
        var Div1 = document.createElement('div'); // ստեղծում ենք header-ի մեջի logon
        bd1.appendChild(Div1);
        var h2 = document.createElement('H2'); // ստեղծում ենք header-ի միջի  1 վերնագիրը
        h2.innerHTML = 'ServiceCamp';
        bd1.appendChild(h2);
        var h5 = document.createElement('h5'); // ստեղծում ենք header-ի միջի  2 վերնագիրը
        h5.innerHTML = 'BY TEAMVIEWER';
        bd1.appendChild(h5);
        var bd2 = document.createElement('div'); // ստեղծում ենք login և Register դիվը
        bd2.setAttribute('class', 'bd2');
        bd.appendChild(bd2);
        var a1 = document.createElement('a'); //ստեղծում ենք login a
        a1.setAttribute('href', '#');
        bd2.appendChild(a1);
        var divLogin = document.createElement('div'); //ստեղծում ենք login դիվը
        divLogin.innerHTML='Login';
        a1.appendChild(divLogin);
        var a2 = document.createElement('a'); //ստեղծում ենք Register a
        a1.setAttribute('href', '#');
        bd2.appendChild(a2);
        var divRegister = document.createElement('div'); // ստեղծում ենք Register դիվը
        divRegister.setAttribute('ONCLICK','deleteLogin(), drawRegister()');
        divRegister.innerHTML='Register';
        a2.appendChild(divRegister);
        var form = document.createElement('form'); // ստեղծում ենք Form տեգը
        form.setAttribute('action', 'http://127.0.0.1/clessone/index.php/First/articles');
        form.setAttribute('method', 'post');
        form.setAttribute('id', 'form');
        bd.appendChild(form);
        var bd3 = document.createElement('div'); // ստեղծում ենք login և PASSWORD դիվը
        bd3.setAttribute('class', 'bd3');
        form.appendChild(bd3);
        var LabelUsarname= document.createElement('label'); // ստեղծում ենք login-ի  label
        LabelUsarname.setAttribute('for', 'login');
        LabelUsarname.setAttribute('class', 'login');
        LabelUsarname.innerHTML = "USARNAME";
        bd3.appendChild(LabelUsarname);
        var InputUsarname = document.createElement('input'); // ստեղծում ենք login-ի input
        InputUsarname.setAttribute('type', 'text');
        InputUsarname.setAttribute('id', 'login');
        InputUsarname.setAttribute('name', 'login');
        InputUsarname.setAttribute('placeholder', 'Your Teamviewer Usarname');
        bd3.appendChild(InputUsarname);
        var LabelPassword = document.createElement('label');  // ստեղծում ենք Password-ի  label
        LabelPassword.setAttribute('for', 'password');
        LabelPassword.innerHTML = 'PASSWORD';
        bd3.appendChild(LabelPassword);
        var InputPassword = document.createElement('input');  // ստեղծում ենք Password-ի input
        InputPassword.setAttribute('type', 'Password');
        InputPassword.setAttribute('id', 'password');
        InputPassword.setAttribute('name', 'password');
        InputPassword.setAttribute('placeholder', 'Your Teamviewer password');
        bd3.appendChild(InputPassword);
        var ck = document.createElement('div');  // ստեղծում ենք checkbox-ի դիվը
        ck.setAttribute('class', 'ck');
        form.appendChild(ck);
        var ck1 = document.createElement('input');  // ստեղծում ենք checkbox-ի input
        ck1.setAttribute('type', 'checkbox');
        ck1.setAttribute('id', 'ck');
        ck1.setAttribute('title', 'input');
        ck1.setAttribute('checked','checked');
        ck.appendChild(ck1);
        var LabelCk1 = document.createElement('label');  // ստեղծում ենք checkbox-ի label
        LabelCk1.setAttribute('for','ck');
        LabelCk1.innerHTML='Keep me signed in';
        ck.appendChild(LabelCk1);
        var bt = document.createElement('div'); // ստեղծում ենք button-ի դիվը
        bt.setAttribute('class', 'bt');
        form.appendChild(bt);
        var button = document.createElement('button'); // ստեղծում ենք button-ի button
        button.setAttribute('type', 'submit');
        button.innerHTML="Login with Teamviewer";
        bt.appendChild(button);
        var Futter = document.createElement('div'); // ստեղծում ենք Futter-ի դիվը
        Futter.setAttribute('class', 'futter');
        Futter.setAttribute('id', 'futter');
        bd.appendChild(Futter);
        var FutterPA = document.createElement('a'); // ստեղծում ենք Futter-ի  a տեգը
        FutterPA.setAttribute('href', '#');
        FutterPA.innerHTML ='Forgot password?';
        Futter.appendChild(FutterPA);

    }
}
///////////////////////////////////////////////////////////////////
function Delete()                                // ջնջելու ֆունկցիյան
{
    function DeleteButton() {                                  // ջնջելու ֆունկցիյան
        var RecoveryLink = document.getElementById('Linkcovery');
        if (RecoveryLink === null) {                           // ստուգում
            var LinkRecovery = document.createElement('a');
            LinkRecovery.innerHTML = "Recovery?";
            LinkRecovery.setAttribute('onclick', 'Draw()');
            LinkRecovery.setAttribute('href', "#");
            LinkRecovery.setAttribute('id', "Linkcovery");
            document.body.appendChild(LinkRecovery);

        }

        var BodyOgLogin = document.getElementById('BodyOgLogin'); // ստուգում
        if (BodyOgLogin !== null) {
            document.body.removeChild(bd);
        }

        var TaskDraw = document.getElementById('TaskDraw'); // ստուգում
        if (TaskDraw !== null) {
            document.body.removeChild(DrawTask);

        }


    }               // կնոպկեքը ջնջելու և վերականգնելու ֆունկցիյան
///////////////////////////////////////////////////////////////////
    var CekConfirm = document.getElementById('TaskDraw');
    if(CekConfirm === null)                 // ստուգում
    {

        DeleteButton();
    }
    else                                  // ստուգում
    {
        var Confirm = confirm('DELETE?');
        if (Confirm === true) {                          // ստուգում

            DeleteButton();
        }
    }

}
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////

function deleteLogin() {
    var form = document.getElementById('form');
    var bd = document.getElementById('BodyOgLogin');
    var futter = document.getElementById('futter');
    bd.removeChild(form);
    bd.removeChild(futter);
}

function drawRegister() {
    var form = document.createElement('form'); // ստեղծում ենք Form տեգը
    form.setAttribute('action', 'http://127.0.0.1/clessone/index.php/First/add_articles');
    form.setAttribute('method', 'post');
    form.setAttribute('id', 'form');
    bd.appendChild(form);
    var bd3 = document.createElement('div'); // ստեղծում ենք login և PASSWORD դիվը
    bd3.setAttribute('class', 'bd3');
    form.appendChild(bd3);
    var LabelUsarname= document.createElement('label'); // ստեղծում ենք login-ի  label
    LabelUsarname.setAttribute('for', 'login');
    LabelUsarname.setAttribute('class', 'login');
    LabelUsarname.innerHTML = "ENTER USARNAME";
    bd3.appendChild(LabelUsarname);
    var InputUsarname = document.createElement('input'); // ստեղծում ենք login-ի input
    InputUsarname.setAttribute('type', 'text');
    InputUsarname.setAttribute('id', 'login');
    InputUsarname.setAttribute('onchange','passwordError()');
    InputUsarname.setAttribute('name', 'login');
    InputUsarname.setAttribute('placeholder', 'Enter new Teamviewer usarname');
    bd3.appendChild(InputUsarname);
    var divhelp = document.createElement('div');   // օգնակա հուշող div login
    divhelp.innerHTML = "Supports alphabets and numbers no special characters except underscore('_') min 6 and max 20 characters. ";
    divhelp.setAttribute('id','divhelp');
    document.body.appendChild(divhelp);
    var passwordhelp = document.createElement('div'); // օգնակա հուշող div password
    passwordhelp.innerHTML = "Password matching expression. Password must be at least 4 characters, no more than 8 characters, and must include at least one upper case letter, one lower case letter, and one numeric digit.";
    passwordhelp.setAttribute('id','passwordhelp');
    document.body.appendChild(passwordhelp);
    var LabelPassword = document.createElement('label');  // ստեղծում ենք Password-ի  label
    LabelPassword.setAttribute('for', 'password');
    LabelPassword.innerHTML = 'ENTER PASSWORD';
    bd3.appendChild(LabelPassword);
    var InputPassword = document.createElement('input');  // ստեղծում ենք Password-ի input
    InputPassword.setAttribute('type', 'Password');
    InputPassword.setAttribute('id', 'password');
    InputPassword.setAttribute('name', 'password');
    InputPassword.setAttribute('placeholder', 'Enter new Teamviewer password');
    InputPassword.setAttribute('onchange','passwordError()');
    bd3.appendChild(InputPassword);
    var LabelPassword2 = document.createElement('label');  // ստեղծում ենք 2 Password-ի  label
    LabelPassword2.setAttribute('for', 'password');
    LabelPassword2.innerHTML = 'RE ENTER PASSWORD';
    bd3.appendChild(LabelPassword2);
    var InputPassword2 = document.createElement('input');  // ստեղծում ենք 2 Password-ի input
    InputPassword2.setAttribute('type', 'Password');
    InputPassword2.setAttribute('id', 'passwordConfirm');
    InputPassword2.setAttribute('placeholder', 'Re enter new Teamviewer password');
    InputPassword2.setAttribute('name','passwordConfirm');
    InputPassword2.setAttribute('onchange','passwordError()');
    bd3.appendChild(InputPassword2);
    var ck = document.createElement('div');  // ստեղծում ենք checkbox-ի դիվը
    ck.setAttribute('class', 'ck');
    form.appendChild(ck);
    var ck1 = document.createElement('input');  // ստեղծում ենք checkbox-ի input
    ck1.setAttribute('type', 'checkbox');
    ck1.setAttribute('id', 'ck');
    ck1.setAttribute('title', 'input');
    ck1.setAttribute('checked','checked');
    ck.appendChild(ck1);
    var LabelCk1 = document.createElement('label');  // ստեղծում ենք checkbox-ի label
    LabelCk1.setAttribute('for','ck');
    LabelCk1.innerHTML='I agree with License';
    ck.appendChild(LabelCk1);
    var bt = document.createElement('div'); // ստեղծում ենք button-ի դիվը
    bt.setAttribute('class', 'bt');
    bt.setAttribute('id', 'bt');
    form.appendChild(bt);
    var button = document.createElement('a'); // ստեղծում ենք button-ի button
    button.setAttribute('id', 'button');
    button.innerHTML="REGISTER";
    bt.appendChild(button);
}
function helpRegistration() {
    var divhelp = document.getElementById('divhelp');
    var passwordhelp= document.getElementById('passwordhelp');
    divhelp.style.display = 'inline-block';
    passwordhelp.style.display = 'inline-block';
}

function helpRegistration2() {
    var divhelp = document.getElementById('divhelp');
    var passwordhelp= document.getElementById('passwordhelp');
    divhelp.style.display = 'none';
    passwordhelp.style.display = 'inline-block';
}
function passwordChech() {
    var FirstPassword = document.getElementById('password');
    var SecondPassword = document.getElementById('passwordConfirm');
    var bt2  = document.getElementById('button');
    var bt = document.getElementById('bt');
    var password = document.getElementById('password');
    var str = password.value;
    var usernameRegex =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$/;
    var matches = usernameRegex.test(str);
    if (FirstPassword.value == SecondPassword.value && matches == true) {
        FirstPassword.style.border = '1px solid green';
        SecondPassword.style.border = '1px solid green';
        bt.removeChild(bt2);
        var button = document.createElement('button');
        button.setAttribute('type', 'submit');
        button.setAttribute('id', 'button');
        button.innerHTML="REGISTER";
        bt.appendChild(button);
    }
    else  if (FirstPassword.value !== SecondPassword.value ) {
        FirstPassword.style.border = '1px solid red';
        SecondPassword.style.border = '1px solid red';
        helpRegistration();
    }
}
function matchesLogin() {
    var login = document.getElementById('login');
    var str = login.value;
    var usernameRegex =  /^[A-Za-z0-9_]{6,20}$/;
    var matches = usernameRegex.test(str);
    if(matches == true) {
        passwordChech();
        login.style.border = '1px solid green';
        helpRegistration2();
    }
    else if(matches == false) {
        login.style.border = '1px solid red';
        passwordChech();
        helpRegistration()
    }
}

function passwordError() {
    var login = document.getElementById('login');
    if(login.value !== '') {
        matchesLogin()
    }
    else if(login.value == '') {

        passwordChech();
        login.style.border = '1px solid red';
    }
}


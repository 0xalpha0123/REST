﻿function IsEmail(email) {
    var regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
}

function IsPasswordFormat(password) {
    
    //var regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/;
    //var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])$/;
    //var regex = /^.*(?=.{6,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[#@-.$*()+;:'/%_?,=&!]).*$/;
    //var regex = /^(?=.{6,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[~!@#$%^&*.()+-:;'_%?=,]).*$/;
    //var regex = /^(?=^ [!@#$ %\^&* ()_\-+=\[{ \]};:<>|\./?a-zA-Z\d]{7,}$)(?=([!@#$%\^&*()_\-+=\[{\]};:<>|\./?a-zA-Z\d]*\W+){1,})[!@#$%\^&*()_\-+=\[{\]};:<>|\./?a-zA-Z\d]*$/


    var regex = /^.*(?=.{6,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&_~!.()*?+=,':;-]).*$/;

                                                                 //#@-.$*()+;~:'/%_?,=&!
 
return regex.test(password);
 
}

function IsUsernameCorrect(userName) {

    var regex = /^[a-zA-Z0-9]+$/;
    return regex.test(userName);
}

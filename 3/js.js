var d = new Date();
var year = d.getFullYear();
var mount = d.getUTCMonth();
var dateMount = new Date();

var n= mount;





var Drawcal = "";

Date.prototype.daysInMonth = function() {
    return 32 - new Date(this.getFullYear(), mount, 32).getDate();
};

var first_day = new Date(year,mount,1);
var first_wday = first_day.getDay();
var weekday=new Array(7);
weekday[1]="Mon";
weekday[2]="Tue";
weekday[3]="Wed";
weekday[4]="Thu";
weekday[5]="Fri";
weekday[6]="Sat";
weekday[7]="Sun";
var Daysofmount = new Date().daysInMonth();
var DayOfWeak = weekday[first_wday];
switch(DayOfWeak) {
    case "Mon":
        blank = 0;
        break;
    case"Tue":
        blank = 1;
        break;
    case "Wed":
        blank = 2;
        break;
    case "Thu":
        blank = 3;
        break;
    case "Fri":
        blank = 4;
        break;
    case "Sat":
        blank = 5;
        break;
    case"Sun":
        blank = 6;
        break;
}
Drawcal += "<div  id='tn'></div>";
Drawcal += "<table >";
Drawcal += "<tr><th colspan='90' id='th'></th></tr>";
Drawcal += "<tr><td >Երկուշաբթի</td><td >Երեքշաբթի</td><td >Չորեքշաբթի</td><td >Հինգշաբթի</td><td >Ուրբաթ</td><td style='background-color: brown'>Շաբաթ</td><td style='background-color: brown'>Կիրակի</td></tr>";
Drawcal += "<tr>";

var Daynum = 1;
var Weknum = 1;

while(Daynum <= Daysofmount) {
    while (blank > 0 && blank <=7) {
        Drawcal += "<td></td>";
        blank = blank - 1;

        Weknum++;

    }


    if (Weknum > 7) {
        Drawcal += "<tr></tr>";
        Weknum = 1;
    }
   
    Drawcal += "<td >"+ Daynum +"</td>";
    Daynum++;
    Weknum++;

}

Drawcal +=  "</tr></table>";

document.getElementById("mat").innerHTML = Drawcal;
var MountsofYear=new Array(12);
MountsofYear[1]="Հունվար";
MountsofYear[2]="Փետրվար";
MountsofYear[3]="Մարտ";
MountsofYear[4]="Ապրիլ";
MountsofYear[5]="Մայիս";
MountsofYear[6]="Հունիս";
MountsofYear[7]="Հուլիս";
MountsofYear[8]="Օգոստոս";
MountsofYear[9]="Սեպտեմբեր";
MountsofYear[10]="Հոկտեմբեր";
MountsofYear[11]="Նոյեմբեր";
MountsofYear[12]="Դեկտեմբեր";
var Mountsviev = MountsofYear[n+1];
document.getElementById('tn').innerHTML = year;
document.getElementById('th').innerHTML = Mountsviev;





function Next() {
    if (n <11) {
        n++;
        mount= n;

    }
    else  {
        year++;
        n = 0;
        mount= n;
    }



    var Drawcal = "";

    Date.prototype.daysInMonth = function() {
        return 32 - new Date(this.getFullYear(), mount, 32).getDate();
    };

    var first_day = new Date(year,mount,1);
    var first_wday = first_day.getDay();
    var weekday=new Array(7);
    weekday[1]="Mon";
    weekday[2]="Tue";
    weekday[3]="Wed";
    weekday[4]="Thu";
    weekday[5]="Fri";
    weekday[6]="Sat";
    weekday[7]="Sun";
    var Daysofmount = new Date().daysInMonth();
    var DayOfWeak = weekday[first_wday];
    switch(DayOfWeak) {
        case "Mon":
            blank = 0;
            break;
        case"Tue":
            blank = 1;
            break;
        case "Wed":
            blank = 2;
            break;
        case "Thu":
            blank = 3;
            break;
        case "Fri":
            blank = 4;
            break;
        case "Sat":
            blank = 5;
            break;
        case"Sun":
            blank = 6;
            break;
    }
    Drawcal += "<div  id='tn'></div>";
    Drawcal += "<table >";
    Drawcal += "<tr><th colspan='90' id='th'></th></tr>";
    Drawcal += "<tr><td >Երկուշաբթի</td><td >Երեքշաբթի</td><td >Չորեքշաբթի</td><td >Հինգշաբթի</td><td >Ուրբաթ</td><td style='background-color: brown'>Շաբաթ</td><td style='background-color: brown'>Կիրակի</td></tr>";
    Drawcal += "<tr>";

    var Daynum = 1;
    var Weknum = 1;

    while(Daynum <= Daysofmount) {
        while (blank > 0 && blank <=7) {
            Drawcal += "<td></td>";
            blank = blank - 1;

            Weknum++;

        }


        if (Weknum > 7) {
            Drawcal += "<tr></tr>";
            Weknum = 1;
        }

        Drawcal += "<td >"+ Daynum +"</td>";
        Daynum++;
        Weknum++;

    }

    Drawcal +=  "</tr></table>";

    document.getElementById("mat").innerHTML = Drawcal;
    var MountsofYear=new Array(12);
    MountsofYear[1]="Հունվար";
    MountsofYear[2]="Փետրվար";
    MountsofYear[3]="Մարտ";
    MountsofYear[4]="Ապրիլ";
    MountsofYear[5]="Մայիս";
    MountsofYear[6]="Հունիս";
    MountsofYear[7]="Հուլիս";
    MountsofYear[8]="Օգոստոս";
    MountsofYear[9]="Սեպտեմբեր";
    MountsofYear[10]="Հոկտեմբեր";
    MountsofYear[11]="Նոյեմբեր";
    MountsofYear[12]="Դեկտեմբեր";
    var Mountsviev = MountsofYear[n+1];
    document.getElementById('tn').innerHTML = year;
    document.getElementById('th').innerHTML = Mountsviev;




}
function Prev() {
    if (n > 0) {
        n--;
        mount = n;
    }
    else {
        year--;
        n = 11;
        mount = n;
    }


    var Drawcal = "";

    Date.prototype.daysInMonth = function () {
        return 32 - new Date(this.getFullYear(), mount, 32).getDate();
    };

    var first_day = new Date(year, mount, 1);
    var first_wday = first_day.getDay();
    var weekday = new Array(7);
    weekday[1] = "Mon";
    weekday[2] = "Tue";
    weekday[3] = "Wed";
    weekday[4] = "Thu";
    weekday[5] = "Fri";
    weekday[6] = "Sat";
    weekday[7] = "Sun";
    var Daysofmount = new Date().daysInMonth();
    var DayOfWeak = weekday[first_wday];
    switch (DayOfWeak) {
        case "Mon":
            blank = 0;
            break;
        case"Tue":
            blank = 1;
            break;
        case "Wed":
            blank = 2;
            break;
        case "Thu":
            blank = 3;
            break;
        case "Fri":
            blank = 4;
            break;
        case "Sat":
            blank = 5;
            break;
        case"Sun":
            blank = 6;
            break;
    }
    Drawcal += "<div  id='tn'></div>";
    Drawcal += "<table >";
    Drawcal += "<tr><th colspan='90' id='th'></th></tr>";
    Drawcal += "<tr><td >Երկուշաբթի</td><td >Երեքշաբթի</td><td >Չորեքշաբթի</td><td >Հինգշաբթի</td><td >Ուրբաթ</td><td style='background-color: brown'>Շաբաթ</td><td style='background-color: brown'>Կիրակի</td></tr>";
    Drawcal += "<tr>";

    var Daynum = 1;
    var Weknum = 1;

    while (Daynum <= Daysofmount) {
        while (blank > 0 && blank <= 7) {
            Drawcal += "<td></td>";
            blank = blank - 1;

            Weknum++;

        }


        if (Weknum > 7) {
            Drawcal += "<tr></tr>";
            Weknum = 1;
        }

        Drawcal += "<td >" + Daynum + "</td>";
        Daynum++;
        Weknum++;

    }

    Drawcal += "</tr></table>";

    document.getElementById("mat").innerHTML = Drawcal;
    var MountsofYear = new Array(12);
    MountsofYear[1] = "Հունվար";
    MountsofYear[2] = "Փետրվար";
    MountsofYear[3] = "Մարտ";
    MountsofYear[4] = "Ապրիլ";
    MountsofYear[5] = "Մայիս";
    MountsofYear[6] = "Հունիս";
    MountsofYear[7] = "Հուլիս";
    MountsofYear[8] = "Օգոստոս";
    MountsofYear[9] = "Սեպտեմբեր";
    MountsofYear[10] = "Հոկտեմբեր";
    MountsofYear[11] = "Նոյեմբեր";
    MountsofYear[12] = "Դեկտեմբեր";
    var Mountsviev = MountsofYear[n + 1];
    document.getElementById('tn').innerHTML = year;
    document.getElementById('th').innerHTML = Mountsviev;


    function Next() {
        if (n < 11) {
            n++;
            mount = n;

        }
        else {
            year++;
            n = 0;
            mount = n;
        }

    }

        var Drawcal = "";

        Date.prototype.daysInMonth = function () {
            return 32 - new Date(this.getFullYear(), mount, 32).getDate();
        };

        var first_day = new Date(year, mount, 1);
        var first_wday = first_day.getDay();
        var weekday = new Array(7);
        weekday[1] = "Mon";
        weekday[2] = "Tue";
        weekday[3] = "Wed";
        weekday[4] = "Thu";
        weekday[5] = "Fri";
        weekday[6] = "Sat";
        weekday[7] = "Sun";
        var Daysofmount = new Date().daysInMonth();
        var DayOfWeak = weekday[first_wday];
        switch (DayOfWeak) {
            case "Mon":
                blank = 0;
                break;
            case"Tue":
                blank = 1;
                break;
            case "Wed":
                blank = 2;
                break;
            case "Thu":
                blank = 3;
                break;
            case "Fri":
                blank = 4;
                break;
            case "Sat":
                blank = 5;
                break;
            case"Sun":
                blank = 6;
                break;
        }
        Drawcal += "<div  id='tn'></div>";
        Drawcal += "<table >";
        Drawcal += "<tr><th colspan='90' id='th'></th></tr>";
        Drawcal += "<tr><td >Երկուշաբթի</td><td >Երեքշաբթի</td><td >Չորեքշաբթի</td><td >Հինգշաբթի</td><td >Ուրբաթ</td><td style='background-color: brown'>Շաբաթ</td><td style='background-color: brown'>Կիրակի</td></tr>";
        Drawcal += "<tr>";

        var Daynum = 1;
        var Weknum = 1;

        while (Daynum <= Daysofmount) {
            while (blank > 0 && blank <= 7) {
                Drawcal += "<td></td>";
                blank = blank - 1;

                Weknum++;

            }


            if (Weknum > 7) {
                Drawcal += "<tr></tr>";
                Weknum = 1;
            }

            Drawcal += "<td >" + Daynum + "</td>";
            Daynum++;
            Weknum++;

        }

        Drawcal += "</tr></table>";

        document.getElementById("mat").innerHTML = Drawcal;
        var MountsofYear = new Array(12);
        MountsofYear[1] = "Հունվար";
        MountsofYear[2] = "Փետրվար";
        MountsofYear[3] = "Մարտ";
        MountsofYear[4] = "Ապրիլ";
        MountsofYear[5] = "Մայիս";
        MountsofYear[6] = "Հունիս";
        MountsofYear[7] = "Հուլիս";
        MountsofYear[8] = "Օգոստոս";
        MountsofYear[9] = "Սեպտեմբեր";
        MountsofYear[10] = "Հոկտեմբեր";
        MountsofYear[11] = "Նոյեմբեր";
        MountsofYear[12] = "Դեկտեմբեր";
        var Mountsviev = MountsofYear[n + 1];
        document.getElementById('tn').innerHTML = year;
        document.getElementById('th').innerHTML = Mountsviev;


}
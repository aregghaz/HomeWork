/**
 * Created by ashotkazaryan on 05.06.16.
 */
function DrawMatrix() {


    var q = document.getElementById('input1').value;
    var w = document.getElementById('input2').value;

    var MatrixHtml = "";

    for (var i = 0; i < parseInt(q); i++) {
        MatrixHtml += '<div class="row text-center">';

        var input1 = document.getElementById('input3');
        var input2 = document.getElementById('input4');



        for (var j = 0; j < parseInt(w); j++) {
            if (j == 0) {
                MatrixHtml += '<span  class="col-md-1 text-center" style="background-color:' + input1.value +'">';

                MatrixHtml += '</span>';

            }
            else if (i == 0 ) {
                MatrixHtml += '<span class="col-sm-1 text-center" style="background-color:' + input1.value +'">';

                MatrixHtml += '</span>';
                console.log(input1)
            }

            else if (j == parseInt(w-1)) {
                MatrixHtml += '<span class="col-sm-1 text-center" style="background-color: ' + input1.value +'">';

                MatrixHtml += '</span>';
            }

            else if (i == parseInt(q-1) ) {
                MatrixHtml += '<span class="col-sm-1 text-center" style="background-color : ' + input1.value +' ">';

                MatrixHtml += '</span>';
            }

            else {

                MatrixHtml += '<span class="col-sm-1 text-center" style="background-color : ' + input2.value +'">';

                MatrixHtml += '</span>';
            }





        }
        MatrixHtml += '</div>';


    }
    document.getElementById("mat").innerHTML = MatrixHtml;


}

$(document).ready(function () {
    haeTyypit()
    function haeTyypit() {
        $.get(
            {
                url : `http://localhost:3000/Tyypit`,
                success : (result) => {
                    result.forEach(element => {
                        $("#avain").append("<option value='"+element.Avain+"'>"+element.Lyhenne+" - "+element.Selite+"</option>");
                    });
                }
            }
        )
    }
    // haetaan data
    fetch = () => {
        $("tbody").empty();
        console.log("toimii")
        //tyhjennetään valinnat jos haetaan kaikki
        $.get({
            url: `http://localhost:3000/haeAsiakkaat`,
            data : {
                nimi: $("#nimi").val(),
                osoite: $("#osoite").val(),
                avain: $("#avain").val()
            },
            success: (result) => {
                showResultInTable(result);
            },
        });
    };

    $("#searchBtn").click(() => {
        fetch();
    });
});
// nimellä ja osoitteella haku


// Tuo haun tuloksen table-elementtiin. Jotain kannattaa tehdä, jotta taulukkoon ei tulisi samat tiedot
showResultInTable = (result) => {
    result.forEach((element) => {
        var elementinAvain = element.avain;
        //console.log(elementinAvain);
        let trstr = "<tr><td>" + element.NIMI + "</td>\n";
        trstr += "<td>" + element.OSOITE + "</td>\n";
        trstr += "<td>" + element.POSTINRO + "</td>\n";
        trstr += "<td>" + element.POSTITMP + "</td>\n";
        trstr += "<td>" + element.LUONTIPVM + "</td>\n";
        trstr += "<td>" + element.ASTY_AVAIN + "</td>";
        trstr += "</tr>\n";
        $("#data tbody").append(trstr);
    });
};

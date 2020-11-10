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

    fetch = () => {
        $("tbody").empty();
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

showResultInTable = (result) => {
    result.forEach((element) => {
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

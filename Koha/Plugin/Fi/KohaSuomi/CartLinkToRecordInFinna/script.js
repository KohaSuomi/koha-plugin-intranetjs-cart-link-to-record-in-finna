/// ALKU ///

// Tähän korvataan oman kimpan Finna-osoite
var finnaurl = 'REPLACE_BY_CONFIG_PARAM_A';

var linkbase = '<a class="btn btn-default" style="margin:0 5px 5px 0;" target="_blank" href="' + finnaurl + '.';

// Finna-verkkokirjastolinkkien lisääminen ostoskoriin
$(document).ready(function () {
  if (window.location.pathname == '/cgi-bin/koha/basket/basket.pl') {

    // Kielivalinta
    var linktext = 'Avaa Finnassa';
    var hostlinktext = 'Avaa emokohde Finnassa';
    if (document.documentElement.lang.toLowerCase() === "en") {
      linktext = 'Open in Finna';
      hostlinktext = 'Open host record in Finna';
    } else if (document.documentElement.lang.toLowerCase() === "sv-se") {
      linktext = 'Öppna i Finna';
      hostlinktext = 'Öppna huvudobjekt i Finna';
    }

    // Linkin muodostaminen
    $("td:has(a.title)").each(function () {
      if ($(this).find('a.title').length > 1) {
        var child_bib = $(this).find('a.title').eq(0).attr('href').replace('/cgi-bin/koha/catalogue/detail.pl?biblionumber=', '');
        var host_bib = $(this).find('a.title').eq(1).attr('href').replace('/cgi-bin/koha/catalogue/detail.pl?biblionumber=', '');
        var finnalinks = '<p>' + linkbase + child_bib + '"><i class="fa fa-external-link"></i> ' + linktext + '</a>' + linkbase + host_bib + '"><i class="fa fa-external-link"></i> ' + hostlinktext + '</a></p>';
        $(this).append(finnalinks);
      } else {
        var bib = $(this).find('a.title').eq(0).attr('href').replace('/cgi-bin/koha/catalogue/detail.pl?biblionumber=', '');
        var finnalink = '<p>' + linkbase + bib + '"><i class="fa fa-external-link"></i> ' + linktext + '</a></p>';
        $(this).append(finnalink);
      }
    });
  }
});

/// ALKU ///
/// Lisää tietueen perustiedot-näytölle valikkoriville loppuun Avaa Finnassa -nappulan. ///

$(document).ready(function () {
  if (window.location.pathname == '/cgi-bin/koha/catalogue/detail.pl') {
    var linktext = 'Avaa Finnassa';
    if ($('#changelanguage .currentlanguage').text() == 'English') {
      linktext = 'Open in Finna';
    } else if ($('#changelanguage .currentlanguage').text() == 'Svenska') {
      linktext = 'Öppna i Finna';
    }
    var params = new URLSearchParams(window.location.search);
    var biblionumber = parseInt(params.get("biblionumber"));

    $('#catalog_detail #toolbar').append('<div class="btn-group"> <a href="' + finnaurl + '.' + biblionumber + '" class="btn btn-default" target="_blank"><i class="fa fa-external-link"></i> ' + linktext + '</a></div>');
  }
});

/// LOPPU ///

<?php
$vsebina2 = file('https://finance.yahoo.com/quote/SMCI/');
$vse2 = explode(" ", $vsebina2[9]);
$f=303;
$s=314;
$t=326;
$f2=301;
$s2=312;
$t2=324;
$f3=299;
$s3=311;
$t3=323;

//naredim tako da gleda če je "data-field=\"regularMarketPrice\" na 299 mestu in čene poišče kje je z for loupom 

if($vse2[299]!="data-field=\"regularMarketPrice\""){
    for($i=0; $i<count($vse2); $i++){
        if($vse2[$i]=="data-field=\"regularMarketPrice\""){
            $f=$i+4;
            $s=$i+15;
            $t=$i+27;
            $f2=$i+2;
            $s2=$i+13;
            $t2=$i+25;
            $f3=299;
            $s3=$i+12;
            $t3=$i+24;
        }
    }
}
//61

function fetchStockData($url, $i, $n, $p) {
    $vsebina = file($url);
    $vse = explode(" ", $vsebina[9]);

    $pattern = '/[0-9,\.]+/';
    if (preg_match($pattern, $vse[$i], $matches)) {
        $number = str_replace('', '', $matches[0]); // Remove commas if present
    }

    $pattern = '/[+\-]?[0-9,\.]+/';
    if (preg_match($pattern, $vse[$n], $matches)) {
        $numberWithPlus = str_replace(',', '', $matches[0]);
        if ($numberWithPlus > 0)
            $gain = "<span style=\"color: green;\">$numberWithPlus</span><br>";
        else if ($numberWithPlus < 0)
            $gain = "<span style=\"color: red;\">$numberWithPlus</span><br>";
        else
            $gain = $numberWithPlus . "<br>";
    }

    $pattern = '/[+\-]?[0-9,\.]+/';
    if (preg_match($pattern, $vse[$p], $matches)) {
        $procent = str_replace(',', '', $matches[0]); // Remove commas if present
        if ($procent > 0.0)
            $percentage = "<span style=\"color: green;\">$procent%</span><br>";
        else if ($procent < 0.0)
            $percentage = "<span style=\"color: red;\">$procent%</span><br>";
        else
            $percentage = $procent . "%<br>";
    }

    $data = array(
        'number' => $number,
        'gain' => $gain,
        'percentage' => $percentage
    );

    return $data;
}

$smciData = fetchStockData("https://finance.yahoo.com/quote/SMCI/", $f, $s, $t);
$tslaData = fetchStockData("https://finance.yahoo.com/quote/TSLA/", $f2, $s2, $t2);
$amznData = fetchStockData("https://finance.yahoo.com/quote/AMZN?p=AMZN&.tsrc=fin-srch", $f2, $s2, $t2);
$msftData = fetchStockData("https://finance.yahoo.com/quote/MSFT?p=MSFT&.tsrc=fin-srch", $f2, $s2, $t2);
$btcData = fetchStockData("https://finance.yahoo.com/quote/BTC-USD?p=BTC-USD&.tsrc=fin-srch", $f2, $s2, $t2);
$xrpData = fetchStockData("https://finance.yahoo.com/quote/XRP-USD/", $f2, $s2, $t2);
$heiaData = fetchStockData("https://finance.yahoo.com/quote/HEIA.AS/", $f3, $s3, $t3);

$response = array(
    'SMCI' => $smciData,
    'TSLA' => $tslaData,
    'AMZN' => $amznData,
    'MSFT' => $msftData,
    'BTC' => $btcData,
    'XRP' => $xrpData,
    'HEIA' => $heiaData
);

header('Content-Type: application/json');
echo json_encode($response);
?>
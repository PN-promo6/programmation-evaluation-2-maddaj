<?php

function getArray($arrayNumber, $entier){
  $nb = array();
  $i = 0;
  $currentElement;
  while ($i < count($arrayNumber)) {
    $currentElement = $array[$i];
    if ($currentElement = 2) {
      array_push($nb);
    }
    $i++;
  }
  return ($nb);
}

$entier = 2;
$arrayNumber = array(1,2,3,4,5);
$final = getArray($arrayNumber);
print_r ($final);
?>

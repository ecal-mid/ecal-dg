<?
  function capitalize($name) {
    $explodedName = explode('-', $name);
    $formattedName = '';
    foreach ($explodedName as $part) {
      $formattedName .= ' '.ucfirst($part);
    }
    return $formattedName;
  }
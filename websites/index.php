<?
  require_once "../utils/getFolderContent.php";
?>

<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>ECAL DG</title>
  <link rel="stylesheet" href="../styles/css/style.css">
</head>
<body>
  <main class="wrapper">
    <ul class="list">
      <ul class="list__nested-list">
        <li class="list__item list__item--sticky">
          <a class="list__item-inner" href="../">ECAL DG, websites</a>
        </li>
      </ul>
      <ul class="list__nested-list">
        <? foreach (getFolderContent() as $year) : ?>
          <li class="list__item">
            <a class="list__item-inner" href="<?= $year ?>"><?= $year ?></a>
          </li>
        <? endforeach; ?>
      </ul>
    </ul>
  </main>
</body>
</html>
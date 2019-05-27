<?
  require_once "../../utils/getFolderContent.php";
  require_once "../../utils/capitalize.php";
?>

<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>ECAL DG</title>
  <link rel="stylesheet" href="../../styles/css/style.css">
  <script src="../../scripts/jquery-3.3.1.min.js"></script>
</head>

<body>
  <main class="wrapper">
    <ul class="list">
      <ul class="list__nested-list">
        <li class="list__item list__item--sticky">
          <a class="list__item-inner" href="../">ECAL DG, websites</a>
        </li>
      </ul>

      <? foreach (getFolderContent() as $semester) : ?>
          <ul class="list__nested-list">
            <li class="list__item list__item--sticky">
              <span class="list__item-inner">
                <?= capitalize($semester); ?>
              </span>
              <div class="assignment">
                <div class="assignment__inner">
                  <img src="<?='./'.$semester.'/donnee.svg' ?>">
                </div>
              </div>
            </li>
            
            <? foreach(getFolderContent('./'.$semester) as $student) : ?>
              <li class="list__item">
                <span class="list__item-inner">
                  <?= capitalize($student); ?>
                </span>
                <div class="project">
                  <div class="project__close">
                    <span class="project__close-text">Close</span>
                    <div class="project__arrow"></div>
                  </div>
                  <div class="project__inner">
                    <div class="spinner"></div>
                    <iframe class="project__site" data-src="<?= './'.$semester.'/'.$student ?>"></iframe>
                  </div>
                </div>
              </li> 
            <? endforeach; ?>
          </ul>
      <? endforeach; ?>
    </ul>
  </main>

  <script src="../../scripts/script.js"></script>
</body>
</html>
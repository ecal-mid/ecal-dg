<?
function filter ($item) {
	if (strpos($item, '.') !== false || $item === 'utils') {
		return false;
	}
	return true;
}

function getFolderContent($path = './') {
	$content = scandir($path);
	return array_filter($content, "filter");
}
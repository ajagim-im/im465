function showText(e)
{
	//The Image
	e.children[0].style.display = 'none';
	//The Title
	e.children[1].style.display = 'block';
	//The Description
	e.children[2].style.display = 'block';
}

function hideText(e)
{
	//The Image
	e.children[0].style.display = 'block';
	//The Title
	e.children[1].style.display = 'none';
	//The Description
	e.children[2].style.display = 'none';
}
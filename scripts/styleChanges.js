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

function resizePortfolioBoxes(className)
{
	var findClass = document.getElementsByClassName(className);
	var tallest = 0;
	console.log(findClass.length);
	for(var i = 0; i < findClass.length; i++)
	{
		console.log("Tallest: " + tallest);
		console.log("Offset Height: " + findClass[i].offsetHeight);
		if(findClass[i].offsetHeight > tallest)
		{
			tallest = findClass[i].offsetHeight;
		}
	}
	for(var i = 0; i < findClass.length; i++)
	{
		findClass[i].style.height = tallest + "px";
	}
}
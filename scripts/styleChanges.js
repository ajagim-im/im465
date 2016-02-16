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
	for(var i = 0; i < findClass.length; i++)
	{
		if(findClass[i].offsetHeight > tallest)
		{
			tallest = findClass[i].offsetHeight;
		}
	}
	for(var i = 0; i < findClass.length; i++)
	{
		findClass[i].style.height = tallest + "px";
	}
	hideAllText();
}

function hideAllText()
{
	var findTitles = document.getElementsByClassName("portfolio_work_title");
	var findDescriptions = document.getElementsByClassName("portfolio_work_description");

	for(var i = 0; i < findTitles.length; i++)
	{
		findTitles[i].style.display = 'none';
		findDescriptions[i].style.display = 'none';
	}
}

function showAllText()
{
	var findTitles = document.getElementsByClassName("portfolio_work_title");
	var findDescriptions = document.getElementsByClassName("portfolio_work_description");

	for(var i = 0; i < findTitles.length; i++)
	{
		findTitles[i].style.display = 'block';
		findDescriptions[i].style.display = 'block';
	}
}
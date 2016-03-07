function showText(e)
{
	//The Image
	//e.children[0].style.display = 'none';
	e.children[0].style.opacity = '0.3';
	//The Title
	e.children[1].style.display = 'block';
	//The Description
	e.children[2].style.display = 'block';
}

function hideText(e)
{
	//The Image
	//e.children[0].style.display = 'block';
	e.children[0].style.opacity = '1';
	//The Title
	e.children[1].style.display = 'none';
	//The Description
	e.children[2].style.display = 'none';
}

function resizePortfolioBoxes(className,ratio_x,ratio_y)
{

	var findClass = document.getElementsByClassName(className);
	var tallest = 0;
	var temp_height = 0;
	for(var i = 0; i < findClass.length; i++)
	{
		temp_height = (findClass[i].offsetWidth)/(ratio_x/ratio_y)
		if(temp_height > tallest)
		{
			tallest = temp_height;
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
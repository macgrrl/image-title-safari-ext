/**
 * image_title_inject.js
 *
 * Adds the "title" attribute to an image tag if there is "alt" text
 * This will cause Safari to show a popup of the alt text
 *
 * If there's title text in addition to the alt text, then merge the two together
 *
 * Image Title by Kirschen Seah (http://www.freerangecoder.com)
 * is licensed under a
 * Creative Commons Attribution-NonCommercial 3.0 Unported License
 * http://creativecommons.org/licenses/by-nc/3.0
 *
 *
 **/

var imageCollection = document.images;
	// snag the images

for ( var i = 0; i < imageCollection.length; ++i )
{
	var theNode = imageCollection.item( i );
	var altText = theNode.getAttribute("alt");

	// if we have alt text
	if ( altText != "" )
	{
		var titleText = theNode.getAttribute("title");

		if ( titleText == null )
		{
			theNode.setAttribute("title",altText);
			// add the altText as title attribute
			// so safari will show the popup
			// NOTE: safari webkit DOM says that a Node doesn't have setAttribute
			// but I'm guessing that imageCollection.item returns an Element
		}
		else if ( titleText != "" )
		{
			theNode.setAttribute("title", "Alt text: " + altText + "\r\nTitle: " + titleText);
			// put both alt and title text into title attribute
		}
	}
}

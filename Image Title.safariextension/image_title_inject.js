/**
 * image_title_inject.js
 *
 * Adds the "title" attribute to an image tag if there is "alt" text
 * This will cause Safari to show a popup of the alt text
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
	var altText = theNode.attributes.getNamedItem("alt").value;

	// if we have alt text
	if ( altText != "" )
	{
		theNode.setAttribute("title",altText);
			// add the title attribute
			// so safari will show the popup
			// NOTE: safari webkit DOM says that a Node doesn't have setAttribute
			// but I'm guessing that imageCollection.item returns an Element
	}
}

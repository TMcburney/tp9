<?

/*Recipe loader for TP9 */

$name = $_GET["recipeName"];
$list = $_GET["recipeList"];

if ($name = "Mrs. Siggs Snickerdoodles") {
  
  if ($list == "ingredients") {
    
    include "ingredients.html";
  }
  
}
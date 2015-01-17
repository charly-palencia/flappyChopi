#pragma strict

var rocks : GameObject;
var score : int = 0;

function Start () {
	InvokeRepeating("CreateObstacle", 1f, 1.5f);
}

function CreateObstacle () {
	Instantiate(rocks);
	score++;
}	

function OnGUI () {
  GUI.color = Color.black;
  var guiStyle : GUIStyle = new GUIStyle();
  guiStyle.fontSize = 45;

  GUILayout.Label("Score: " + score.ToString(), guiStyle);
}

function Update () {

}

function OnBecameInvisible () {
	Debug.Log("Ya nadie me ve");
}

function OnBecameVisible () {
	Debug.Log("Ya nadie me ve");
}

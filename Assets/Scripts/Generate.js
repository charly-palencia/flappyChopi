#pragma strict

var rocks : GameObject;

function Start () {
	InvokeRepeating("CreateObstacle", 1f, 1.5f);
}

function CreateObstacle () {
	Instantiate(rocks);
}

function Update () {

}
#pragma strict

var velocity : Vector2 = new Vector2(-4, 0);
var range : float = 4;

function Start () {
	rigidbody2D.velocity = velocity;
	var y = transform.position.y - range * Random.value;
	
	transform.position = new Vector3(transform.position.x, y, transform.position.z);
}

function Update () {

}

function OnBecameInvisible () {
	Debug.Log("Ya nadie me ve");
}

function OnBecameVisible () {
	Debug.Log("Ya nadie me ve");
}

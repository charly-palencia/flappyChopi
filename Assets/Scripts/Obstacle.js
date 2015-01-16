#pragma strict

var velocity : Vector2 = new Vector2(-4, 0);
var range : float = 4;

function Start () {
	rigidbody2D.velocity = velocity;
	transform.position = new Vector3(transform.position.x, transform.position.y - range * Random.value, transform.position.z);
}

function Update () {

}
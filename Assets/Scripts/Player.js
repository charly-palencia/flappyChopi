#pragma strict

var jumpForce : Vector2 = new Vector2(0, 300);

function Start () {

}

function Update () {
	if(Input.GetKeyUp("space"))
	{
		rigidbody2D.velocity = Vector2.zero;
		rigidbody2D.AddForce(jumpForce);
	}

	var screenPosition : Vector3 = Camera.main.WorldToScreenPoint( transform.position );
	
	if (screenPosition.y > Screen.height || screenPosition.y < 0)
	{
		Die();
	}
}

function OnCollisionEnter2D (other : Collision2D) {
  Die();
}

function Die () {
  Application.LoadLevel(Application.loadedLevel);
}
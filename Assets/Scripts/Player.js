#pragma strict

var jumpForce : Vector2 = new Vector2(0, 300);
var crashSound : AudioClip;
function Start () {

}

function Update () {
	if(Input.GetKeyUp("space"))
	{
		if(canBeRotate()) transform.Rotate(Vector3.forward, Time.deltaTime * 550); 
		
		rigidbody2D.velocity = Vector2.zero;
		rigidbody2D.AddForce(jumpForce);
		
	}else
	{
		if(canBeRotate() )  transform.Rotate(Vector3.forward, Time.deltaTime * -8.5); 
		 
	}
	

	var screenPosition : Vector3 = Camera.main.WorldToScreenPoint( transform.position );
	
	if (screenPosition.y > Screen.height || screenPosition.y < 0)
	{
		Die();
	}
}

function OnCollisionEnter2D (other : Collision2D) {
 audio.PlayOneShot(crashSound);
 Invoke("Die", 1f); 
}

function Die () {
  Application.LoadLevel(Application.loadedLevel);
}

function canBeRotate () {
  return (transform.rotation.eulerAngles.z <= 45 || transform.rotation.eulerAngles.z > 270);
}
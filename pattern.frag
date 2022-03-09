#version 330 compatibility

uniform float	fragTime;		// "Time", from Animate( )
uniform float fragSelector;
uniform float vertSelector;
in vec2  	vST;		// texture coords
in vec3 vert;
float time;
out vec4 OutColor; 

void
main( )
{
	vec3 myColor = vec3( vert.x,vert.y,vert.z );
	if(fragSelector == 1) {
		if((vert.x/fragTime) < 0.8 && (vert.y/(fragTime/2)) > 0.2 && (vert.z+fragTime) > 0.3){
			myColor = vec3(vert.x, vert.y, vert.z);
		}
		else{
			myColor = vec3 (0.5, 0.2, 0.1);
		}
		//if(vertSelector == 1){
			//myColor = vec3(vert.x, vert.y, vert.z);
		//}
	}
	else {
		myColor = vec3( 0.5,0.5,0.2 );
	}
	OutColor = vec4(myColor, 1.);
	time = fragTime;
}
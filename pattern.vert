#version 330 compatibility

uniform float	vertTime;		// "Time", from Animate( )
uniform float vertSelector;
out vec2  	vST;		// texture coords
out vec3 vert;


const float PI = 	3.14159265;
const float AMP = 	0.2;		// amplitude
const float W = 	2.;		// frequency

void
main( )
{ 
	vST = gl_MultiTexCoord0.st;
	vert = gl_Vertex.xyz;
	vert.x = vert.x * (vertTime/3);
	vert.y = vert.y * (vertTime/2);
	vert.z = vert.z * (vertTime/2);
	gl_Position = gl_ModelViewProjectionMatrix * vec4( vert, 1. );
}
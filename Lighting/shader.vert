#version 410 core
layout(location=0) in vec3 in_Position;
layout(location=1) in vec3 in_Normal;
uniform mat4 viewMat;
uniform mat4 projMat;
uniform mat4 modelMat=mat4(1);
out vec3 normal;
out vec3 worldPos;

void main(void)
{
	vec4 worldPos4 = modelMat* vec4(in_Position, 1. );
	worldPos=worldPos4.xyz;
	normal=normalize((modelMat*vec4(in_Normal, 0)).xyz);
	gl_Position= projMat*viewMat*worldPos4;
}


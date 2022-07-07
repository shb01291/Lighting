#version 150 core

uniform vec3 cameraPos;
uniform vec3 color;
uniform vec3 lightColor= vec3(1);
uniform vec3 ambientLightColor= vec3(0.1);
uniform vec4 specularMaterial= vec4(1);
uniform vec3 lightPos= vec3(3, 3, 3);
uniform float shineness= 100.;
uniform vec4 diffuseMaterial= vec4(1, 0.4, 0, 1);

in vec3 normal;
in vec3 FragPos;
in vec3 worldPos;

out vec4 out_Color;

void main(void)
{

vec3 N=normalize(normal);
vec3 L=normalize(lightPos-worldPos);
vec3 V=normalize(cameraPos-worldPos);
vec3 R=N*dot(N, L)*2.-L;

vec3 getColor=vec3(0);

float diffuseFactor=clamp(dot(N, L), 0, 1);
float specularFactor= pow(clamp(dot(R, V), 0,1), shineness);
getColor+=diffuseMaterial.rgb *diffuseFactor*lightColor;
getColor+=specularMaterial.rgb*specularFactor*lightColor;
getColor+=diffuseMaterial.rgb*ambientLightColor;

out_Color = vec4(getColor, diffuseMaterial.a);
}

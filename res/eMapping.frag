#version 420 core

/*
	•	Create a vec4 and send it out as our final colour
	•	Read in the interface block from the fragment shader
	•	Now create 3 uniforms, one for our camera position, one for our skybox, and one for a 2D texture. Note if you remove the explicit binding (layout (binding = 1)) the console will output an error even although the shader will work. It is good practice to fix warnings and errors as they can potentially lead to issues as applications develop.
	uniform vec3 cameraPos;
	uniform samplerCube skybox;
	layout (binding = 1) uniform sampler2D diffuse;
*/
void main()
{
/*
	In the Main method:
	•	Calculate the vector from the camera to the fragment.
	vec3 I = normalize(vert_In.Position + cameraPos); //vector to camera

	•	Calculate the reflection vector using the vertex normal as the angle of incident.
	vec3 R = reflect(I, normalize(vert_In.Normal)) //calculate the reflection direction for the incident vector

	•	Use this vector to read the rgb value from the samplerCube (our skybox)
	vec4 Colour = vec4(texture(skybox, R).rgb, 1.0);

	•	Now read the rgb values from our texture2D and mix the result with “Colour”. You will need to use “glGetUniformLocation” application side, which we covered in a previous lab.
*/
}
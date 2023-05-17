#version 420 core
// Mandelbrot fragment

out vec4 fragColor;

// CHANGE to the array thing, vs_out
in vec2 texCoord0;
in vec3 Normal;
in vec3 currentPos;

uniform float time;
uniform sampler2D diffuse;

#define MAX_ITERATIONS 128 // Const value for max iterations

int get_iterations()
{
	// real number, x axis
	//float realNum = ((gl_FragCoord.x / 1100 - 0.5)) * 4.0;
	// imaginary number, y axis
	//float imagineNum = ((gl_FragCoord.y / 560.0 - 0.7)) * 4.0;
	float realNum = ((texCoord0.x - 0.5)) * 4.0;
	float imagineNum = ((texCoord0.y - 0.8)) * 4.0;
	// move by time
	int i = 0;
	float x = realNum;
	float y = imagineNum;

	while (i < MAX_ITERATIONS)
	{
		float xtemp = realNum;
		realNum = (realNum * realNum - imagineNum * imagineNum) + realNum;
		imagineNum = (2.0 * xtemp * imagineNum) + y;

		if (realNum * realNum + imagineNum * imagineNum > 4.0)
			break;
			
		i++;
	}
	return i;
}

vec4 return_color()
{
    int iter = get_iterations();
    if (iter == MAX_ITERATIONS)
    {
        gl_FragDepth = 0.0f;
        return vec4(0.4f, 0.2f, 0.5f, 1.0f);
    }
 
    float iterations = float(iter) / MAX_ITERATIONS;    
    return vec4(0.0f, iterations, 0.0f, 1.0f);
}

void main()
{
	fragColor = texture(diffuse, texCoord0) * return_color();
}



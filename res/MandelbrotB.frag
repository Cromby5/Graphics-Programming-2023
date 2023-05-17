#version 420 core
// Mandelbrot fragment

out vec4 fragColor;

in vec2 currentPos;
in vec2 texCoord0;
in vec3 Normal;

const float MAX_ITER = 128.0;

uniform float time;

float mandelbrot (vec2 uv)
{
	vec2 c = 3.0 * uv - vec2(0.7, 0.0); // 1st value is size/scale factor or something * uv - displacement for the fractal to be centered
	//affect c by time
	//c +=  0.1 * vec2(cos(time * 2), sin(time * 2)); // Circles around
	c =  c / pow(time, 0.2) + vec2(0.5, 0.0); // Zooms in
	vec2 z = vec2(0.0); // Z starts at 0
	float n = 0.0;
	for (float i = 0; i < MAX_ITER; i++)
	{
		z = vec2(z.x * z.x - z.y * z.y, 2.0 * z.x * z.y) + c;
		if (dot(z, z) > 3.0)
			return n / MAX_ITER;
		n++;
	}
	return 0.0;
}

// Psuedo random hash function for coloring 3d vectors
vec3 hash (float m)
{
	float x = fract(sin(m) * 67358.5453);
	float y = fract(sin(m + x) * 43758.5453);
	float z = fract(sin(x + y) * 29658.5453);
	return vec3(x, y, z);
}

void main()
{
	vec2 uv = texCoord0.xy * 2.0 - vec2(1.0); 
	vec3 col = vec3(0.0);
	float m = mandelbrot(uv);
	col += hash(m);
	
	//col = pow(col,vec3(0.45)); // Gamma correction?
	
	fragColor = vec4(col, 1.0);
}



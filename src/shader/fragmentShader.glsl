varying vec3 vPosition;

uniform vec3 uColor1;
uniform vec3 uColor2;
// attribute vec3 position

void main() {
	vec3 color = vec3(1.0, 0.0, 0.0);
	color = vec3(1.0, 1.0, 0.0);
	color.r = 0.0;
	// float number = 1.0;
	// int numberInt = 1;
	// vec2 uv = vec2(1.0, 1.0);
	vec3 color1 = vec3(10.0 / 255.0, 30.0 / 255.0, 100.0 / 255.0); // rgb(10, 30, 100)
	vec3 color2 = vec3(1.0, 1.0, 0.0);

	float depth = vPosition.z * 0.5 + 0.5;
	color = mix(uColor1, uColor2, depth);

	// color = vPosition;
	gl_FragColor = vec4(color, depth * 0.3 + 0.2);
	
}
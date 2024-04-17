uniform float uTime;
uniform sampler2D uTexture;

varying vec2 vUv;

void main() {
    vec4 color = texture2D(uTexture, vUv);
    vec2 newUv = vUv;
    
    color.a = .8;

    gl_FragColor = color;
}
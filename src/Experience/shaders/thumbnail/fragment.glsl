uniform float uTime;
uniform sampler2D uTexture;

varying vec2 vUv;

void main() {
    vec4 color = texture2D(uTexture, vUv);
    vec2 newUv = vUv;

    gl_FragColor = color;
}
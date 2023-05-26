import gsap from "../node_modules/gsap";

let tl = gsap.timeline();

tl
.from('.box-top', {
    width: 200,
    opacity: 0
})
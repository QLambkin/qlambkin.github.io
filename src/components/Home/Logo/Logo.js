import { useEffect, useRef } from 'react'
import { gsap } from "gsap/dist/gsap";
import { DrawSVGPlugin } from "gsap/dist/DrawSVGPlugin";
import LogoS from '../../../assets/images/Q-logo.svg'
import './Logo.scss'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .from(outlineLogoRef.current, {
        drawSVG: 0,
        duration: 8,
      })

    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 4,
        duration: 1,
      }
    )
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <img ref={solidLogoRef} className="solid-logo" src={LogoS} alt="S" />
      <svg
        width="1079.000000pt"
        height="1280.000000pt"
        version="1.0"
        viewBox="0 0 1079.000000 1280.000000"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          className="svg-container"
          transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
          fill="none"
        >
          <path
            ref={outlineLogoRef}
            d="M4813 12409 c-1162 -55 -2176 -501 -2988 -1314 -686 -687 -1135
-1539 -1339 -2540 -210 -1030 -148 -2231 164 -3173 385 -1166 1124 -2073 2190
-2687 367 -212 735 -347 1200 -439 335 -67 648 -96 1031 -96 374 0 645 24 944
85 119 24 163 30 171 21 6 -6 17 -47 24 -91 18 -116 83 -375 129 -512 222
-664 623 -1052 1211 -1173 309 -64 715 -42 1035 55 630 191 1116 697 1393
1450 23 61 42 118 44 128 2 13 -65 65 -271 207 l-275 189 -125 -122 c-267
-260 -504 -369 -771 -354 -179 10 -327 60 -484 164 -96 64 -237 208 -313 319
-69 102 -173 305 -172 338 0 15 32 43 117 101 1038 711 1736 1870 1962 3257
59 362 80 646 80 1068 0 600 -56 1065 -191 1580 -240 920 -728 1733 -1418
2365 -807 740 -1733 1120 -2861 1175 -224 11 -249 11 -487 -1z m596 -813 c336
-63 583 -187 796 -401 133 -134 219 -256 315 -450 242 -490 371 -1182 441
-2370 16 -277 23 -1647 10 -2025 -20 -568 -47 -939 -97 -1315 -30 -227 -89
-544 -103 -558 -7 -7 -15 1 -25 24 -8 19 -35 80 -59 135 -177 406 -513 757
-917 959 -181 90 -341 142 -550 177 -164 28 -462 30 -626 5 -363 -56 -659
-197 -900 -429 -160 -154 -263 -302 -334 -478 -52 -127 -50 -124 -61 -113 -32
32 -104 891 -130 1553 -16 386 -16 1531 0 1875 49 1101 167 1884 358 2368 245
626 652 965 1263 1053 127 18 502 12 619 -10z m-441 -6622 c253 -37 438 -129
603 -300 90 -94 144 -172 209 -302 117 -236 198 -526 256 -912 37 -252 54
-215 -148 -315 -428 -210 -845 -279 -1230 -205 -440 85 -751 361 -849 755 -26
103 -36 337 -20 458 59 444 344 752 759 822 108 18 295 18 420 -1z"
          />
        </g>
      </svg>
    </div>
  )
}

export default Logo

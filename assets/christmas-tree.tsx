"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export function ChristmasTree() {
  const container = useRef(null);

  useGSAP(
    () => {
      const timeline = gsap.timeline();

      timeline
        .from("#tree", {
          duration: 2,
          ease: "expo.inOut",
          yPercent: 100,
        })
        .fromTo(
          ".test-2",
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
            ease: "power4.inOut",
            reversed: true,
            stagger: 0.05,
          },
        )
        .to("#star", {
          duration: 3,
          ease: "bounce.inOut",
          repeat: -1,
          rotate: 240,
          transformOrigin: "center center",
          yoyo: true,
        });
    },
    { scope: container },
  );

  return (
    <svg
      height="100%"
      ref={container}
      version="1.1"
      viewBox="0 0 1588 1738"
      width="100%"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Christmas Tree</title>
      <g id="tree" transform="matrix(1,0,0,1,-286.054508,-1006.059197)">
        <g>
          <g transform="matrix(1,0,0,1.256437,-0,-1939.363626)">
            <path
              className="fill-[#023a21]"
              d="M976.962,2643.374L1183.038,2643.374L1247.017,2743.747L912.983,2743.747L976.962,2643.374Z"
            />
          </g>
          <g transform="matrix(1,0,0,1.256437,-0,-2218.325955)">
            <path
              className="fill-[#023a21]"
              d="M1105.494,2743.747L1054.506,2743.747L1080,2703.751L1105.494,2743.747Z"
            />
          </g>
          <g transform="matrix(1,0,0,1.256437,0,-1691.149867)">
            <path
              className="fill-[#023a21]"
              d="M851.038,2643.374L1308.962,2643.374L1372.941,2743.747L787.059,2743.747L851.038,2643.374Z"
            />
          </g>
          <g transform="matrix(1,0,0,1.256437,0,-1442.936109)">
            <path
              className="fill-[#023a21]"
              d="M725.114,2643.374L1434.886,2643.374L1498.865,2743.747L661.135,2743.747L725.114,2643.374Z"
            />
          </g>
          <g transform="matrix(1,0,0,1.256437,0,-1194.72235)">
            <path
              className="fill-[#023a21]"
              d="M1624.789,2743.747L535.211,2743.747L599.191,2643.374L1560.809,2643.374L1624.789,2743.747Z"
            />
          </g>
          <g transform="matrix(1,0,0,1.256437,0,-946.508591)">
            <path
              className="fill-[#023a21]"
              d="M473.267,2643.374L1686.733,2643.374L1750.713,2743.747L409.287,2743.747L473.267,2643.374Z"
            />
          </g>
          <g transform="matrix(1,0,0,1.256437,0,-703.599074)">
            <path
              className="fill-[#023a21]"
              d="M1873.945,2743.747L286.055,2743.747L350.034,2643.374L1809.966,2643.374L1873.945,2743.747Z"
            />
          </g>
        </g>

        <g transform="matrix(0.806461,-0.806461,0.707107,0.707107,-1160.549025,1702.313995)">
          <g
            className="test-2"
            transform="matrix(1,0,0,1.256437,-0,-1939.363626)"
          >
            <path
              className="fill-[#227a47]"
              d="M1665.639,2643.374L1629.496,2743.747L925.386,2743.747L1263.685,2643.374L1665.639,2643.374Z"
            />
          </g>
          <g
            className="test-2"
            transform="matrix(1,0,0,1.256437,0,-1691.149867)"
          >
            <path
              className="fill-[#227a47]"
              d="M1594.503,2643.374L1558.361,2743.747L259.549,2743.747L597.847,2643.374L1594.503,2643.374Z"
            />
          </g>
          <g
            className="test-2"
            transform="matrix(1,0,0,1.256437,0,-1442.936109)"
          >
            <path
              className="fill-[#227a47]"
              d="M1523.368,2643.374L1487.225,2743.747L466.109,2743.747L355.534,2643.374L1523.368,2643.374Z"
            />
          </g>
          <g
            className="test-2"
            transform="matrix(1,0,0,1.256437,0,-1194.72235)"
          >
            <path
              className="fill-[#227a47]"
              d="M1452.232,2643.374L1416.09,2743.747L683.743,2743.747L573.168,2643.374L1452.232,2643.374Z"
            />
          </g>
          <g
            className="test-2"
            transform="matrix(1,0,0,1.256437,0,-946.508591)"
          >
            <path
              className="fill-[#227a47]"
              d="M1381.097,2643.374L1344.954,2743.747L901.378,2743.747L790.802,2643.374L1381.097,2643.374Z"
            />
          </g>
          <g
            className="test-2"
            transform="matrix(1,0,0,1.256437,0,-703.599074)"
          >
            <path
              className="fill-[#227a47]"
              d="M1311.481,2643.374L1275.339,2743.747L1114.361,2743.747L1003.786,2643.374L1311.481,2643.374Z"
            />
          </g>
        </g>

        <g
          id="star"
          // style={{opacity: 0}}
          transform="matrix(0,0.76225,-0.76225,0,2091.07892,414.65027)"
        >
          <path
            className="fill-[#f5d9a7]"
            d="M1072.191,1105.075L1159.286,1155.359L1089.545,1276.155L1229.028,1276.155L1229.028,1376.724L1089.545,1376.724L1159.286,1497.519L1072.191,1547.804L1002.45,1427.008L932.709,1547.804L845.614,1497.519L915.355,1376.724L775.872,1376.724L775.872,1276.155L915.355,1276.155L845.614,1155.359L932.709,1105.075L1002.45,1225.871L1072.191,1105.075Z"
          />
        </g>
      </g>
    </svg>
  );
}

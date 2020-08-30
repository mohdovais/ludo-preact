import { A_BASE, B_BASE, C_BASE, D_BASE } from "./constant";

export function Background() {
  return (
    <>
      <defs>
        <path
          id="star"
          fill="none"
          stroke="black"
          strokeWidth="5"
          d="M 82.912831,82.568193 64.355345,84.147426 50.243692,96.302078 36.004881,84.29664 17.431799,82.912831 15.852566,64.355345 3.6979146,50.243692 15.703352,36.004881 17.087162,17.431799 35.644647,15.852566 49.756301,3.6979146 l 14.23881,12.0054374 18.573082,1.38381 1.579233,18.557485 12.154652,14.111654 -12.005438,14.23881 z"
        />
        <g id="base" stroke="#000">
          <rect y="0" x="0" width="600" height="600"></rect>
          <rect y="100" x="100" width="400" height="400" fill="white"></rect>
          <circle cx="200" cy="200" r="64" />
          <circle cx="400" cy="200" r="64" />
          <circle cx="200" cy="400" r="64" />
          <circle cx="400" cy="400" r="64" />
        </g>
        <polygon
          id="arrow"
          points="50,10 50,90 30,70 50,90 70,70 50,90"
          fill={C_BASE}
          stroke="black"
          strokeWidth="10"
        />
        <circle
          id="disk"
          cx="50"
          cy="50"
          r="32"
          style="filter: drop-shadow(0 0 3px #000);stroke: black;"
        />
      </defs>
      <g id="bases">
        <use xlinkHref="#base" fill={B_BASE} />
        <use xlinkHref="#base" x="900" fill={C_BASE} />
        <use xlinkHref="#base" y="900" fill={A_BASE} />
        <use xlinkHref="#base" x="900" y="900" fill={D_BASE} />
      </g>
      <g id="home">
        <polygon
          points="750,750 600,600 900,600 750,750"
          fill={C_BASE}
          stroke="black"
        />
        <polygon
          points="750,750 600,600 600,900 750,750"
          fill={B_BASE}
          stroke="black"
        />
        <polygon
          points="750,750 600,900 900,900 750,750"
          fill={A_BASE}
          stroke="black"
        />
        <polygon
          points="750,750 900,600 900,900 750,750"
          fill={D_BASE}
          stroke="black"
        />
      </g>

      <g id="row1">
        <rect y="0" x="600" width="100" height="100" fill="white"></rect>
        <rect y="0" x="700" width="100" height="100" fill="white"></rect>
        <rect y="0" x="800" width="100" height="100" fill="white"></rect>
      </g>

      <g id="row2">
        <rect y="100" x="600" width="100" height="100" fill="white"></rect>
        <rect y="100" x="700" width="100" height="100" fill={C_BASE}></rect>
        <rect y="100" x="800" width="100" height="100" fill={C_BASE}></rect>
      </g>

      <g id="row3">
        <rect y="200" x="600" width="100" height="100" fill="white"></rect>
        <rect y="200" x="700" width="100" height="100" fill={C_BASE}></rect>
        <rect y="200" x="800" width="100" height="100" fill="white"></rect>
      </g>

      <g id="row4">
        <rect y="300" x="600" width="100" height="100" fill="white"></rect>
        <rect y="300" x="700" width="100" height="100" fill={C_BASE}></rect>
        <rect y="300" x="800" width="100" height="100" fill="white"></rect>
      </g>

      <g id="row5">
        <rect y="400" x="600" width="100" height="100" fill="white"></rect>
        <rect y="400" x="700" width="100" height="100" fill={C_BASE}></rect>
        <rect y="400" x="800" width="100" height="100" fill="white"></rect>
      </g>

      <g id="row6">
        <rect y="500" x="600" width="100" height="100" fill="white"></rect>
        <rect y="500" x="700" width="100" height="100" fill={C_BASE}></rect>
        <rect y="500" x="800" width="100" height="100" fill="white"></rect>
      </g>

      <g id="row7">
        <rect y="600" x="0" width="100" height="100" fill="white"></rect>
        <rect y="600" x="100" width="100" height="100" fill={B_BASE}></rect>
        <rect y="600" x="200" width="100" height="100" fill="white"></rect>
        <rect y="600" x="300" width="100" height="100" fill="white"></rect>
        <rect y="600" x="400" width="100" height="100" fill="white"></rect>
        <rect y="600" x="500" width="100" height="100" fill="white"></rect>

        <rect y="600" x="900" width="100" height="100" fill="white"></rect>
        <rect y="600" x="1000" width="100" height="100" fill="white"></rect>
        <rect y="600" x="1100" width="100" height="100" fill="white"></rect>
        <rect y="600" x="1200" width="100" height="100" fill="white"></rect>
        <rect y="600" x="1300" width="100" height="100" fill="white"></rect>
        <rect y="600" x="1400" width="100" height="100" fill="white"></rect>
      </g>

      <g>
        <rect y="700" x="0" width="100" height="100" fill="white"></rect>
        <rect y="700" x="100" width="100" height="100" fill={B_BASE}></rect>
        <rect y="700" x="200" width="100" height="100" fill={B_BASE}></rect>
        <rect y="700" x="300" width="100" height="100" fill={B_BASE}></rect>
        <rect y="700" x="400" width="100" height="100" fill={B_BASE}></rect>
        <rect y="700" x="500" width="100" height="100" fill={B_BASE}></rect>

        <rect y="700" x="900" width="100" height="100" fill={D_BASE}></rect>
        <rect y="700" x="1000" width="100" height="100" fill={D_BASE}></rect>
        <rect y="700" x="1100" width="100" height="100" fill={D_BASE}></rect>
        <rect y="700" x="1200" width="100" height="100" fill={D_BASE}></rect>
        <rect y="700" x="1300" width="100" height="100" fill={D_BASE}></rect>
        <rect y="700" x="1400" width="100" height="100" fill="white"></rect>
      </g>

      <g>
        <rect y="800" x="0" width="100" height="100" fill="white"></rect>
        <rect y="800" x="100" width="100" height="100" fill="white"></rect>
        <rect y="800" x="200" width="100" height="100" fill="white"></rect>
        <rect y="800" x="300" width="100" height="100" fill="white"></rect>
        <rect y="800" x="400" width="100" height="100" fill="white"></rect>
        <rect y="800" x="500" width="100" height="100" fill="white"></rect>

        <rect y="800" x="900" width="100" height="100" fill="white"></rect>
        <rect y="800" x="1000" width="100" height="100" fill="white"></rect>
        <rect y="800" x="1100" width="100" height="100" fill="white"></rect>
        <rect y="800" x="1200" width="100" height="100" fill="white"></rect>
        <rect y="800" x="1300" width="100" height="100" fill={D_BASE}></rect>
        <rect y="800" x="1400" width="100" height="100" fill="white"></rect>
      </g>

      <g>
        <rect y="900" x="600" width="100" height="100" fill="white"></rect>
        <rect y="900" x="700" width="100" height="100" fill={A_BASE}></rect>
        <rect y="900" x="800" width="100" height="100" fill="white"></rect>
      </g>

      <g>
        <rect y="1000" x="600" width="100" height="100" fill="white"></rect>
        <rect y="1000" x="700" width="100" height="100" fill={A_BASE}></rect>
        <rect y="1000" x="800" width="100" height="100" fill="white"></rect>
      </g>

      <g>
        <rect y="1100" x="600" width="100" height="100" fill="white"></rect>
        <rect y="1100" x="700" width="100" height="100" fill={A_BASE}></rect>
        <rect y="1100" x="800" width="100" height="100" fill="white"></rect>
      </g>

      <g>
        <rect y="1200" x="600" width="100" height="100" fill="white"></rect>
        <rect y="1200" x="700" width="100" height="100" fill={A_BASE}></rect>
        <rect y="1200" x="800" width="100" height="100" fill="white"></rect>
      </g>

      <g>
        <rect y="1300" x="600" width="100" height="100" fill={A_BASE}></rect>
        <rect y="1300" x="700" width="100" height="100" fill={A_BASE}></rect>
        <rect y="1300" x="800" width="100" height="100" fill="white"></rect>
      </g>

      <g>
        <rect y="1400" x="600" width="100" height="100" fill="white"></rect>
        <rect y="1400" x="700" width="100" height="100" fill="white"></rect>
        <rect y="1400" x="800" width="100" height="100" fill="white"></rect>
      </g>

      <g id="stars">
        <use xlinkHref="#star" x="200" y="800" />
        <use xlinkHref="#star" x="100" y="600" />
        <use xlinkHref="#star" x="600" y="200" />
        <use xlinkHref="#star" x="800" y="100" />
        <use xlinkHref="#star" x="1200" y="600" />
        <use xlinkHref="#star" x="1300" y="800" />
        <use xlinkHref="#star" x="800" y="1200" />
        <use xlinkHref="#star" x="600" y="1300" />
      </g>
    </>
  );
}

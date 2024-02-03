import type { SVGProps } from "react";

interface StreamlineMouthLipSolid extends SVGProps<SVGSVGElement> {
  isSelected: boolean;
}

export function StreamlineMouthLipSolid(props: StreamlineMouthLipSolid) {
  const { isSelected, ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={36}
      height={36}
      viewBox="0 0 14 14"
      {...props}
    >
      <path
        fill={isSelected ? "white" : "#ff6b84"}
        fillRule="evenodd"
        d="M13.722 6.865a6.738 6.738 0 0 0-.198-.442a5.952 5.952 0 0 0-1.168-1.639c-.564-.546-1.33-1.02-2.324-1.143c-.896-.112-1.905.07-3.032.633c-1.127-.563-2.137-.745-3.033-.633c-.993.123-1.76.597-2.324 1.143a5.954 5.954 0 0 0-1.167 1.64a6.748 6.748 0 0 0-.198.441zM.334 8.115A7.928 7.928 0 0 0 1.76 9.837C2.855 10.83 4.566 11.82 7 11.82s4.145-.99 5.239-1.982a7.924 7.924 0 0 0 1.426-1.722H.335Z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

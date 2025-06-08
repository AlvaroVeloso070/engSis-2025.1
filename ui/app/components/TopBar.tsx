import OrbitLogo from "./OrbitLogo";

export default function TopBar() {
  return (
    <div className="h-[36px] flex-none flex items-center pl-[20px] pr-spacing-xl bg-levels-25 border-b border-levels-100 justify-between w-screen">
      <div className="flex items-center relative w-screen">
        <OrbitLogo />
        <div className="w-[1px] h-[16px] bg-levels-300 ml-spacing-xs mr-spacing-sm"></div>
        <div className="flex items-center">
          <span className="text-textxs text-label-light-secondary">
            Analise de solo
          </span>
        </div>
      </div>
    </div>
  );
}

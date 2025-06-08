import { Glyph, Icon, IconSize } from "./Icons";
import { AppGlyph, AppIcon } from "./SideBarItems";
import { AnimatePresence, motion } from "framer-motion";

type SideBarItemProps = {
  name: string;
  icon: AppGlyph;
  index: number;
};

export default function SideBar({ items }: { items: SideBarItemProps[] }) {
  return (
    <nav
      className={`flex-none box-border font-inter flex flex-col gap-y-5 overflow-y-auto overflow-x-hidden pb-[15px] pt-spacing-xl  bg-layers-light-primary w-[220px] h-full transition-all`}
    >
      <div className="flex pl-spacing-lg pr-spacing-xl items-center justify-between">
        <div className="flex items-center px-[8px]">
          <div className="bg-brand-500 h-[24px] w-[24px] rounded-sm p-[4px] ml-[2px] mr-[9px]">
            <Icon
              glyph={Glyph.BuildingSkyscraper}
              primaryColor="fill-white"
              size={IconSize.Small}
            />
          </div>
          <p className="text-textxs font-semibold text-label-light-primary">
            Construtora ABC
          </p>
        </div>
        <AnimatePresence></AnimatePresence>
      </div>
      <div className="flex flex-1 flex-col  pl-spacing-lg pr-spacing-xl">
        <ul className="flex flex-1 flex-col gap-y-spacing-2">
          {items.map((item: SideBarItemProps) => (
            <MenuItem item={item} key={item.index} />
          ))}
          <AnimatePresence></AnimatePresence>
        </ul>
      </div>
      <div className="flex flex-col gap-y-spacing-sm">
        <div className="px-[14px] w-full"></div>
        <div className="h-[2px] w-full border-t border-levels-200" />
      </div>
    </nav>
  );
}

function MenuItem({ item }: { item: SideBarItemProps }) {
  return (
    <li key={item.name} className={`flex h-[32px] self-stretch`}>
      <button
        onClick={() => void 0}
        className={`
          ${
            item.name === "Análise de solo"
              ? "bg-levels-100/50 text-label-light-primary items-center font-medium"
              : "bg-transparent text-label-light-secondary hover:text-label-light-primary hover:bg-gray-50 items-center font-regular"
          }
          flex-1 group flex gap-x-spacing-md rounded-sm py-spacing-2 px-[10px] text-textxs
        `}
      >
        <AppIcon glyph={item.icon} active={item.name === "Análise de solo"} />
        <AnimatePresence>
          <motion.div
            animate={{ opacity: 1, width: "auto" }}
            exit={{ opacity: 0, width: 0 }}
            transition={{ duration: 0.1, ease: "easeOut" }}
            layout
          >
            <span className="flex-1">{item.name}</span>
          </motion.div>
        </AnimatePresence>
      </button>
    </li>
  );
}

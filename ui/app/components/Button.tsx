"use client";
import {
  KeyboardEventHandler,
  MouseEventHandler,
  useEffect,
  useRef,
} from "react";
import React from "react";
import { Icon, IconProps, IconSize } from "./Icons";

/**
 * @returns The rendered button component.
 */

export default function Button({
  className,
  buttonRef,
  title,
  label,
  labelStyle,
  presetStyle,
  tabIndex,
  foreground,
  size,
  merge = false,
  sizing = "hug",
  horizontalContentAlignment = "left",
  isLoading = false,
  type = "button",
  onClick,
  onMouseDown,
  onMouseUp,
  onLongPress,
  onKeyDown,
  icon,
  iconPosition = "trailing",
  gapClass,
  disabled = false,
  isSelected,
}: ButtonProps) {
  const timeoutRef = useRef<NodeJS.Timeout>(null);
  const intervalRef = useRef<NodeJS.Timeout>(null);

  useEffect(() => {
    window.addEventListener("mouseup", mouseUpCleanup);

    return () => {
      window.removeEventListener("mouseup", mouseUpCleanup);
      if (timeoutRef?.current) clearTimeout(timeoutRef.current);
      if (intervalRef?.current) clearInterval(intervalRef.current);
    };
  }, []);

  const handleMouseDown = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (e.button === 0) {
      onMouseDown?.(e);
      onLongPress?.();
      timeoutRef.current = setTimeout(() => {
        intervalRef.current = setInterval(() => onLongPress?.(), 100);
      }, 500);
    }
  };

  const mouseUpCleanup = (e?: MouseEvent) => {
    e?.stopPropagation();
    if (intervalRef?.current) clearInterval(intervalRef.current);
    if (timeoutRef?.current) clearTimeout(timeoutRef.current);
  };

  const handleMouseUp = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (e.button === 0) {
      mouseUpCleanup();
      onMouseUp?.(e);
    }
  };

  if (!icon) {
    iconPosition = "none";
  }

  const {
    radius,
    paddingL,
    paddingR,
    paddingY,
    fontSize,
    textStyle,
    coloring,
  } = getButtonProps(
    size,
    presetStyle,
    disabled,
    iconPosition,
    foreground,
    labelStyle,
    icon,
    merge,
    isSelected
  );

  //Return the button
  return (
    <button
      ref={buttonRef}
      tabIndex={tabIndex}
      onClick={(e) => {
        if (!isLoading) onClick?.(e);
      }}
      title={title}
      onKeyDownCapture={onKeyDown}
      onMouseDown={onLongPress ? handleMouseDown : onMouseDown}
      onMouseUp={onLongPress ? handleMouseUp : onMouseUp}
      type={type}
      disabled={disabled}
      className={
        `${className ?? ""} relative flex h-fit ${
          sizing === "hug" ? "w-fit" : sizing === "fill" ? "w-full" : ""
        } items-center ${
          gapClass ?? "gap-x-spacing-6"
        } ${radius} ${fontSize} ${coloring} ${textStyle}` +
        (presetStyle === "dashed"
          ? " before:absolute before:inset-0 before:border before:rounded-xs before:border-dashed before:border-label-light-quaternary"
          : "")
      }
    >
      {!isLoading ? (
        <>
          {iconPosition === "center" ? (
            label !== undefined ? (
              <div className={`${paddingL} ${paddingR} ${paddingY}`}>
                {icon && (
                  <Icon
                    className={
                      icon.size === IconSize.Small && size === "sm"
                        ? "my-spacing-2"
                        : ""
                    }
                    {...icon}
                  />
                )}
              </div>
            ) : (
              <div className={`${paddingL} ${paddingR} ${paddingY}`}>
                {icon && <Icon {...icon} />}
              </div>
            )
          ) : (
            <div
              className={`flex flex-1 min-w-0 ${
                horizontalContentAlignment === "left"
                  ? "justify-start"
                  : horizontalContentAlignment === "center"
                  ? "justify-center"
                  : "justify-end"
              } ${paddingL} ${paddingR} ${paddingY}`}
            >
              {iconPosition === "leading" ? (
                <div
                  className={`flex flex-initial min-w-0 justify-center items-center ${
                    gapClass ?? "gap-x-spacing-6"
                  }`}
                >
                  <>{icon && <Icon className="flex-none" {...icon} />}</>
                  <span className="inline-flex justify-start">
                    {typeof label === "string" ? (
                      <p className="line-clamp-1 break-all text-left">
                        {label}
                      </p>
                    ) : (
                      label
                    )}
                  </span>
                </div>
              ) : null}
              {iconPosition === "trailing" ? (
                <div
                  className={`flex flex-initial min-w-0 justify-center items-center ${
                    gapClass ?? "gap-x-spacing-6"
                  }`}
                >
                  <span className="inline-flex justify-start min-w-0">
                    {typeof label === "string" ? (
                      <p className="line-clamp-1 break-all">{label}</p>
                    ) : (
                      label
                    )}
                  </span>
                  <>{icon && <Icon className="flex-none" {...icon} />}</>
                </div>
              ) : null}
              {iconPosition === "none" ? (
                <div className="flex justify-center items-center">
                  <span>{label}</span>
                </div>
              ) : null}
            </div>
          )}
        </>
      ) : (
        <div role="status" className="m-spacing-xs flex-1 flex justify-center">
          <svg
            aria-hidden="true"
            className={`w-6 h-6 animate-spin ${
              presetStyle === "brand"
                ? "text-brand-300 fill-white"
                : "text-levels-200 fill-brand-500"
            }`}
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      )}
    </button>
  );
}

function getButtonProps(
  size: ButtonSize,
  style: ButtonStyle,
  disabled: boolean,
  iconPosition: IconPosition,
  foreground?: string,
  labelStyle?: TextStyle,
  icon?: IconProps,
  merge?: boolean | "left" | "right",
  isSelected?: boolean
) {
  if (icon) {
    if (disabled) {
      icon.primaryColor = "fill-label-light-quaternary";
    } else if (style === "brand" && icon.primaryColor === undefined) {
      icon.primaryColor = "fill-white";
    } else if (style === "floating" && icon.primaryColor === undefined) {
      icon.primaryColor = "fill-label-light-primary";
    } else if (style === "toggle-floating") {
      icon.primaryColor = isSelected
        ? "fill-brand-500"
        : "fill-label-light-tertiary";
    } else if (style === "toggle") {
      icon.primaryColor = isSelected
        ? "fill-brand-500"
        : (icon.primaryColor = "fill-label-light-tertiary");
    }
    if (size === "sm" && icon.size === undefined) {
      icon.size = IconSize.Medium;
    }
    if (size === "xs" && icon.size === undefined) {
      icon.size = IconSize.Small;
    }
  }
  if (!labelStyle) {
    if (size === "sm") {
      labelStyle = {
        fontSize: "md",
        fontWeight:
          style === "brand" || style === "dangerous" ? "semibold" : "medium",
      };
    }
    if (size === "xs") {
      labelStyle = {
        fontSize: "xs",
        fontWeight:
          style === "brand" || style === "dangerous" ? "semibold" : "medium",
      };
    } else {
      labelStyle = {
        fontSize: "md",
        fontWeight:
          style === "brand" || style === "dangerous" ? "semibold" : "medium",
      };
    }
  }

  //sizeProps
  let paddingL: string, paddingR: string, paddingY: string, fontSize: string;

  //styleProps
  let textStyle: string, coloring: string;

  let radius: string;

  switch (size) {
    case "sm":
      radius = merge
        ? merge === "left"
          ? "rounded-r-sm"
          : merge === "right"
          ? "rounded-l-sm"
          : ""
        : "rounded-sm";
      if (iconPosition !== "none" && icon?.size === IconSize.Small) {
        if (iconPosition === "leading") {
          paddingL = "pl-[calc(theme(spacing.spacing-md)-2px)]";
          paddingR = "pr-spacing-md";
        } else if (iconPosition === "trailing") {
          paddingL = "pl-spacing-md";
          paddingR = "pr-[calc(theme(spacing.spacing-md)-2px)]";
        } else {
          paddingL = "pl-spacing-sm";
          paddingR = "pr-spacing-sm";
        }
      } else if (iconPosition !== "none" && icon?.size === IconSize.Medium) {
        if (iconPosition === "leading") {
          paddingL = "pl-[calc(theme(spacing.spacing-md)-4px)]";
          paddingR = "pr-spacing-md";
        } else if (iconPosition === "trailing") {
          paddingL = "pl-spacing-md";
          paddingR = "pr-[calc(theme(spacing.spacing-md)-4px)]";
        } else {
          paddingL = "pl-spacing-6";
          paddingR = "pr-spacing-6";
        }
      } else if (iconPosition !== "none" && icon?.size === IconSize.XSmall) {
        if (iconPosition === "leading") {
          paddingL = "pl-[calc(theme(spacing.spacing-md)-2px)]";
          paddingR = "pr-spacing-md";
        } else if (iconPosition === "trailing") {
          paddingL = "pl-spacing-md";
          paddingR = "pr-[calc(theme(spacing.spacing-md)-2px)]";
        } else {
          paddingL = "pl-spacing-xs";
          paddingR = "pr-spacing-xs";
        }
      } else {
        paddingL = "pl-spacing-md";
        paddingR = "pr-spacing-md";
      }
      paddingY =
        labelStyle.fontSize === "xs" ? "py-spacing-sm" : "py-spacing-6";
      fontSize = "text-textsm";
      break;
    case "xs":
      if (style === "toggle-pill") {
        radius = "rounded-full";
      } else {
        radius = merge
          ? merge === "left"
            ? style === "toggle-floating"
              ? "rounded-r-sm"
              : "rounded-r-xs"
            : merge === "right"
            ? style === "toggle-floating"
              ? "rounded-l-sm"
              : "rounded-l-xs"
            : ""
          : style === "dropdown" || style === "toggle-floating"
          ? "rounded-sm"
          : "rounded-xs";
      }
      if (style === "toggle-pill") {
        paddingL = "pl-[10px]";
        paddingR = "pr-[10px]";
      } else if (iconPosition !== "none" && icon?.size === IconSize.Small) {
        if (iconPosition === "leading") {
          paddingL = "pl-[calc(theme(spacing.spacing-sm)-2px)]";
          paddingR = "pr-spacing-sm";
        } else if (iconPosition === "trailing") {
          paddingL = "pl-spacing-sm";
          paddingR = "pr-[calc(theme(spacing.spacing-sm)-2px)]";
        } else {
          paddingL = "pl-spacing-xs";
          paddingR = "pr-spacing-xs";
        }
      } else if (iconPosition !== "none" && icon?.size === IconSize.Medium) {
        if (iconPosition === "leading") {
          paddingL = "pl-[calc(theme(spacing.spacing-sm)-2px)]";
          paddingR = "pr-spacing-sm";
        } else if (iconPosition === "trailing") {
          paddingL = "pl-spacing-sm";
          paddingR = "pr-[calc(theme(spacing.spacing-sm)-2px)]";
        } else {
          paddingL = "pl-spacing-2";
          paddingR = "pr-spacing-2";
        }
      } else {
        paddingL = "pl-spacing-sm";
        paddingR = "pr-spacing-sm";
      }
      paddingY =
        icon?.size === IconSize.Medium ? "py-spacing-2" : "py-spacing-xs";
      fontSize = "text-textxs";
      break;
    case "2xs":
      if (style === "toggle-pill") {
        radius = "rounded-full";
        paddingL = "pl-spacing-sm";
        paddingR = "pr-spacing-sm";
        paddingY = "py-spacing-2";
        fontSize = "text-textxs";
      } else {
        radius = "rounded-xs";
        if (iconPosition === "leading") {
          paddingL = "pl-spacing-2";
          paddingR = "pr-spacing-6";
        } else if (iconPosition === "trailing") {
          paddingL = "pl-spacing-6";
          paddingR =
            icon?.size === IconSize.XSmall ? "pr-spacing-xs" : "pr-spacing-2";
        } else if (iconPosition === "center") {
          paddingL = "pl-spacing-2";
          paddingR = "pr-spacing-2";
        } else {
          paddingL = "pl-spacing-sm";
          paddingR = "pr-spacing-sm";
        }
        paddingY = "py-spacing-2";
        fontSize = "text-textxs";
      }
      break;
    default:
      radius = "";
      paddingL = "";
      paddingR = "";
      paddingY = "";
      fontSize = "";
      break;
  }

  switch (style) {
    case "floating":
    case "dropdown":
      coloring =
        "bg-white enabled:ring-1 enabled:ring-levels-200 enabled:ring-inset " + //background
        "enabled:shadow-light-shadow " + //shadow
        "enabled:hover:bg-levels-25 " + //hover
        "enabled:active:bg-levels-50 " + //active
        "focus-visible:outline-[3px] focus-visible:outline-levels-50 focus-visible:outline focus-visible:enabled:ring-levels-600/25 focus-visible:enabled:ring-1 focus-visible:enabled:ring-inset " + //focus
        "disabled:bg-levels-100 disabled:shadow-gray-shadow disabled:text-label-light-quaternary " + //disabled
        "transition duration-[70ms] ease-in"; //transition
      textStyle =
        classesFromTextStyle(labelStyle) +
        (foreground ?? (labelStyle.color ? "" : " text-label-light-primary"));
      break;
    case "brand":
      coloring =
        "bg-brand-500 " + //background
        "enabled:shadow-sm " + //shadow
        "hover:bg-brand-400 " + //hover
        "active:bg-brand-600 " + //active
        "focus-visible:ring-[3px] focus-visible:ring-brand-100 focus-visible:outline-none " + //focus
        "disabled:bg-levels-100 disabled:shadow-gray-shadow disabled:text-label-light-quaternary " + //disabled
        "transition duration-[70ms] ease-in"; //transition
      textStyle =
        classesFromTextStyle(labelStyle) +
        (foreground ?? (labelStyle.color ? "" : " text-white"));
      break;
    case "dangerous":
      coloring =
        "bg-error-500 " + //background
        "enabled:shadow-sm " + //shadow
        "hover:bg-error-600 " + //hover
        "active:bg-error-700 " + //active
        "focus-visible:ring-[3px] focus-visible:ring-error-200 focus-visible:outline-none " + //focus
        "disabled:bg-levels-100 disabled:shadow-gray-shadow disabled:text-label-light-quaternary " + //disabled
        "transition duration-[70ms] ease-in"; //transition
      textStyle =
        classesFromTextStyle(labelStyle) +
        (foreground ?? (labelStyle.color ? "" : " text-white"));
      break;
    case "outline":
      coloring =
        "bg-transparent enabled:ring-inset enabled:ring-1 enabled:ring-levels-200 " + //background
        "hover:bg-levels-50 " + //hover
        "active:bg-levels-100 " + //active
        "focus-visible:outline-[3px] focus-visible:outline-levels-50 focus-visible:outline focus-visible:enabled:ring-levels-600/25 focus-visible:enabled:ring-1 focus-visible:enabled:ring-inset " + //focus
        "disabled:bg-transparent disabled:shadow-gray-shadow disabled:text-label-light-quaternary " + //disabled
        "transition duration-[70ms] ease-in"; //transition
      textStyle =
        classesFromTextStyle(labelStyle) +
        (foreground ?? (labelStyle.color ? "" : " text-label-light-secondary"));
      break;
    case "dashed":
    case "levels":
      coloring =
        (isSelected
          ? "bg-levels-50 enabled:ring-levels-300/40 enabled:hover:bg-levels-100 enabled:active:bg-levels-200 "
          : "bg-transparent enabled:hover:bg-levels-50 enabled:active:bg-levels-100 ") + //background
        "focus-visible:bg-levels-100 focus-visible:outline-[3px] focus-visible:outline-levels-50 focus-visible:outline focus-visible:enabled:ring-levels-600/25 focus-visible:enabled:ring-1 focus-visible:enabled:ring-inset";
      textStyle =
        classesFromTextStyle(labelStyle) +
        (foreground ?? (labelStyle.color ? "" : " text-label-light-primary"));
      break;
    case "toggle":
    case "toggle-pill":
      if (isSelected) {
        coloring =
          "bg-brand-25 outline-none " + //background
          "focus-visible:outline-none " + //focus
          "transition duration-[70ms] ease-in"; //transition
        textStyle =
          classesFromTextStyle(labelStyle) +
          (foreground ?? (labelStyle.color ? "" : " text-brand-500"));
      } else {
        coloring =
          "bg-levels-100 outline-none " + //background
          "focus-visible:outline-none " + //focus
          "transition duration-[70ms] ease-in"; //transition
        textStyle =
          classesFromTextStyle(labelStyle) +
          (foreground ??
            (labelStyle.color ? "" : " text-label-light-secondary"));
      }
      break;
    case "toggle-floating":
      coloring =
        (isSelected
          ? "bg-levels-50 enabled:ring-levels-300/40 "
          : "bg-white enabled:ring-levels-200 ") +
        "enabled:ring-1  enabled:ring-inset " + //background
        "enabled:shadow-light-shadow " + //shadow
        "enabled:hover:bg-levels-25 " + //hover
        "enabled:active:bg-levels-50 " + //active
        "focus-visible:outline-[3px] focus-visible:outline-levels-50 focus-visible:outline focus-visible:enabled:ring-levels-600/25 focus-visible:enabled:ring-1 focus-visible:enabled:ring-inset " + //focus
        "disabled:bg-levels-100 disabled:shadow-gray-shadow disabled:text-label-light-quaternary " + //disabled
        "transition duration-[70ms] ease-in"; //transition
      textStyle =
        classesFromTextStyle(labelStyle) +
        (foreground ?? (labelStyle.color ? "" : " text-label-light-primary"));
      break;
    default:
      coloring =
        "focus-visible:bg-levels-100 focus-visible:outline-[3px] focus-visible:outline-levels-50 focus-visible:outline focus-visible:enabled:ring-levels-600/25 focus-visible:enabled:ring-1 focus-visible:enabled:ring-inset";
      textStyle =
        classesFromTextStyle(labelStyle) +
        (foreground ?? (labelStyle.color ? "" : "text-label-light-primary"));
      break;
  }

  return {
    radius,
    paddingL,
    paddingR,
    paddingY,
    fontSize,
    textStyle,
    coloring,
  };
}

/** Defines properties of a button component with customizable parameters. */
export type ButtonProps = {
  /** Defines the class name of the button. */
  className?: string;
  /** Defines the reference of the button. */
  buttonRef?: React.Ref<HTMLButtonElement>;
  /** Defines the title of the button. */
  title?: string;
  /** Defines the label to display inside the button. */
  label: React.ReactNode | undefined;
  /** Defines the label text style of the input field. */
  labelStyle?: TextStyle;
  /**
   * Defines the style preset of the button.
   * @template floating white button with gray border and black text.
   * @template brand brand-color button with white text.
   */
  presetStyle: ButtonStyle;
  /** Defines the tab index of the button. */
  tabIndex?: number;
  /** Defines the text color using tailwind classes. */
  foreground?: string;
  /**
   * Defines the size preset of the button and its font size.
   * @template xs 24 px height (hug) with 12 px font size.
   * @template sm 32 px height (hug) with 14 px font size.
   */
  size: ButtonSize;
  /** Defines the button width relative to its content. */
  sizing?: "hug" | "fill" | "no-sizing";
  /** Defines whether the button's corner should merge with sibling components. */
  merge?: boolean | "left" | "right";
  /** Defines the horizontal alignment of the button content. */
  horizontalContentAlignment?: HorizontalAlignment;
  /** Defines the loading state of the button. */
  isLoading?: boolean;
  /**
   * Defines the icon position related to the content of the button.
   * @template trailing Displays the icon to the right of the content.
   * @template leading Displays the icon to the left of the content.
   * @template center Displays the icon at center and hides the content.
   * @template none Hides the icon and displays the content only.
   */
  iconPosition?: IconPosition;
  /** Defines the icon to display along the content. */
  icon?: IconProps;
  /** Defines the space in pixels between the icon and the content. */
  gapClass?: string;
  /**
   * Defines the type of the button.
   * @template button Regular button.
   * @template submit Form button.
   * @template reset Action button.
   */
  type?: "button" | "submit" | "reset";
  /** Defines the interactivity state of the button. */
  disabled?: boolean;
  /** Callback function on user click. */
  onClick?: MouseEventHandler<HTMLButtonElement>;
  onMouseDown?: MouseEventHandler<HTMLButtonElement>;
  onMouseUp?: MouseEventHandler<HTMLButtonElement>;
  /** Callback function on user long press. */
  onLongPress?: () => void;
  /** Callback function on key down. */
  onKeyDown?: KeyboardEventHandler<HTMLButtonElement>;
  /** A selection state for presetStyles that support 2 visual states for selections. */
  isSelected?: boolean;
};

type ButtonSize = "2xs" | "xs" | "sm";

type ButtonStyle =
  | "brand"
  | "floating"
  | "dangerous"
  | "transparent"
  | "dropdown"
  | "outline"
  | "dashed"
  | "levels"
  | "toggle"
  | "toggle-pill"
  | "toggle-floating";

type IconPosition = "trailing" | "leading" | "center" | "none";

type HorizontalAlignment = "left" | "center" | "right";

function classesFromTextStyle({
  fontSize,
  fontWeight,
  color,
  includePlaceHolder = false,
}: TextStyle): string {
  let size: string,
    weight: string,
    foreground = "";
  switch (fontSize) {
    case "xs":
      size =
        (includePlaceHolder ? "placeholder:text-textxs " : "") + "text-textxs";
      break;
    case "sm":
      size =
        (includePlaceHolder ? "placeholder:text-textsm " : "") + "text-textsm";
      break;
    case "md":
      size =
        (includePlaceHolder ? "placeholder:text-textmd " : "") + "text-textmd";
      break;
    case "lg":
      size =
        (includePlaceHolder ? "placeholder:text-textlg " : "") + "text-textlg";
      break;
  }

  switch (fontWeight) {
    case "regular":
      weight =
        (includePlaceHolder ? "placeholder:font-regular " : "") +
        "font-regular";
      break;
    case "medium":
      weight =
        (includePlaceHolder ? "placeholder:font-medium " : "") + "font-medium";
      break;
    case "medium_semi":
      weight =
        (includePlaceHolder ? "placeholder:font-[500] " : "") + "font-[500]";
      break;
    case "semibold":
      weight =
        (includePlaceHolder ? "placeholder:font-semibold " : "") +
        "font-semibold";
      break;
  }

  switch (color) {
    case "primary":
      foreground = "text-label-light-primary";
      break;
    case "secondary":
      foreground = "text-label-light-secondary";
      break;
    case "tertiary":
      foreground = "text-label-light-tertiary";
      break;
    case "brand":
      foreground = "text-brand-500";
      break;
  }

  return `${size} ${weight} ${foreground} `;
}

export type TextStyle = {
  fontSize: "xs" | "sm" | "md" | "lg";
  fontWeight: "regular" | "medium" | "medium_semi" | "semibold";
  color?: "primary" | "secondary" | "tertiary" | "brand";
  includePlaceHolder?: boolean;
};

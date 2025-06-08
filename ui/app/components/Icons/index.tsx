import { ReactElement } from "react";
import { pathsFromIcon } from "./iconPaths";

/**
 * Represents an icon as a visual symbol.
 * @returns The rendered icon as a visual symbol.
 */
export function Icon({
  glyph,
  primaryColor,
  size = IconSize.Small,
  theme = IconTheme.Regular,
  secondaryColor,
  className,
}: IconProps): ReactElement<IconProps> {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={className}
    >
      {pathsFromIcon({ size, glyph, primaryColor, secondaryColor, theme })}
    </svg>
  );
}

/** Represents a UI icon to be displayed with a given size, glyph and colors. */
export type IconProps = {
  /** The icon's glyph name. */
  glyph: Glyph;
  /** The icon size. */
  size?: IconSize;
  /** The theme of the icon. */
  theme?: IconTheme;
  /** The icon's primary color. */
  primaryColor?: string;
  /** The icon's secondary color, when its theme is of type {@link IconTheme.Palette}. Defaults to {@link primaryColor} if no value is given. */
  secondaryColor?: string;
  /** Additional class properties on the svg tag. */
  className?: string;
  /** The icon's hover color. */
  hoverColor?: string;
};

/** Represents an icon size as a viewbox of equal width and height. */
export enum IconSize {
  /** A 12-pixel viewbox icon size. */
  XSmall = 12,
  /** A 16-pixel viewbox icon size. */
  Small = 16,
  /** A 20-pixel viewbox icon size. */
  Medium = 20,
  /** A 24-pixel viewbox icon size. */
  Large = 24,
  /** A 28-pixel viewbox icon size. */
  XLarge = 28,
  /** A 32-pixel viewbox icon size. */
  XXLarge = 32,
}

/** Represents an icon theme as one of three sets of themes. */
export enum IconTheme {
  /** A regular, outlined style of icon drawing. */
  Regular = "regular",
  /** A solid fill of the outline style of icon drawing. */
  Filled = "filled",
  /** A duo color style of icon drawing. */
  Palette = "palette",
}

/** Describes an icon to be drawn. */
/**
 * Represents the available glyphs/icons.
 */
export enum Glyph {
  /**
   * Represents no icon.
   */
  None,

  /**
   * Add icon drawing.
   * @description Tags: plus sign, include, insert.
   */
  Add,
  /**
   * Add icon surrounded by a circle.
   * @description Tags: circled, plus sign, include.
   */
  AddCircle,
  /**
   * An icon that indicates a pinned location.
   * @description Tags: structure, real estate, assets, building.
   */
  Address,
  /**
   * An icon that represents an area on a 2D plane.
   * @description Tags: space, area, 2D, plane, flat, land, select object.
   */
  Area,
  /**
   * An icon that represents an area on a 2D plane with a money symbol.
   * @description Tags: space, area, 2D, plane, flat, land, money, cash, cost, select object.
   */
  AreaMoney,
  /**
   * An icon of an arrow turning clockwise, usually used for refresh purposes.
   * @description Tags: structure, real estate, assets, building.
   */
  ArrowClockwise,
  /**
   * An icon of an arrow pointing downwards, used for navigation or directional scenarios.
   * @description Tags: arrow, down, direction.
   */
  ArrowDown,
  /**
   * An icon of arrows pointing in opposite directions, used for navigation or directional scenarios.
   * @description Tags: arrow, swap, direction, switch, alternate.
   */
  ArrowSwap,
  /**
   * An icon of an arrow pointing upwards, used for navigation or directional scenarios.
   * @description Tags: arrow, up, direction.
   */
  ArrowUp,
  /**
   * An icon with two boxes in which the bigger one resembles a building.
   * @description Tags: structure, real estate, assets, building.
   */
  Assets,
  /**
   * An icon that displays a chain link, to represent attachment or linking scenarios.
   * @description Tags: structure, real estate, assets, building.
   */
  Attach,
  /**
   * An icon that displays a balloon, used for party or birthday.
   * @description Tags: chat, talk, conversation, balloon, speech bubble.
   */
  Balloon,
  /**
   * An icon of an 'x' variable surrounded by curly braces.
   * @description Tags: variable, math, algebra, equation, incognito.
   */
  BracesVariable,
  /**
   * An icon resembling a left square bracket, used in mathematical scenarios.
   * @description Tags: bracket, math, algebra, equation.
   */
  BracketSquareLeft,
  /**
   * An icon resembling a right square bracket, used in mathematical scenarios.
   * @description Tags: bracket, math, algebra, equation.
   */
  BracketSquareRight,
  /**
   * An icon resembling a brick wall. Used for construction or building scenarios.
   * @description Tags: structure, construction, architecture, wall.
   */
  Bricks,
  /**
   * An icon resembling a broom, used for cleaning or sweeping scenarios.
   * @description Tags: clean, sweep, remove, delete, trash, bin.
   */
  Broom,
  /**
   * An icon of a board with split sections.
   * @description Tags:board, split, dashboard.
   */
  BoardSplit,
  /**
   * An icon resembling a building. Used for location scenarios.
   * @description Tags: structure, construction, architecture, building.
   */
  Building,
  /**
   * An icon resembling a bank building. Used for location scenarios.
   * @description Tags: structure, construction, architecture, bank.
   */
  BuildingBank,
  /**
   * An icon resembling a bank building. Used for location scenarios.
   * @description Tags: structure, construction, architecture, bank.
   */
  BuildingBankCrossed,
  /**
   * A building that resembles a house. Used for location scenarios.
   * @description Tags: structure, construction, architecture, home, house.
   */
  BuildingHouse,
  /**
   * A building that resembles a house. Contains a arrow pointing left and right.
   * @description Tags: structure, construction, architecture, home, house.
   */
  BuildingHouseSwap,
  /**
   * An icon used to resemble team days at office, or a corporation or meetups.
   * @description Tags: in-person, team, meeting, office, enterprise, corporation, group.
   */
  BuildingPeople,
  /**
   * A building that resembles a retail. Used for location scenarios.
   * @description Tags: structure, construction, architecture, shop.
   */
  BuildingRetail,
  /**
   * A building that resembles a retail. Contains a arrow pointing left and right.
   * @description Tags: structure, construction, architecture, shop.
   */
  BuildingRetailSwap,
  /**
   * A building that resembles a skyscraper.
   * @description Tags: structure, construction, architecture, shop.
   */
  BuildingSkyscraper,

  /**
   * A calculator with a chat balloon above it.
   * @description Tags: math, chat, talk, conversation, calculator.
   */
  CalculatorChat,
  /**
   * An icon resembling a paper calendar, used in date or scheduling scenarios.
   * @description Tags: schedule, event, date.
   */
  Calendar,
  /**
   * A calendar with an add symbol, used for scheduling or adding events.
   * @description Tags: schedule, event, add, plus sign, date.
   */
  CalendarAdd,
  /**
   * A calendar with an edit symbol, used for scheduling or editing events.
   * @description Tags: schedule, event, edit, pencil, date.
   */
  CalendarEdit,
  /**
   * An empty calendar icon, used for scheduling or empty state scenarios.
   * @description Tags: schedule, event, empty, free, date.
   */
  CalendarEmpty,
  /**
   * A calendar with a goal symbol, used for scheduling or goal setting scenarios.
   * @description Tags: schedule, event, goal, date, target.
   */
  CalendarGoal,
  /**
   * A calendar with a link symbol, used for linking setting scenarios.
   * @description Tags: schedule, event, goal, date, target.
   */
  CalendarLink,
  /**
   * A calendar with a settings symbol, used for calendar configuration scenarios.
   * @description Tags: schedule, event, goal, date, target, settings.
   */
  CalendarSettings,
  /**
   * A calendar pointing to today's date, used for scheduling or date scenarios.
   * @description Tags: schedule, event, goal, date, target.
   */
  CalendarToday,
  /**
   * A icon of a dollar bill and two arrows around it.
   * @description Tags: dollar, money, cash, flow.
   */
  CashFlow,
  /**
   * A icon that shows a certificate like, type paper.
   * @description Tags: schedule, event, goal, date, target.
   */
  Certificate,
  /**
   * An icon of the ChatGPT logo.
   * @description Tags: chat, GPT, logo, AI.
   */
  ChatGPT,
  /**
   * A checkbox icon that is indeterminate, used for toggle selection states or approvals.
   * @description Tags: approval, selected, checked, component.
   */
  CheckboxIndeterminate,
  /**
   * A checkbox icon that is toggled, used for toggle selection states or approvals.
   * @description Tags: approval, selected, checked, component.
   */
  CheckboxOn,
  /**
   * A checkbox icon that is untoggled, used for toggle selection states or approvals.
   * @description Tags: approval, unselected, unchecked, component.
   */
  CheckboxOff,
  /**
   * Checkmark icon, used for toggle selection states or approvals.
   * @description Tags: approval, selected, checked.
   */
  Checkmark,
  /**
   * Checkmark icon surrounded by a circle.
   * @description Tags: approval, selected, checked.
   */
  CheckmarkCircle,
  /**
   * An icon with a square checkmark and a circle checkmark.
   * @description Tags: approval, selected, checked, multiple.
   */
  CheckmarkCircleSquare,
  /**
   * Checkmark icon, but in mini size.
   * @description Tags: approval, selected, checked.
   */
  CheckmarkMini,
  /**
   * An icon of a checkmark surrounded by a starburst.
   * @description Tags: approval, valid, selected, checked, multiple, special, important.
   */

  CheckmarkStarburst,
  /**
   * An icon of a checkmark surrounded by a starburst with an off state.
   * @description Tags: approval, valid, selected, checked, multiple, special, important.
   */
  CheckmarkStarburstOff,
  /**
   * Double chevron down icon, used for navigation or directional scenarios.
   * @description Tags: arrow, down, direction.
   */
  ChevronDoubleDown,
  /**
   * Double chevron left icon, used for navigation or directional scenarios.
   * @description Tags: arrow, left, direction.
   */
  ChevronDoubleLeft,
  /**
   * Double chevron right icon, used for navigation or directional scenarios.
   * @description Tags: arrow, right, direction.
   */
  ChevronDoubleRight,
  /**
   * Chevron down icon, used to denote direction or represent a dropdown component.
   * @description Tags: arrow, down, direction.
   */
  ChevronDown,
  /**
   * Chevron left icon, used to denote direction or represent backward navigation.
   * @description Tags: arrow, left, direction.
   */
  ChevronLeft,
  /**
   * A left and right chevron icon, used for navigation, alternation, measuring width or bidirectional scenarios.
   * @description Tags: chevron, left, right, direction, width, bidirectional.
   */
  ChevronLeftRight,
  /**
   * Chevron right icon, used to denote direction or represent forward navigation.
   * @description Tags: arrow, right, direction.
   */
  ChevronRight,
  /**
   * Chevron up and down icon, used in reorder or select scenarios.
   * @description Tags: arrow, direction, up, down.
   */
  ChevronUpDown,
  /**
   * Clock icon, used for time, schedule or duration scenarios.
   * @description Tags: time, schedule, duration, clock.
   */
  Clock,
  /**
   * Cloud icon with an arrow down, used for cloud storage download, download or cloud computing scenarios.
   * @description Tags: cloud, storage, computing, donwload.
   */
  CloudArrowDown,
  /**
   * Cloud icon with an arrow up, used for cloud storage, uploading or cloud computing scenarios.
   * @description Tags: cloud, storage, computing, upload.
   */
  CloudArrowUp,
  /**
   * An icon of coins with equal signs in the middle.
   * @description Tags: money, bill, currency, invoice, constant.
   */
  CoinsConstant,
  /**
   * An icon that represents the concept of confiability,
   * @description Tags: trust, shield, sparkle.
   */
  Confiability,
  /**
   * An icon that represents visual content, used in generic content representation.
   * @description Tags: content, visual, image, picture, photo, preview.
   */
  ContentView,
  /**
   * An icon that represents a contract, used in legal or agreement scenarios.
   * @description Tags: legal, agreement, contract, terms, conditions, handwrite, signature, pen.
   */
  Contract,
  /**
   * An icon used in general creation scenarios.
   * @description Tags: create, new, pencil, rename, edit, status.
   */
  Create,
  /**
   * A curve chart icon where lines are in chunks, used in data visualization scenarios.
   * @description Tags: chart, curve, data, line, cartesian.
   */
  CurveChunks,
  /**
   * A curve chart icon where all points are custom, used in data visualization scenarios.
   * @description Tags: chart, curve, data, line, cartesian, edit, rename.
   */
  CurveCustom,
  /**
   * A curve chart icon where the line is exponential, used in data visualization scenarios.
   * @description Tags: chart, curve, data, line, cartesian.
   */
  CurveExponential,
  /**
   * A curve chart icon where the line is linear, used in data visualization scenarios.
   * @description Tags: chart, curve, data, line, cartesian.
   */
  CurveLine,
  /**
   * A data bar chart icon, used in data visualization scenarios.
   * @description Tags: chart, data, bar, vertical.
   */
  DataBarChart,
  /**
   * A data pie chart icon, used in data visualization scenarios.
   * @description Tags: chart, data, pie, donut, doughnut, share, ratio.
   */
  DataPie,
  /**
   * A chart of scattered data points, used in data visualization scenarios.
   * @description Tags: chart, scatter, data, points, cartesian.
   */
  DataScatter,
  /**
   * An icon used to increase number of decimal places.
   * @description Tags: increase, decimal, places, digits, math, excel.
   */
  DecimalArrowLeft,
  /**
   * An icon used to decrease number of decimal places.
   * @description Tags: decrease, decimal, places, digits, math, excel.
   */
  DecimalArrowRight,
  /**
   * An icon resembling a trash can, used for deletion scenarios.
   * @description Tags: remove, delete, trash, bin.
   */
  Delete,
  /**
   * An icon resembling a arrow loop, used for dependency scenarios.
   * @description Tags: remove, delete, trash, bin.
   */
  Dependency,
  /**
   * An icon resembling a design project, with a set-square and a ruler.
   * @description Tags: design, project, set-square, ruler.
   */
  Design,
  /**
   * An icon resembling chain link being broken.
   * @description Tags: remove, delete, trash, bin.
   */
  Detach,
  /**
   * An information icon, used when more context or help is needed.
   * @description Tags: description, details, help, information.
   */
  Details,
  /**
   * An icon that represents dismissal, deletion, or invalid state.
   * @description Tags: remove, delete, trash, bin, invalid, dismiss.
   */
  Dismiss,
  /**
   * An icon that represents dismissal, deletion, or invalid state.
   * @description Tags: remove, delete, trash, bin, invalid, dismiss.
   */
  DismissCircle,
  /**
   * An icon that represents multiple setting bars.
   * @description Tags: display, settings, fine tuning.
   */
  Display,
  /**
   * An icon of a document with an add symbol, used in document scenarios.
   * @description Tags: document, add, create, include.
   */
  DocumentAdd,
  /**
   * And icon of two documents pointing to each other, used in document comparison scenarios.
   * @description Tags: document, compare, two, side by side, blame.
   */
  DocumentCompare,
  /**
   * An icon of a document if chart data, used in data report scenarios.
   * @description Tags: document, report, data, chart.
   */
  DocumentData,
  /**
   * An icon of a document with a branch control symbol, used in monitoring scenarios.
   * @description Tags: document, monitoring, create, include.
   */
  DocumentMonitoring,
  /**
   * An icon used to represent general file types and actions.
   * @description Tags: paper, work, file, horizontal.
   */
  DocumentPercent,
  /**
   * An document icon with a ribbon, used in document scenarios.
   * @description Tags: document, target, goal, milestone.
   */
  DocumentRibbon,
  /**
   * An document icon with a table symbol, used in document and table scenarios.
   * @description Tags: document, target, goal, milestone.
   */
  DocumentTable,
  /**
   * An document icon with a target symbol, used in document scenarios.
   * @description Tags: document, target, goal, milestone.
   */
  DocumentTarget,
  /**
   * A double check mark icon.
   * @description Tags: check, mark, double.
   */
  DoubleCheckMark,
  /**
   * An icon used to express available dropdown options.
   * @description Tags: dropdown, options, actions, select, chevron, arrow.
   */
  Dropdown,
  /**
   * A duplicate icon, used in copy scenarios.
   * @description Tags: copy, clone, replicate.
   */
  Duplicate,
  /**
   * A icon that displays two cycles of two colors.
   * @description Tags: copy, clone, replicate.
   */
  DuoEvents,
  /**
   *  An icon that resembles a pencil, used for editing, updating or writing scenarios.
   * @description Tags: edit, update, write, pen, pencil.
   */
  Edit,
  /**
   * An icon that resembles a pencil with a block symbol, used for read-only or restricted editing scenarios.
   * @description Tags: edit, update, write, pen, pencil, block.
   */
  EditProhibited,
  /**
   *  An icon that represents empty shelves.
   * @description Tags: edit, update, write, pen, pencil.
   */
  Empty,
  /**
   * An equal sign icon, used in math or comparison scenarios.
   * @description Tags: equal, math, comparison, equation.
   */
  Equals,
  /**
   * An icon that represents an exclamation point.
   * @description Tags: warning, error, exclamation.
   */
  Exclamation,
  /**
   * An icon of an eye staring, used for visibility or focus scenarios.
   * @description Tags: eye, look, focus, visibility, attention, glimpse, gaze.
   */
  EyeGaze,
  /**
   * An icon of a filter, used for sorting or filtering scenarios.
   * @description Tags: sort, filter, funnel, order, organize.
   */
  Filter,
  /**
   * A flag icon, used in mail to mark as important, or as goal/milestone metaphors.
   * @description urgent, important, look, alert, stage, milestone, goal.
   */
  Flag,
  /**
   * An icon used to represent the concept of flexibility.
   * @description pen, edit, circl.
   */
  Flexibility,
  /**
   * A flag icon that shows a rectangle of time frames and a percentage symbol.
   * @description urgent, important, look, alert, stage, milestone, goal.
   */
  FlowRate,
  /**
   * An open folder icon, used in file management scenarios or to represent empty state.
   * @description Tags: file, directory, storage, organize, collection.
   */
  FolderOpen,
  /**
   * An icon that resembles a gantt chart.
   * @description Tags: gantt, chart, timeline.
   */
  GanttChart,
  /**
   * An icon that resembles friction for dragging vertically, used in drag and drop scenarios.
   * @description Tags: drag, drop, friction, move, reorder.
   */
  GripperVertical,
  /**
   * An icon that displays a hand with and arrow bouncing off of it.
   * @description Tags: generic, hand, arrow, bounce.
   */
  HandBounce,
  /**
   * An icon that displays a hand holding a bag of cash.
   * @description Tags: generic, hand, cash, bag.
   */
  HandCash,
  /**
   * An icon that displays a hand shake symbol, used for agreement or partnership scenarios.
   * @description Tags: generic, hand, shake, agreement, partnership.
   */
  HandShake,
  /**
   * An icon that displays a hand shake symbol with a line crossing, used for agreement or partnership scenarios that are not fulfilled.
   * @description Tags: generic, hand, shake, agreement, partnership.
   */
  HandShakeOff,
  /**
   * An icon resembling a broken heart, used for love or health scenarios.
   * @description Tags: love, health, heart, pulse, beat.
   */
  HeartBroken,
  /**
   * An icon used in scenarios needing to see history of changes.
   * @description Tags: back, undo, time, clock, history.
   */
  History,
  /**
   * Default home outlined icon.
   * @description Tags: generic, default, circular, circle, round.
   */
  Home,
  /**
   * Home icon but filled inside.
   * @description Tags: generic, default, circular, circle, round.
   */
  HomeSolid,
  /**
   * Defines an hourglass icon with sand flowing down that is half full. Useful for time keeping scenarios.
   * @description Tags: time, hourglass, sand, flow, half, partial.
   */
  HourglassHalf,
  /**
   * Default icon drawing.
   * @description Tags: generic, default, circular, circle, round.
   */
  Icon,
  /**
   * An icon of money with an arrow pointing upwards, used for money and growth scenarios.
   * @description Tags: money, bill, currency, invoice, growth, increase.
   */
  Inflation,
  /**
   * An icon that guides users with information, used for insights or additional details.
   * @description Tags: idea, information, details.
   */
  Info,
  /**
   * An icon that displays a crane, used for construction or building scenarios.
   * @description Tags: build, construction, crane.
   */
  Infrastructure,
  /**
   * Error icon with exclamation point.
   * @description Tags: Error, warning, fail, invalid.
   */
  InputError,
  /**
   * An icon resembling a lightbulb.
   * @description Tags: idea, light, turned on, activate.
   */
  Insight,
  /**
   * An icon resembling a receipt with installments to pay.
   * @description Tags: receipt, paper, list, installments.
   */
  InstallmentsConstrained,
  /**
   * An icon resembling a cut-out receipt with installments.
   * @description Tags: receipt, paper, list, installments, cut-out.
   */
  InstallmentsUnconstrained,
  /**
   * An icon resembling an empty space with arrows pointing inwards and defining size.
   * @description Tags: space, size, width, height, dimensions, range, span.
   */
  Interval,
  /**
   * An icon representing a person with a terrain behind.
   * @description Tags: person, human, avatar, terrain, land, property, real estate.
   */
  Landowner,
  /**
   * An icon 3 layers stacked on top of each other.
   * @description Tags: receipt, paper, list, installments, cut-out.
   */
  Layers,
  /**
   * An icon 3 layers stacked on top of each other but filled inside.
   * @description Tags: receipt, paper, list, installments, cut-out.
   */
  LayersSolid,
  /**
   * An icon that displays a leaf.
   * @description Tags: plant, environment, nature, leaf, tree.
   */
  Leaf,
  /**
   * An icon resembling a library book.
   * @description Tags: receipt, paper, list, installments, cut-out, publish.
   */
  LibraryBook,
  /**
   * A lightBulb.
   * @description Tags: structure, construction, architecture, shop.
   */
  LightBulb,
  /**
   * An icon of a horizontal line.
   * @description Tags: line, horizontal, divider, separator, dash.
   */
  LineHorizontal,
  /**
   * An icon that displays a lock with a closed padlock.
   * @description Tags: lock, block, restricted.
   */
  LockClosed,
  /**
   * An icon that displays a lock with a closed padlock.
   * @description Tags: lock, block, restricted.
   */
  LockLocked,
  /**
   * An icon that displays a lock with a open padlock.
   * @description Tags: lock, block, restricted.
   */
  LockUnlocked,
  /**
   * An icon that displays a lock with stripes on it. For limited access scenarios.
   * @description Tags: lock, block, restricted, stripes, options, limited.
   */
  LockStripes,
  /**
   * An icon of a Fx symbol to represent mathematical formulas.
   * @description Tags: money, settings, definitions, bill, currency.
   */
  MathFormula,
  /**
   * An icon off a dial being turned to the maximum.
   * @description Tags: money, settings, definitions, bill, currency.
   */
  Maximum,
  /**
   * An icon off a dial being turned to the minimum.
   * @description Tags: money, settings, definitions, bill, currency.
   */
  Minimum,
  /**
   * An icon resembling a megaphone with sound waves.
   * @description Tags: loud, sound, waves, megaphone, announcement.
   */
  MegaphoneLoud,
  /**
   * An icon resembling paper money with no currency symbols.
   * @description Tags: money, bill, currency, invoice.
   */
  Money,
  /**
   * An icon resembling a bill that is split in half.
   * @description Tags: money, bill, currency, invoice, split, half.
   */
  MoneyDivide,
  /**
   * An icon resembling a hand holding money. Useful for payment scenarios.
   * @description Tags: money, bill, currency, invoice, payment, cash, paid.
   */
  MoneyHand,
  /**
   * An icon of money with an hourglass, used for money and time scenarios.
   * @description Tags: money, bill, currency, invoice, time, installments.
   */
  MoneyHourglass,
  /**
   * An icon of a bill with a gear on the bottom right corner.
   * @description Tags: money, settings, definitions, bill, currency.
   */
  MoneySettings,
  /**
   * An icon of money cut in half, used for money and tax scenarios.
   * @description Tags: money, bill, currency, invoice, tax, cut, half.
   */
  MoneyTax,
  /**
   * An icon resembling three horizontal dots, used for more options or actions.
   * @description Tags: more, options, actions, ellipsis.
   */
  MoreHorizontal,
  /**
   * An icon resembling three vertical dots, used for more options or actions.
   * @description Tags: more, options, actions, ellipsis.
   */
  MoreVertical,
  /**
   * An icon for the multiplication operation symbol.
   * @description Tags: multiply, times, math, operation.
   */
  Multiply,
  /**
   * An icon used in general opening app actions.
   * @description Tags: open, app, launch, start, external, link, window, new, expand, arrow.
   */
  Open,
  /**
   * An icon to represent a selected option.
   * @description Tags: selected, option, choice, pick.
   */
  OptionCheckmark,
  /**
   * An icon that symbolizes a payback.
   * @description Tags: bottom, panel, sidebar.
   */
  Payback,
  /**
   * An icon that symbolizes a payback.
   * @description Tags: bottom, panel, sidebar.
   */
  PaybackDiscount,
  /**
   * An icon that symbolizes a panel on the bottom side.
   * @description Tags: bottom, panel, sidebar.
   */
  PanelBottom,
  /**
   * An icon that symbolizes a panel on the left side.
   * @description Tags: left, panel, sidebar.
   */
  PanelLeft,
  /**
   * An icon that symbolizes a panel on the right side.
   * @description Tags: right, panel, sidebar, drawer.
   */
  PanelRight,
  /**
   * An icon of two people.
   * @description Tags: user, avatar, person, human, patient, contact, guest, new.
   */
  People,
  /**
   * An icon of a person, Used in a wide range of scenarios - representing a general person, a contact, contact lists, sharing, and managing access.
   * @description Tags: user, avatar, person, human, patient, contact, guest, new.
   */
  Person,
  /**
   * An icon of a person with a plus sign, used for user or avatar UI scenarios.
   * @description Tags: user, avatar, person, human, patient, contact, guest, new.
   */
  PersonAdd,
  /**
   * An icon of a person with a circle around it. Used for user or avatar UI scenarios.
   * @description Tags: user, avatar, person, circle, human, patient, contact, guest.
   */
  PersonCircle,
  /**
   * An icon of a hand with a diamond, used for prizing or award scenarios.
   * @description Tags: prize, award, diamond, hand, winner.
   */
  Prize,
  /**
   * An icon of a hand with coins falling to it from above.
   * @description Tags: money, coins, currency, loan.
   */
  Profit,
  /**
   * An icon of a hand with coins falling to it from above with an arrow back.
   * @description Tags: money, coins, currency, loan, return.
   */
  ProfitReversal,
  /**
   * An icon of a circle with a diagonal line crossing.
   * @description Tags: money, coins, currency, loan.
   */
  Prohibited,
  /**
   * An icon used to represent a collection of text content.
   * @description Tags: list, content, collection, news, topics.
   */
  ReadingList,
  /**
   * An icon used to represent a receipt, purchase order, line items or an invoice.
   * @description Tags: receipt, paper, list, items, invoice, retail, invoice, P.O.
   */
  ReceiptMoney,
  /**
   * An icon of a receipt with a search symbol.
   * @description Tags: receipt, paper, list, magnifier, magnifying glass, items, invoice, retail, invoice, P.O.
   */
  ReceiptSearch,
  /**
   * An icon resembling an infinite paper receipt to represent receivables flow.
   * @description Tags: receipt, paper, list, items, invoice, retail, invoice, P.O.
   */
  Receivables,
  /**
   * An icon used to represent getting started, successful progress, launch or space scenarios.
   * @description Tags: idea, new, getting started, space, uplift, success, launch.
   */
  Rocket,
  /**
   * An icon resembling a for sale sign with a house symbol.
   * @description Tags: sale, for sale, real estate, house, housing, home.
   */
  Sales,
  /**
   * An icon of a pig and a coin, used for money or currency scenarios.
   * @description Tags: money, coins, currency, stack, pile.
   */
  Savings,
  /**
   * An icon resembling a magnifying glass, used to represent a search action.
   * @description Tags: find, search, look for, lookup, magnifying glass.
   */
  Search,
  /**
   * An icon resembling a gear, used for settings or configuration scenarios.
   * @description Tags: gear, settings, configuration, definitions.
   */
  Settings,
  /**
   * An icon that displays two squares with a intersection point.
   * @description Tags: intersection, square, shape.
   */
  ShapeIntersect,
  /**
   * An icon of sparkling stars used to represent new content, or smart feature scenarios.
   * @description Tags: new, spark, stars, smart, feature, content.
   */
  Sparkle,
  /**
   * An icon of content spread inside a range.
   * @description Tags: spread, range, span, area, space, distribute.
   */
  Spread,
  /**
   * An icon used to indicate a warning or error state.
   * @description Tags: warning, alert, caution, attention, exclamation, circle.
   */
  StatusError,
  /**
   * An icon used to indicate an information state.
   * @description Tags: information, details, help, idea, circle.
   */
  StatusInfo,
  /**
   * An icon used to indicate a successful state.
   * @description Tags: success, valid, correct, right, approved, checkmark, circle.
   */
  StatusSuccess,
  /**
   * An icon used to represent steps in the manufacturing process.
   * @description Tags: manufacturing, production, stage, level, stack, scale.
   */
  Steps,
  /**
   * Subtract icon drawing.
   * @description Tags: minus sign, remove, delete.
   */
  Subtract,
  /**
   * Subtract icon surrounded by a circle.
   * @description Tags: circled, minus sign, remove, delete.
   */
  SubtractCircle,
  /**
   * An icon resembling a building structure with sparkles, used for construction or building scenarios.
   * @description Tags: structure, construction, architecture, building.
   */
  Superstructure,
  /**
   * An icon resembling a terrain, used to represent a 2D plane or flat land.
   * @description Tags: plane, ground, flat, land, tilt, 2D.
   */
  Terrain,
  /**
   * An icon resembling a terrain with an add symbol, used for terrain creation scenarios.
   * @description Tags: plane, ground, flat, land, tilt, 2D.
   */
  TerrainAdd,
  /**
   * Icon used in general type creation and editing scenarios.
   * @description Tags: type, text, typography, steps, goals, items, list, to do, tasks.
   */
  TextBulletListSquare,
  /**
   * An icon that displays a clock with a timer, used for time or duration scenarios.
   * @description Tags: plane, ground, flat, land, tilt, 2D.
   */
  Timer,
  /**
   * An icon that displays a thumb dislike.
   * @description Tags: thumb, dislike, negative.
   */
  ThumbDislike,
  /**
   * An icon that displays a thumb like.
   * @description Tags: thumb, like, positive.
   */
  ThumbLike,
  /**
   * An icon that displays two thumbs, one up and one down.
   * @description Tags: thumb, like, positive, dislike, negative.
   */
  ThumbLikeDislike,
  /**
   * An icon of a triangle with an exclamation mark inside, used to indicate a warning or caution.
   * @description Tags: warning, alert, caution, attention, exclamation.
   */
  Warning,
  /**
   * An icon resembling a hand holding a hammer, used for construction or building scenarios.
   * @description Tags: build, construction, hammer, operate, operations.
   */
  Work,
}

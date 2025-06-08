export type AppIcon = {
  glyph: AppGlyph;
  active?: boolean;
};

export enum AppGlyph {
  /** Represents a dashboard focus ui */
  Dashboard,
  /** Represents a costs app by displaying a hand with a hammer */
  Costs,
  /** Represents a revenue app by displaying a dollar bill */
  Revenue,
  /** Represents a expenses app by displaying a receipt */
  Expenses,
  /** Represents a financing app by displaying a letter with money inside */
  Financing,
  /** Represents a partners app by displaying a people */
  Partners,
  /** Represets the library app by displaying a stack of books */
  Library,
  /** Represents the parformance view by displaying a dice */
  Dice,
}

export function AppIcon({ glyph, active }: AppIcon) {
  switch (glyph) {
    case AppGlyph.Dashboard:
      if (active) {
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.5 4C4.67157 4 4 4.67157 4 5.5V10.5C4 11.3284 4.67157 12 5.5 12H9.5C10.3284 12 11 11.3284 11 10.5V5.5C11 4.67157 10.3284 4 9.5 4H5.5ZM14.5 12C13.6716 12 13 12.6716 13 13.5V18.5C13 19.3284 13.6716 20 14.5 20H18.5C19.3284 20 20 19.3284 20 18.5V13.5C20 12.6716 19.3284 12 18.5 12H14.5Z"
              fill="url(#paint0_linear_1572_213)"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.5 4C13.6716 4 13 4.67157 13 5.5V8.5C13 9.32843 13.6716 10 14.5 10H18.5C19.3284 10 20 9.32843 20 8.5V5.5C20 4.67157 19.3284 4 18.5 4H14.5ZM5.5 14C4.67157 14 4 14.6716 4 15.5V18.5C4 19.3284 4.67157 20 5.5 20H9.5C10.3284 20 11 19.3284 11 18.5V15.5C11 14.6716 10.3284 14 9.5 14H5.5Z"
              fill="url(#paint1_linear_1572_213)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1572_213"
                x1="12"
                y1="4"
                x2="12"
                y2="20"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FFE0E6" />
                <stop offset="1" stopColor="#FF97AE" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_1572_213"
                x1="12"
                y1="4"
                x2="12"
                y2="20"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FF5D83" />
                <stop offset="1" stopColor="#D70041" />
              </linearGradient>
            </defs>
          </svg>
        );
      } else {
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.5 4C4.67157 4 4 4.67157 4 5.5V10.5C4 11.3284 4.67157 12 5.5 12H9.5C10.3284 12 11 11.3284 11 10.5V5.5C11 4.67157 10.3284 4 9.5 4H5.5ZM14.5 12C13.6716 12 13 12.6716 13 13.5V18.5C13 19.3284 13.6716 20 14.5 20H18.5C19.3284 20 20 19.3284 20 18.5V13.5C20 12.6716 19.3284 12 18.5 12H14.5Z"
              fill="url(#paint0_linear_1572_205)"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.5 4C13.6716 4 13 4.67157 13 5.5V8.5C13 9.32843 13.6716 10 14.5 10H18.5C19.3284 10 20 9.32843 20 8.5V5.5C20 4.67157 19.3284 4 18.5 4H14.5ZM5.5 14C4.67157 14 4 14.6716 4 15.5V18.5C4 19.3284 4.67157 20 5.5 20H9.5C10.3284 20 11 19.3284 11 18.5V15.5C11 14.6716 10.3284 14 9.5 14H5.5Z"
              fill="url(#paint1_linear_1572_205)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1572_205"
                x1="12"
                y1="4"
                x2="12"
                y2="20"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#F0F0F1" />
                <stop offset="1" stopColor="#CECFD2" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_1572_205"
                x1="12"
                y1="4"
                x2="12"
                y2="20"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#CECFD2" />
                <stop offset="1" stopColor="#94969C" />
              </linearGradient>
            </defs>
          </svg>
        );
      }

    case AppGlyph.Dice:
      if (active) {
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M19.4903 16.7867C19.8051 16.6096 20 16.2764 20 15.9152V8.35492C20 7.97251 19.5882 7.73165 19.2549 7.91914L13.0195 11.4265C12.3897 11.7808 12 12.4471 12 13.1697V20.1451C12 20.5275 12.4118 20.7683 12.7451 20.5809L19.4903 16.7867Z"
              fill="url(#paint0_linear_9635_8469)"
            />
            <path
              d="M4.50974 16.7867C4.19486 16.6096 4 16.2764 4 15.9152V8.35492C4 7.97251 4.41183 7.73165 4.74513 7.91914L10.9805 11.4265C11.6103 11.7808 12 12.4471 12 13.1697V20.1451C12 20.5275 11.5882 20.7683 11.2549 20.5809L4.50974 16.7867Z"
              fill="url(#paint1_linear_9635_8469)"
            />
            <path
              d="M4.77473 7.93579L11.0195 11.4485C11.6283 11.7909 12.3717 11.7909 12.9805 11.4485L19.2253 7.93579C19.5651 7.74464 19.5651 7.25536 19.2253 7.06421L12.4903 3.27577C12.1858 3.10454 11.8142 3.10454 11.5097 3.27577L4.77473 7.06421C4.43491 7.25536 4.43491 7.74464 4.77473 7.93579Z"
              fill="url(#paint2_linear_9635_8469)"
            />
            <ellipse
              cx="12"
              cy="7.25"
              rx="1.5"
              ry="0.75"
              fill="url(#paint3_linear_9635_8469)"
            />
            <ellipse
              cx="14.0001"
              cy="13.2498"
              rx="0.75"
              ry="1"
              transform="rotate(30 14.0001 13.2498)"
              fill="url(#paint4_linear_9635_8469)"
            />
            <ellipse
              cx="0.75"
              cy="1"
              rx="0.75"
              ry="1"
              transform="matrix(-0.866025 0.5 0.5 0.866025 9.79907 12)"
              fill="url(#paint5_linear_9635_8469)"
            />
            <ellipse
              cx="0.75"
              cy="1"
              rx="0.75"
              ry="1"
              transform="matrix(-0.866025 0.5 0.5 0.866025 6.79907 14)"
              fill="url(#paint6_linear_9635_8469)"
            />
            <ellipse
              cx="16.2374"
              cy="14.4871"
              rx="0.75"
              ry="1"
              transform="rotate(30 16.2374 14.4871)"
              fill="url(#paint7_linear_9635_8469)"
            />
            <ellipse
              cx="18.2374"
              cy="15.7371"
              rx="0.75"
              ry="1"
              transform="rotate(30 18.2374 15.7371)"
              fill="url(#paint8_linear_9635_8469)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_9635_8469"
                x1="12.5"
                y1="12"
                x2="19.5"
                y2="16.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FFE0E6" />
                <stop offset="1" stopColor="#FF97AE" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_9635_8469"
                x1="12"
                y1="12"
                x2="4.5"
                y2="17"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FFE0E6" />
                <stop offset="1" stopColor="#FF97AE" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_9635_8469"
                x1="12"
                y1="3"
                x2="12"
                y2="12"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FF97AE" />
                <stop offset="1" stopColor="#FEF3F2" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_9635_8469"
                x1="12"
                y1="6.5"
                x2="12"
                y2="8"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FF5D83" />
                <stop offset="1" stopColor="#D70041" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_9635_8469"
                x1="13.4698"
                y1="13.073"
                x2="14.884"
                y2="13.073"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FF5D83" />
                <stop offset="1" stopColor="#D70041" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_9635_8469"
                x1="0.219676"
                y1="0.823203"
                x2="1.63389"
                y2="0.823203"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FF5D83" />
                <stop offset="1" stopColor="#D70041" />
              </linearGradient>
              <linearGradient
                id="paint6_linear_9635_8469"
                x1="0.219676"
                y1="0.823203"
                x2="1.63389"
                y2="0.823203"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FF5D83" />
                <stop offset="1" stopColor="#D70041" />
              </linearGradient>
              <linearGradient
                id="paint7_linear_9635_8469"
                x1="15.7071"
                y1="14.3103"
                x2="17.1213"
                y2="14.3103"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FF5D83" />
                <stop offset="1" stopColor="#D70041" />
              </linearGradient>
              <linearGradient
                id="paint8_linear_9635_8469"
                x1="17.7071"
                y1="15.5603"
                x2="19.1213"
                y2="15.5603"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FF5D83" />
                <stop offset="1" stopColor="#D70041" />
              </linearGradient>
            </defs>
          </svg>
        );
      } else {
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M19.4903 16.7867C19.8051 16.6096 20 16.2764 20 15.9152V8.35492C20 7.97251 19.5882 7.73165 19.2549 7.91914L13.0195 11.4265C12.3897 11.7808 12 12.4471 12 13.1697V20.1451C12 20.5275 12.4118 20.7683 12.7451 20.5809L19.4903 16.7867Z"
              fill="url(#paint0_linear_2002_162)"
            />
            <path
              d="M4.50974 16.7867C4.19486 16.6096 4 16.2764 4 15.9152V8.35492C4 7.97251 4.41183 7.73165 4.74513 7.91914L10.9805 11.4265C11.6103 11.7808 12 12.4471 12 13.1697V20.1451C12 20.5275 11.5882 20.7683 11.2549 20.5809L4.50974 16.7867Z"
              fill="url(#paint1_linear_2002_162)"
            />
            <path
              d="M4.77473 7.93579L11.0195 11.4485C11.6283 11.7909 12.3717 11.7909 12.9805 11.4485L19.2253 7.93579C19.5651 7.74464 19.5651 7.25536 19.2253 7.06421L12.4903 3.27577C12.1858 3.10454 11.8142 3.10454 11.5097 3.27577L4.77473 7.06421C4.43491 7.25536 4.43491 7.74464 4.77473 7.93579Z"
              fill="url(#paint2_linear_2002_162)"
            />
            <ellipse
              cx="12"
              cy="7.25"
              rx="1.5"
              ry="0.75"
              fill="url(#paint3_linear_2002_162)"
            />
            <ellipse
              cx="14"
              cy="13.25"
              rx="0.75"
              ry="1"
              transform="rotate(30 14 13.25)"
              fill="url(#paint4_linear_2002_162)"
            />
            <ellipse
              cx="0.75"
              cy="1"
              rx="0.75"
              ry="1"
              transform="matrix(-0.866025 0.5 0.5 0.866025 9.79895 12)"
              fill="url(#paint5_linear_2002_162)"
            />
            <ellipse
              cx="0.75"
              cy="1"
              rx="0.75"
              ry="1"
              transform="matrix(-0.866025 0.5 0.5 0.866025 6.79889 14)"
              fill="url(#paint6_linear_2002_162)"
            />
            <ellipse
              cx="16.2374"
              cy="14.4874"
              rx="0.75"
              ry="1"
              transform="rotate(30 16.2374 14.4874)"
              fill="url(#paint7_linear_2002_162)"
            />
            <ellipse
              cx="18.2374"
              cy="15.7374"
              rx="0.75"
              ry="1"
              transform="rotate(30 18.2374 15.7374)"
              fill="url(#paint8_linear_2002_162)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_2002_162"
                x1="12.5"
                y1="12"
                x2="19.5"
                y2="16.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#F0F0F1" />
                <stop offset="1" stopColor="#CECFD2" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_2002_162"
                x1="12"
                y1="12"
                x2="4.5"
                y2="17"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#F0F0F1" />
                <stop offset="1" stopColor="#CECFD2" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_2002_162"
                x1="12"
                y1="3"
                x2="12"
                y2="12"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#CECFD2" />
                <stop offset="1" stopColor="#F0F0F1" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_2002_162"
                x1="12"
                y1="6.5"
                x2="12"
                y2="8"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#CECFD2" />
                <stop offset="1" stopColor="#94969C" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_2002_162"
                x1="13.4697"
                y1="13.0732"
                x2="14.8839"
                y2="13.0732"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#CECFD2" />
                <stop offset="1" stopColor="#94969C" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_2002_162"
                x1="0.219676"
                y1="0.823203"
                x2="1.63389"
                y2="0.823203"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#CECFD2" />
                <stop offset="1" stopColor="#94969C" />
              </linearGradient>
              <linearGradient
                id="paint6_linear_2002_162"
                x1="0.219676"
                y1="0.823203"
                x2="1.63389"
                y2="0.823203"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#CECFD2" />
                <stop offset="1" stopColor="#94969C" />
              </linearGradient>
              <linearGradient
                id="paint7_linear_2002_162"
                x1="15.7071"
                y1="14.3106"
                x2="17.1213"
                y2="14.3106"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#CECFD2" />
                <stop offset="1" stopColor="#94969C" />
              </linearGradient>
              <linearGradient
                id="paint8_linear_2002_162"
                x1="17.7071"
                y1="15.5606"
                x2="19.1213"
                y2="15.5606"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#CECFD2" />
                <stop offset="1" stopColor="#94969C" />
              </linearGradient>
            </defs>
          </svg>
        );
      }
      break;
    case AppGlyph.Costs:
      if (active) {
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.5476 12.6606L15.2904 11.4033L14.5832 10.6962L13.169 9.282L12.4619 8.57489L13.169 7.86779L12.1282 6.82693C10.7613 5.4601 8.54526 5.46009 7.17843 6.82693L5.05711 8.94825C3.69027 10.3151 3.69027 12.5312 5.05711 13.898L6.09794 14.9388L6.78599 15.665L8.20021 17.0792L8.92637 17.7673L9.65331 18.4942C10.2391 19.08 11.1888 19.08 11.7746 18.4942C12.0016 18.2673 12.1406 17.9857 12.1917 17.6918C12.6124 17.7235 13.0439 17.5785 13.3656 17.2568C13.6373 16.9851 13.7829 16.6352 13.8026 16.2796C14.1582 16.2599 14.5082 16.1142 14.7798 15.8425C14.8404 15.782 14.8947 15.7175 14.9428 15.6499L14.3964 15.1036C14.2012 14.9083 14.2012 14.5917 14.3964 14.3964C14.5917 14.2012 14.9083 14.2012 15.1035 14.3964L15.877 15.1699C16.1226 15.104 16.3548 14.9747 16.5476 14.7819C17.1334 14.1961 17.1334 13.2464 16.5476 12.6606Z"
              fill="url(#paint0_linear_1572_194)"
            />
            <path
              d="M8.9264 17.7672L7.54428 19.1494C6.76323 19.9304 5.4969 19.9304 4.71585 19.1494C3.9348 18.3683 3.9348 17.102 4.71585 16.3209L6.09798 14.9388L8.9264 17.7672Z"
              fill="url(#paint1_linear_1572_194)"
            />
            <path
              d="M16.7078 9.98591L15.2904 11.4033L12.462 8.57488L13.8794 7.15749L12.429 5.70709C11.799 5.07713 12.2452 3.99998 13.1361 3.99998H15.7574C16.1552 3.99998 16.5367 4.15802 16.818 4.43932L17.5859 5.20715L17.9384 4.85455C18.0322 4.76078 18.1594 4.7081 18.292 4.70811C18.4246 4.70811 18.5518 4.76079 18.6456 4.85456L19.3527 5.56174C19.4465 5.65551 19.4991 5.78269 19.4991 5.9153C19.4991 6.04791 19.4464 6.17509 19.3527 6.26886L19.0001 6.62138L20.0607 7.68198C20.6465 8.26776 20.6465 9.21751 20.0607 9.8033L19.3536 10.5104C18.7678 11.0962 17.818 11.0962 17.2323 10.5104L16.7078 9.98591Z"
              fill="url(#paint2_linear_1572_194)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1572_194"
                x1="6.49998"
                y1="7.5"
                x2="14"
                y2="16"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FFE0E6" />
                <stop offset="1" stopColor="#FF97AE" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_1572_194"
                x1="18"
                y1="6"
                x2="6.00002"
                y2="18.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FF5D83" />
                <stop offset="1" stopColor="#D70041" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_1572_194"
                x1="18"
                y1="6"
                x2="6.00002"
                y2="18.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FF5D83" />
                <stop offset="1" stopColor="#D70041" />
              </linearGradient>
            </defs>
          </svg>
        );
      } else {
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.5476 12.6606L15.2904 11.4033L14.5833 10.6962L13.169 9.282L12.4619 8.5749L13.169 7.86779L12.1282 6.82693C10.7614 5.4601 8.54528 5.46009 7.17844 6.82693L5.05712 8.94825C3.69029 10.3151 3.69029 12.5312 5.05712 13.898L6.09796 14.9388L6.78601 15.665L8.20022 17.0792L8.92639 17.7673L9.65332 18.4942C10.2391 19.08 11.1889 19.08 11.7746 18.4942C12.0016 18.2673 12.1406 17.9857 12.1917 17.6918C12.6124 17.7235 13.0439 17.5785 13.3656 17.2568C13.6373 16.9851 13.783 16.6352 13.8027 16.2796C14.1583 16.2599 14.5082 16.1142 14.7798 15.8425C14.8404 15.782 14.8947 15.7175 14.9428 15.6499L14.3964 15.1036C14.2012 14.9083 14.2012 14.5917 14.3964 14.3964C14.5917 14.2012 14.9083 14.2012 15.1036 14.3964L15.877 15.1699C16.1227 15.104 16.3548 14.9747 16.5476 14.7819C17.1334 14.1961 17.1334 13.2464 16.5476 12.6606Z"
              fill="url(#paint0_linear_1572_189)"
            />
            <path
              d="M8.92639 17.7672L7.54426 19.1494C6.76322 19.9304 5.49689 19.9304 4.71584 19.1494C3.93479 18.3683 3.93479 17.102 4.71584 16.3209L6.09796 14.9388L8.92639 17.7672Z"
              fill="url(#paint1_linear_1572_189)"
            />
            <path
              d="M16.7078 9.98591L15.2904 11.4033L12.4619 8.57488L13.8793 7.15749L12.4289 5.70709C11.799 5.07713 12.2451 3.99998 13.1361 3.99998H15.7574C16.1552 3.99998 16.5367 4.15802 16.818 4.43932L17.5858 5.20715L17.9384 4.85455C18.0322 4.76078 18.1594 4.7081 18.292 4.70811C18.4246 4.70811 18.5518 4.76079 18.6456 4.85456L19.3527 5.56174C19.4464 5.65551 19.4991 5.78269 19.4991 5.9153C19.4991 6.04791 19.4464 6.17509 19.3526 6.26886L19.0001 6.62138L20.0607 7.68198C20.6464 8.26776 20.6464 9.21751 20.0607 9.8033L19.3536 10.5104C18.7678 11.0962 17.818 11.0962 17.2322 10.5104L16.7078 9.98591Z"
              fill="url(#paint2_linear_1572_189)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1572_189"
                x1="6.5"
                y1="7.5"
                x2="14"
                y2="16"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#F0F0F1" />
                <stop offset="1" stopColor="#CECFD2" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_1572_189"
                x1="19"
                y1="5"
                x2="5"
                y2="19"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#CECFD2" />
                <stop offset="1" stopColor="#94969C" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_1572_189"
                x1="19"
                y1="5"
                x2="5"
                y2="19"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#CECFD2" />
                <stop offset="1" stopColor="#94969C" />
              </linearGradient>
            </defs>
          </svg>
        );
      }
    case AppGlyph.Revenue:
      if (active) {
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.5 18C19.3284 18 20 17.3284 20 16.5V10.5C20 9.67157 19.3284 9 18.5 9H16V14H14.95C14.7184 15.1411 13.7095 16 12.5 16C11.2905 16 10.2816 15.1411 10.05 14H5V16.5C5 17.3284 5.67157 18 6.5 18H18.5Z"
              fill="url(#paint0_linear_1572_180)"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.5 5C3.67157 5 3 5.67157 3 6.5V12.5C3 13.3284 3.67157 14 4.5 14H16.5C17.3284 14 18 13.3284 18 12.5V6.5C18 5.67157 17.3284 5 16.5 5H4.5ZM10.5 12C11.8807 12 13 10.8807 13 9.5C13 8.11929 11.8807 7 10.5 7C9.11929 7 8 8.11929 8 9.5C8 10.8807 9.11929 12 10.5 12Z"
              fill="url(#paint1_linear_1572_180)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1572_180"
                x1="12.5"
                y1="10"
                x2="12.5"
                y2="19"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FFE0E6" />
                <stop offset="1" stopColor="#FF97AE" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_1572_180"
                x1="9"
                y1="6"
                x2="9"
                y2="14"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FF5D83" />
                <stop offset="1" stopColor="#D70041" />
              </linearGradient>
            </defs>
          </svg>
        );
      } else {
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.5 18C19.3284 18 20 17.3284 20 16.5V10.5C20 9.67157 19.3284 9 18.5 9H16V14H14.95C14.7184 15.1411 13.7095 16 12.5 16C11.2905 16 10.2816 15.1411 10.05 14H5V16.5C5 17.3284 5.67157 18 6.5 18H18.5Z"
              fill="url(#paint0_linear_1570_162)"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.5 5C3.67157 5 3 5.67157 3 6.5V12.5C3 13.3284 3.67157 14 4.5 14H16.5C17.3284 14 18 13.3284 18 12.5V6.5C18 5.67157 17.3284 5 16.5 5H4.5ZM10.5 12C11.8807 12 13 10.8807 13 9.5C13 8.11929 11.8807 7 10.5 7C9.11929 7 8 8.11929 8 9.5C8 10.8807 9.11929 12 10.5 12Z"
              fill="url(#paint1_linear_1570_162)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1570_162"
                x1="12.5"
                y1="10"
                x2="12.5"
                y2="19"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#F0F0F1" />
                <stop offset="1" stopColor="#CECFD2" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_1570_162"
                x1="9"
                y1="6"
                x2="9"
                y2="14"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#CECFD2" />
                <stop offset="1" stopColor="#94969C" />
              </linearGradient>
            </defs>
          </svg>
        );
      }
    case AppGlyph.Expenses:
      if (active) {
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M19 19.75C19 20.4404 18.4404 21 17.75 21H17.4142C17.0164 21 16.6349 20.842 16.3536 20.5607L15.8536 20.0607C15.6583 19.8654 15.3417 19.8654 15.1464 20.0607L14.4571 20.75C14.0666 21.1405 13.4334 21.1405 13.0429 20.75L12.3536 20.0607C12.1583 19.8654 11.8417 19.8654 11.6464 20.0607L10.9571 20.75C10.5666 21.1405 9.93342 21.1405 9.54289 20.75L8.85355 20.0607C8.65829 19.8654 8.34171 19.8654 8.14645 20.0607L7.64645 20.5607C7.36514 20.842 6.98361 21 6.58579 21H6.25C5.55964 21 5 20.4404 5 19.75V4.5C5 3.67157 5.67157 3 6.5 3H17.5C18.3284 3 19 3.67157 19 4.5V19.75Z"
              fill="url(#paint0_linear_1572_237)"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 7.5C8 7.22386 8.22386 7 8.5 7H15.5C15.7761 7 16 7.22386 16 7.5V8.5C16 8.77614 15.7761 9 15.5 9H8.5C8.22386 9 8 8.77614 8 8.5V7.5ZM8 11.5C8 11.2239 8.22386 11 8.5 11H15.5C15.7761 11 16 11.2239 16 11.5V12.5C16 12.7761 15.7761 13 15.5 13H8.5C8.22386 13 8 12.7761 8 12.5V11.5ZM8.5 15C8.22386 15 8 15.2239 8 15.5V16.5C8 16.7761 8.22386 17 8.5 17H11.5C11.7761 17 12 16.7761 12 16.5V15.5C12 15.2239 11.7761 15 11.5 15H8.5Z"
              fill="url(#paint1_linear_1572_237)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1572_237"
                x1="12"
                y1="3"
                x2="12"
                y2="21.0429"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FFE0E6" />
                <stop offset="1" stopColor="#FF97AE" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_1572_237"
                x1="12"
                y1="6"
                x2="12"
                y2="16"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FF5D83" />
                <stop offset="1" stopColor="#D70041" />
              </linearGradient>
            </defs>
          </svg>
        );
      } else {
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M19 19.75C19 20.4404 18.4404 21 17.75 21H17.4142C17.0164 21 16.6349 20.842 16.3536 20.5607L15.8536 20.0607C15.6583 19.8654 15.3417 19.8654 15.1464 20.0607L14.4571 20.75C14.0666 21.1405 13.4334 21.1405 13.0429 20.75L12.3536 20.0607C12.1583 19.8654 11.8417 19.8654 11.6464 20.0607L10.9571 20.75C10.5666 21.1405 9.93342 21.1405 9.54289 20.75L8.85355 20.0607C8.65829 19.8654 8.34171 19.8654 8.14645 20.0607L7.64645 20.5607C7.36514 20.842 6.98361 21 6.58579 21H6.25C5.55964 21 5 20.4404 5 19.75V4.5C5 3.67157 5.67157 3 6.5 3H17.5C18.3284 3 19 3.67157 19 4.5V19.75Z"
              fill="url(#paint0_linear_1572_231)"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 7.5C8 7.22386 8.22386 7 8.5 7H15.5C15.7761 7 16 7.22386 16 7.5V8.5C16 8.77614 15.7761 9 15.5 9H8.5C8.22386 9 8 8.77614 8 8.5V7.5ZM8 11.5C8 11.2239 8.22386 11 8.5 11H15.5C15.7761 11 16 11.2239 16 11.5V12.5C16 12.7761 15.7761 13 15.5 13H8.5C8.22386 13 8 12.7761 8 12.5V11.5ZM8.5 15C8.22386 15 8 15.2239 8 15.5V16.5C8 16.7761 8.22386 17 8.5 17H11.5C11.7761 17 12 16.7761 12 16.5V15.5C12 15.2239 11.7761 15 11.5 15H8.5Z"
              fill="url(#paint1_linear_1572_231)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1572_231"
                x1="12"
                y1="3"
                x2="12"
                y2="21.0429"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#F0F0F1" />
                <stop offset="1" stopColor="#CECFD2" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_1572_231"
                x1="12"
                y1="6"
                x2="12"
                y2="16"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#CECFD2" />
                <stop offset="1" stopColor="#94969C" />
              </linearGradient>
            </defs>
          </svg>
        );
      }
    case AppGlyph.Financing:
      if (active) {
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4 11L7.5 8H12C10.6193 8 9.5 9.11929 9.5 10.5C9.5 11.8807 10.6193 13 12 13C13.3807 13 14.5 11.8807 14.5 10.5C14.5 9.11929 13.3807 8 12 8H16.5L20 11L12 16L4 11Z"
              fill="#FF97AE"
            />
            <path
              d="M4 19.5V11L19.4532 20.6582C19.194 20.8718 18.862 21 18.5 21H5.5C4.67157 21 4 20.3284 4 19.5Z"
              fill="#FFC6D3"
            />
            <path
              d="M20 11L12 16L19.4532 20.6582C19.7871 20.3831 20 19.9664 20 19.5V11Z"
              fill="#FFE0E6"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17 12.875L12 16L7 12.875L7 5.5C7 4.67157 7.67157 4 8.5 4H15.5C16.3284 4 17 4.67157 17 5.5V12.875ZM14.5 10.5C14.5 9.11929 13.3807 8 12 8C10.6193 8 9.5 9.11929 9.5 10.5C9.5 11.8807 10.6193 13 12 13C13.3807 13 14.5 11.8807 14.5 10.5Z"
              fill="url(#paint0_linear_1572_285)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1572_285"
                x1="12"
                y1="16"
                x2="12"
                y2="3.99999"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FF5D83" />
                <stop offset="1" stopColor="#D70041" />
              </linearGradient>
            </defs>
          </svg>
        );
      } else {
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4 11L7.5 8H12C10.6193 8 9.5 9.11929 9.5 10.5C9.5 11.8807 10.6193 13 12 13C13.3807 13 14.5 11.8807 14.5 10.5C14.5 9.11929 13.3807 8 12 8H16.5L20 11L12 16L4 11Z"
              fill="#CECFD2"
            />
            <path
              d="M4 19.5V11L19.4532 20.6582C19.194 20.8718 18.862 21 18.5 21H5.5C4.67157 21 4 20.3284 4 19.5Z"
              fill="#ECECED"
            />
            <path
              d="M20 11L12 16L19.4532 20.6582C19.7871 20.3831 20 19.9664 20 19.5V11Z"
              fill="#F5F5F6"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17 12.875L12 16L7 12.875L7 5.5C7 4.67157 7.67157 4 8.5 4H15.5C16.3284 4 17 4.67157 17 5.5V12.875ZM14.5 10.5C14.5 9.11929 13.3807 8 12 8C10.6193 8 9.5 9.11929 9.5 10.5C9.5 11.8807 10.6193 13 12 13C13.3807 13 14.5 11.8807 14.5 10.5Z"
              fill="url(#paint0_linear_1572_273)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1572_273"
                x1="12"
                y1="16"
                x2="12"
                y2="3.99999"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#CECFD2" />
                <stop offset="1" stopColor="#94969C" />
              </linearGradient>
            </defs>
          </svg>
        );
      }
    case AppGlyph.Partners:
      if (active) {
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15 13C16.6569 13 18 11.6569 18 10C18 8.34315 16.6569 7 15 7C13.3432 7 12 8.34315 12 10C12 11.6569 13.3432 13 15 13ZM9.46208 17.0725C10.3676 15.268 12.5061 14 15 14C17.4939 14 19.6325 15.268 20.538 17.0725C21.0333 18.0597 20.1046 19 19 19H11C9.89545 19 8.96669 18.0597 9.46208 17.0725Z"
              fill="url(#paint0_linear_1572_151)"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.49998 12C11.433 12 13 10.433 13 8.5C13 6.567 11.433 5 9.49998 5C7.56698 5 5.99998 6.567 5.99998 8.5C5.99998 10.433 7.56698 12 9.49998 12ZM3.35392 17.0421C4.23323 14.6897 6.65283 13 9.49998 13C12.3471 13 14.7667 14.6897 15.646 17.0421C16.0328 18.0767 15.1045 19 14 19H4.99998C3.89541 19 2.96716 18.0767 3.35392 17.0421Z"
              fill="url(#paint1_linear_1572_151)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1572_151"
                x1="15"
                y1="7"
                x2="15"
                y2="19"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FF97AE" />
                <stop offset="1" stopColor="#FFE0E6" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_1572_151"
                x1="9.49998"
                y1="5"
                x2="9.49998"
                y2="19"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#D70041" />
                <stop offset="1" stopColor="#FF5D83" />
              </linearGradient>
            </defs>
          </svg>
        );
      } else {
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15 13C16.6569 13 18 11.6569 18 10C18 8.34315 16.6569 7 15 7C13.3432 7 12 8.34315 12 10C12 11.6569 13.3432 13 15 13ZM9.46208 17.0725C10.3676 15.268 12.5061 14 15 14C17.4939 14 19.6325 15.268 20.538 17.0725C21.0333 18.0597 20.1046 19 19 19H11C9.89544 19 8.96669 18.0597 9.46208 17.0725Z"
              fill="url(#paint0_linear_1572_305)"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.50001 12C11.433 12 13 10.433 13 8.5C13 6.567 11.433 5 9.50001 5C7.56701 5 6.00001 6.567 6.00001 8.5C6.00001 10.433 7.56701 12 9.50001 12ZM3.35395 17.0421C4.23326 14.6897 6.65286 13 9.50001 13C12.3472 13 14.7668 14.6897 15.6461 17.0421C16.0328 18.0767 15.1046 19 14 19H5.00001C3.89544 19 2.96719 18.0767 3.35395 17.0421Z"
              fill="url(#paint1_linear_1572_305)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1572_305"
                x1="15"
                y1="7"
                x2="15"
                y2="19"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#CECFD2" />
                <stop offset="1" stopColor="#F0F0F1" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_1572_305"
                x1="9.50001"
                y1="5"
                x2="9.50001"
                y2="19"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#94969C" />
                <stop offset="1" stopColor="#CECFD2" />
              </linearGradient>
            </defs>
          </svg>
        );
      }
    case AppGlyph.Library:
      if (active) {
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.5 4C4.67157 4 4 4.67157 4 5.5V18.5C4 19.3284 4.67157 20 5.5 20H6.5C6.91129 20 7.28392 19.8345 7.55489 19.5664L18.5574 13.2141C19.2748 12.7999 19.5206 11.8825 19.1064 11.1651L18.6064 10.299C18.1922 9.5816 17.2748 9.33579 16.5574 9.75L8 14.6906V5.5C8 4.67157 7.32843 4 6.5 4H5.5Z"
              fill="url(#paint0_linear_1884_292)"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.2991 4.74999C12.5816 4.33578 11.6642 4.58159 11.25 5.29903L5.02809 16.0757C4.43087 16.2735 4 16.8364 4 17.5V18.5C4 19.3284 4.67157 20 5.5 20H19.5C20.3284 20 21 19.3284 21 18.5V17.5C21 16.6716 20.3284 16 19.5 16H9.69062L14.7141 7.29903C15.1283 6.58159 14.8825 5.66421 14.1651 5.24999L13.2991 4.74999Z"
              fill="url(#paint1_linear_1884_292)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1884_292"
                x1="12"
                y1="4"
                x2="12"
                y2="20"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FFE0E6" />
                <stop offset="1" stopColor="#FF97AE" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_1884_292"
                x1="12"
                y1="4"
                x2="12"
                y2="20"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FF5D83" />
                <stop offset="1" stopColor="#D70041" />
              </linearGradient>
            </defs>
          </svg>
        );
      } else {
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.5 4C4.67157 4 4 4.67157 4 5.5V18.5C4 19.3284 4.67157 20 5.5 20H6.5C6.9113 20 7.28394 19.8345 7.55492 19.5664L18.5574 13.2141C19.2748 12.7999 19.5206 11.8825 19.1064 11.1651L18.6064 10.299C18.1922 9.5816 17.2748 9.33579 16.5574 9.75L8 14.6906V5.5C8 4.67157 7.32843 4 6.5 4H5.5Z"
              fill="url(#paint0_linear_1884_282)"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.6906 16H18.5C19.3284 16 20 16.6716 20 17.5V18.5C20 19.3284 19.3284 20 18.5 20H5.5C4.67157 20 4 19.3284 4 18.5V17.5C4 16.8364 4.43086 16.2735 5.02807 16.0757L11.25 5.29903C11.6642 4.58159 12.5816 4.33578 13.299 4.74999L14.1651 5.24999C14.8825 5.66421 15.1283 6.58159 14.7141 7.29903L9.6906 16Z"
              fill="url(#paint1_linear_1884_282)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1884_282"
                x1="12"
                y1="4"
                x2="12"
                y2="20"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#F0F0F1" />
                <stop offset="1" stopColor="#CECFD2" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_1884_282"
                x1="12"
                y1="4"
                x2="12"
                y2="20"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#CECFD2" />
                <stop offset="1" stopColor="#94969C" />
              </linearGradient>
            </defs>
          </svg>
        );
      }
  }
}

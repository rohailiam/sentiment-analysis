export const menuItems = [
  {
    isHeadr: true,
    title: "menu",
  },
  {
    title: "Overall",
    link: "overall",
    isHide: false,
  },
  {
    title: "Twitter",
    link: "twitter",
    isHide: false,
  },

  {
    title: "Dashboard",
    icon: "heroicons-outline:home",
    isOpen: true,
    isHide: true,
    child: [
      {
        childtitle: "Analytics Dashboard",
        childlink: "dashboard",
      },
      {
        childtitle: "Ecommerce Dashboard",
        childlink: "ecommerce",
      },
      {
        childtitle: "Project  Dashbaord",
        childlink: "project",
      },
      {
        childtitle: " CRM Dashbaord",
        childlink: "crm",
      },
      {
        childtitle: "Banking Dashboard",
        childlink: "banking",
      },
    ],
  },
  {
    title: "changelog",
    icon: "heroicons:arrow-trending-up",
    link: "changelog",
    isHide: false,
    badge: "1.0.0",
  },
  {
    isHeadr: true,
    title: "apps",
  },

  {
    title: "Chat",
    isHide: true,
    icon: "heroicons-outline:chat",
    link: "chat",
  },

  {
    title: "Email",
    isHide: true,
    icon: "heroicons-outline:mail",
    link: "email",
  },

  {
    title: "Kanban",
    isHide: true,
    icon: "heroicons-outline:view-boards",
    link: "kanban",
  },
  {
    title: "Calender",
    isHide: true,
    icon: "heroicons-outline:calendar",
    link: "calender",
  },

  {
    title: "Todo",
    isHide: true,
    icon: "heroicons-outline:clipboard-check",
    link: "todo",
  },

  {
    title: "Projects",
    icon: "heroicons-outline:document",
    link: "#",
    isHide: true,
    child: [
      {
        childtitle: "Projects",
        childlink: "projects",
      },
      {
        childtitle: "Project Details",
        childlink: "project-details",
      },
    ],
  },
  {
    title: "Ecommerce",
    icon: "heroicons:shopping-bag",
    link: "#",
    child: [
      {
        childtitle: "User App",

        multi_menu: [
          {
            multiTitle: "Products",
            multiLink: "products",
          },
          {
            multiTitle: "Products Details",
            multiLink: "products/1",
          },

          {
            multiTitle: "Cart",
            multiLink: "cart",
          },
          {
            multiTitle: "Wishlist",
            multiLink: "wishlist",
          },
        ],
      },
      {
        childtitle: "Admin App",

        multi_menu: [
          {
            multiTitle: "Orders",
            multiLink: "orders",
            badge: "soon",
          },

          {
            multiTitle: "Add Product",
            multiLink: "add-product",
            badge: "soon",
          },
          {
            multiTitle: "Edit Product",
            multiLink: "edit-product",
            badge: "soon",
          },
          {
            multiTitle: "Customers",
            multiLink: "customers",
            badge: "soon",
          },
          {
            multiTitle: "Sellers",
            multiLink: "sellers",
            badge: "soon",
          },
          {
            multiTitle: "Invoice",
            multiLink: "invoice-ecommerce",
            badge: "soon",
          },
        ],
      },
    ],
  },
  {
    isHeadr: true,
    title: "Pages",
  },
  {
    title: "Authentication",
    icon: "heroicons-outline:lock-closed",
    link: "#",
    child: [
      {
        childtitle: "Signin One",
        childlink: "/",
      },
      {
        childtitle: "Signin Two",
        childlink: "/login2",
      },
      {
        childtitle: "Signin Three",
        childlink: "/login3",
      },
      {
        childtitle: "Signup One",
        childlink: "/reg",
      },
      {
        childtitle: "Signup Two",
        childlink: "/reg2",
      },
      {
        childtitle: "Signup Three",
        childlink: "/reg3",
      },
      {
        childtitle: "Forget Password One",
        childlink: "/forgot-password",
      },
      {
        childtitle: "Forget Password Two",
        childlink: "/forgot-password2",
      },
      {
        childtitle: "Forget Password Three",
        childlink: "/forgot-password3",
      },
      {
        childtitle: "Lock Screen One",
        childlink: "/lock-screen",
      },
      {
        childtitle: "Lock Screen Two",
        childlink: "/lock-screen2",
      },
      {
        childtitle: "Lock Screen Three",
        childlink: "/lock-screen3",
      },
    ],
  },
  {
    title: "Utility",
    icon: "heroicons-outline:view-boards",
    link: "#",
    isHide: false,
    child: [
      {
        childtitle: "Invoice",
        childlink: "invoice",
      },
      {
        childtitle: "Pricing",
        childlink: "pricing",
      },
      // {
      //   childtitle: "Testimonial",
      //   childlink: "testimonial",
      // },
      {
        childtitle: "FAQ",
        childlink: "faq",
      },
      {
        childtitle: "Blog",
        childlink: "blog",
      },
      {
        childtitle: "Blank page",
        childlink: "blank-page",
      },
      {
        childtitle: "Prfoile",
        childlink: "profile",
      },
      {
        childtitle: "Settings",
        childlink: "settings",
      },
      {
        childtitle: "404 page",
        childlink: "/404",
      },

      {
        childtitle: "Coming Soon",
        childlink: "/coming-soon",
      },
      {
        childtitle: "Under Maintanance page",
        childlink: "/under-construction",
      },
    ],
  },
  {
    isHeadr: true,
    title: "Elements",
  },
  {
    title: "Widgets",
    icon: "heroicons-outline:view-grid-add",
    link: "#",
    child: [
      {
        childtitle: "Basic",
        childlink: "basic",
      },
      {
        childtitle: "Statistic",
        childlink: "statistic",
      },
    ],
  },
  {
    title: "Components",
    icon: "heroicons-outline:collection",
    link: "#",
    child: [
      {
        childtitle: "Typography",
        childlink: "typography",
      },
      {
        childtitle: "Colors",
        childlink: "colors",
      },
      {
        childtitle: "Alert",
        childlink: "alert",
      },
      {
        childtitle: "Button",
        childlink: "button",
      },
      {
        childtitle: "Card",
        childlink: "card",
      },
      {
        childtitle: "Carousel",
        childlink: "carousel",
      },
      {
        childtitle: "Dropdown",
        childlink: "dropdown",
      },
      {
        childtitle: "Image",
        childlink: "image",
      },
      {
        childtitle: "Modal",
        childlink: "modal",
      },
      {
        childtitle: "Progress bar",
        childlink: "progress-bar",
      },
      {
        childtitle: "Placeholder",
        childlink: "placeholder",
      },
      {
        childtitle: "Tab & Accordion",
        childlink: "tab-accordion",
      },
      {
        childtitle: "Badges",
        childlink: "badges",
      },
      {
        childtitle: "Paginatins",
        childlink: "paginations",
      },
      {
        childtitle: "Video",
        childlink: "video",
      },
      {
        childtitle: "Tooltip & Popover",
        childlink: "tooltip-popover",
      },
    ],
  },
  {
    title: "Forms",
    icon: "heroicons-outline:clipboard-list",
    link: "#",
    child: [
      {
        childtitle: "Input",
        childlink: "input",
      },
      {
        childtitle: "Input group",
        childlink: "input-group",
      },
      {
        childtitle: "Input layout",
        childlink: "input-layout",
      },
      {
        childtitle: "Form validation",
        childlink: "form-validation",
      },
      {
        childtitle: "Wizard",
        childlink: "form-wizard",
      },
      {
        childtitle: "Input mask",
        childlink: "input-mask",
      },
      {
        childtitle: "File input",
        childlink: "file-input",
      },
      {
        childtitle: "Form repeater",
        childlink: "form-repeater",
      },
      {
        childtitle: "Textarea",
        childlink: "textarea",
      },
      {
        childtitle: "Checkbox",
        childlink: "checkbox",
      },
      {
        childtitle: "Radio button",
        childlink: "radio-button",
      },
      {
        childtitle: "Switch",
        childlink: "switch",
      },
      {
        childtitle: "Select & Vue select",
        childlink: "select",
      },
      {
        childtitle: "Date time picker",
        childlink: "date-time-picker",
      },
    ],
  },
  {
    title: "Table",
    icon: "heroicons-outline:table",
    link: "#",
    child: [
      {
        childtitle: "Basic Table",
        childlink: "table-basic",
      },
      {
        childtitle: "React Table",
        childlink: "react-table",
      },
    ],
  },
  {
    title: "Chart",
    icon: "heroicons-outline:chart-bar",
    link: "#",
    child: [
      {
        childtitle: "Apex chart",
        childlink: "appex-chart",
      },
      {
        childtitle: "Chart js",
        childlink: "chartjs",
      },
      {
        childtitle: "Recharts",
        childlink: "recharts",
      },
    ],
  },
  {
    title: "Map",
    icon: "heroicons-outline:map",
    link: "map",
  },
  {
    title: "Icons",
    icon: "heroicons-outline:emoji-happy",
    link: "icons",
  },
  {
    title: "Multi Level",
    icon: "heroicons:share",
    link: "#",
    child: [
      {
        childtitle: "Level 1.1",
        childlink: "icons",
      },
      {
        childtitle: "Level 1.2",
        childlink: "Level-1",
        multi_menu: [
          {
            multiTitle: "Level 2.1",
            multiLink: "Level-2",
          },
          {
            multiTitle: "Level 2.2",
            multiLink: "Level-2.3",
          },
        ],
      },
    ],
  },
];

export const topMenu = [
  {
    title: "Dashboard",
    icon: "heroicons-outline:home",
    link: "/app/home",
    child: [
      {
        childtitle: "Analytics Dashboard",
        childlink: "dashboard",
        childicon: "heroicons:presentation-chart-line",
      },
      {
        childtitle: "Ecommerce Dashboard",
        childlink: "ecommerce",
        childicon: "heroicons:shopping-cart",
      },
      {
        childtitle: "Project  Dashboard",
        childlink: "project",
        childicon: "heroicons:briefcase",
      },
      {
        childtitle: "CRM Dashboard",
        childlink: "crm",
        childicon: "ri:customer-service-2-fill",
      },
      {
        childtitle: "Banking Dashboard",
        childlink: "banking",
        childicon: "heroicons:wrench-screwdriver",
      },
    ],
  },
  {
    title: "App",
    icon: "heroicons-outline:chip",
    link: "/app/home",
    child: [
      {
        childtitle: "Calendar",
        childlink: "calender",
        childicon: "heroicons-outline:calendar",
      },
      {
        childtitle: "Kanban",
        childlink: "kanban",
        childicon: "heroicons-outline:view-boards",
      },
      {
        childtitle: "Todo",
        childlink: "todo",
        childicon: "heroicons-outline:clipboard-check",
      },
      {
        childtitle: "Projects",
        childlink: "projects",
        childicon: "heroicons-outline:document",
      },
    ],
  },
  {
    title: "Pages",
    icon: "heroicons-outline:view-boards",
    link: "/app/home",
    megamenu: [
      {
        megamenutitle: "Authentication",
        megamenuicon: "heroicons-outline:user",
        singleMegamenu: [
          {
            m_childtitle: "Signin One",
            m_childlink: "/",
          },
          {
            m_childtitle: "Signin Two",
            m_childlink: "/login2",
          },
          {
            m_childtitle: "Signin Three",
            m_childlink: "/login3",
          },
          {
            m_childtitle: "Signup One",
            m_childlink: "/register",
          },
          {
            m_childtitle: "Signup Two",
            m_childlink: "/register/register2",
          },
          {
            m_childtitle: "Signup Three",
            m_childlink: "/register/register3",
          },
          {
            m_childtitle: "Forget Password One",
            m_childlink: "/forgot-password",
          },
          {
            m_childtitle: "Forget Password Two",
            m_childlink: "/forgot-password2",
          },
          {
            m_childtitle: "Forget Password Three",
            m_childlink: "/forgot-password3",
          },
          {
            m_childtitle: "Lock Screen One",
            m_childlink: "/lock-screen",
          },
          {
            m_childtitle: "Lock Screen Two",
            m_childlink: "/lock-screen2",
          },
          {
            m_childtitle: "Lock Screen Three",
            m_childlink: "/lock-screen3",
          },
        ],
      },

      {
        megamenutitle: "Components",
        megamenuicon: "heroicons-outline:user",
        singleMegamenu: [
          {
            m_childtitle: "typography",
            m_childlink: "typography",
          },
          {
            m_childtitle: "colors",
            m_childlink: "colors",
          },
          {
            m_childtitle: "alert",
            m_childlink: "alert",
          },
          {
            m_childtitle: "button",
            m_childlink: "button",
          },
          {
            m_childtitle: "card",
            m_childlink: "card",
          },
          {
            m_childtitle: "carousel",
            m_childlink: "carousel",
          },
          {
            m_childtitle: "dropdown",
            m_childlink: "dropdown",
          },
          {
            m_childtitle: "image",
            m_childlink: "image",
          },
          {
            m_childtitle: "modal",
            m_childlink: "modal",
          },
          {
            m_childtitle: "Progress bar",
            m_childlink: "progress-bar",
          },
          {
            m_childtitle: "Placeholder",
            m_childlink: "placeholder",
          },

          {
            m_childtitle: "Tab & Accordion",
            m_childlink: "tab-accordion",
          },
        ],
      },
      {
        megamenutitle: "Forms",
        megamenuicon: "heroicons-outline:user",
        singleMegamenu: [
          {
            m_childtitle: "Input",
            m_childlink: "input",
          },
          {
            m_childtitle: "Input group",
            m_childlink: "input-group",
          },
          {
            m_childtitle: "Input layout",
            m_childlink: "input-layout",
          },
          {
            m_childtitle: "Form validation",
            m_childlink: "form-validation",
          },
          {
            m_childtitle: "Wizard",
            m_childlink: "form-wizard",
          },
          {
            m_childtitle: "Input mask",
            m_childlink: "input-mask",
          },
          {
            m_childtitle: "File input",
            m_childlink: "file-input",
          },
          {
            m_childtitle: "Form repeater",
            m_childlink: "form-repeater",
          },
          {
            m_childtitle: "Textarea",
            m_childlink: "textarea",
          },
          {
            m_childtitle: "Checkbox",
            m_childlink: "checkbox",
          },
          {
            m_childtitle: "Radio button",
            m_childlink: "radio-button",
          },
          {
            m_childtitle: "Switch",
            m_childlink: "switch",
          },
        ],
      },
      {
        megamenutitle: "Utility",
        megamenuicon: "heroicons-outline:user",
        singleMegamenu: [
          {
            m_childtitle: "Invoice",
            m_childlink: "invoice",
          },
          {
            m_childtitle: "Pricing",
            m_childlink: "pricing",
          },

          // {
          //   m_childtitle: "Testimonial",
          //   m_childlink: "testimonial",
          // },
          {
            m_childtitle: "FAQ",
            m_childlink: "faq",
          },
          {
            m_childtitle: "Blank page",
            m_childlink: "blank-page",
          },
          {
            m_childtitle: "Blog",
            m_childlink: "blog",
          },
          {
            m_childtitle: "404 page",
            m_childlink: "/404",
          },
          {
            m_childtitle: "Coming Soon",
            m_childlink: "/coming-soon",
          },
          {
            m_childtitle: "Under Maintanance page",
            m_childlink: "/under-construction",
          },
        ],
      },
    ],
  },

  {
    title: "Widgets",
    icon: "heroicons-outline:view-grid-add",
    link: "form-elements",
    child: [
      {
        childtitle: "Basic",
        childlink: "basic",
        childicon: "heroicons-outline:document-text",
      },
      {
        childtitle: "Statistic",
        childlink: "statistic",
        childicon: "heroicons-outline:document-text",
      },
    ],
  },

  {
    title: "Extra",
    icon: "heroicons-outline:template",

    child: [
      {
        childtitle: "Basic Table",
        childlink: "table-basic",
        childicon: "heroicons-outline:table",
      },
      {
        childtitle: "Advanced table",
        childlink: "table-advanced",
        childicon: "heroicons-outline:table",
      },
      {
        childtitle: "Apex chart",
        childlink: "appex-chart",
        childicon: "heroicons-outline:chart-bar",
      },
      {
        childtitle: "Chart js",
        childlink: "chartjs",
        childicon: "heroicons-outline:chart-bar",
      },
      {
        childtitle: "Map",
        childlink: "map",
        childicon: "heroicons-outline:map",
      },
    ],
  },
];

import User1 from "@/assets/images/all-img/user.png";
import User2 from "@/assets/images/all-img/user2.png";
import User3 from "@/assets/images/all-img/user3.png";
import User4 from "@/assets/images/all-img/user4.png";
export const notifications = [
  {
    title: "Your order is placed",
    desc: "Amet minim mollit non deser unt ullamco est sit aliqua.",

    image: User1,
    link: "#",
  },
  {
    title: "Congratulations Darlene  🎉",
    desc: "Won the monthly best seller badge",
    unread: true,
    image: User2,
    link: "#",
  },
  {
    title: "Revised Order 👋",
    desc: "Won the monthly best seller badge",

    image: User3,
    link: "#",
  },
  {
    title: "Brooklyn Simmons",
    desc: "Added you to Top Secret Project group...",

    image: User4,
    link: "#",
  },
];

export const message = [
  {
    title: "Wade Warren",
    desc: "Hi! How are you doing?.....",
    active: true,
    hasnotifaction: true,
    notification_count: 1,
    image: User1,
    link: "#",
  },
  {
    title: "Savannah Nguyen",
    desc: "Hi! How are you doing?.....",
    active: false,
    hasnotifaction: false,
    image: User2,
    link: "#",
  },
  {
    title: "Ralph Edwards",
    desc: "Hi! How are you doing?.....",
    active: false,
    hasnotifaction: true,
    notification_count: 8,
    image: User3,
    link: "#",
  },
  {
    title: "Cody Fisher",
    desc: "Hi! How are you doing?.....",
    active: true,
    hasnotifaction: false,
    image: User4,
    link: "#",
  },
  {
    title: "Savannah Nguyen",
    desc: "Hi! How are you doing?.....",
    active: false,
    hasnotifaction: false,
    image: User2,
    link: "#",
  },
  {
    title: "Ralph Edwards",
    desc: "Hi! How are you doing?.....",
    active: false,
    hasnotifaction: true,
    notification_count: 8,
    image: User3,
    link: "#",
  },
  {
    title: "Cody Fisher",
    desc: "Hi! How are you doing?.....",
    active: true,
    hasnotifaction: false,
    image: User4,
    link: "#",
  },
];

export const colors = {
  primary: "#4669FA",
  secondary: "#A0AEC0",
  danger: "#F1595C",
  black: "#111112",
  warning: "#FA916B",
  info: "#0CE7FA",
  light: "#425466",
  success: "#50C793",
  "gray-f7": "#F7F8FC",
  dark: "#1E293B",
  "dark-gray": "#0F172A",
  gray: "#68768A",
  gray2: "#EEF1F9",
  "dark-light": "#CBD5E1",
};

export const hexToRGB = (hex, alpha) => {
  var r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
    return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
  } else {
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }
};

export const topFilterLists = [
  {
    name: "Inbox",
    value: "all",
    icon: "uil:image-v",
  },
  {
    name: "Starred",
    value: "fav",
    icon: "heroicons:star",
  },
  {
    name: "Sent",
    value: "sent",
    icon: "heroicons-outline:paper-airplane",
  },

  {
    name: "Drafts",
    value: "drafts",
    icon: "heroicons-outline:pencil-alt",
  },
  {
    name: "Spam",
    value: "spam",
    icon: "heroicons:information-circle",
  },
  {
    name: "Trash",
    value: "trash",
    icon: "heroicons:trash",
  },
];

export const bottomFilterLists = [
  {
    name: "personal",
    value: "personal",
    icon: "heroicons:chevron-double-right",
  },
  {
    name: "Social",
    value: "social",
    icon: "heroicons:chevron-double-right",
  },
  {
    name: "Promotions",
    value: "promotions",
    icon: "heroicons:chevron-double-right",
  },
  {
    name: "Business",
    value: "business",
    icon: "heroicons:chevron-double-right",
  },
];

import meetsImage1 from "@/assets/images/svg/sk.svg";
import meetsImage2 from "@/assets/images/svg/path.svg";
import meetsImage3 from "@/assets/images/svg/dc.svg";
import meetsImage4 from "@/assets/images/svg/sk.svg";

export const meets = [
  {
    img: meetsImage1,
    title: "Meeting with client",
    date: "01 Nov 2021",
    meet: "Zoom meeting",
  },
  {
    img: meetsImage2,
    title: "Design meeting (team)",
    date: "01 Nov 2021",
    meet: "Skyp meeting",
  },
  {
    img: meetsImage3,
    title: "Background research",
    date: "01 Nov 2021",
    meet: "Google meeting",
  },
  {
    img: meetsImage4,
    title: "Meeting with client",
    date: "01 Nov 2021",
    meet: "Zoom meeting",
  },
];
import file1Img from "@/assets/images/icon/file-1.svg";
import file2Img from "@/assets/images/icon/pdf-1.svg";
import file3Img from "@/assets/images/icon/zip-1.svg";
import file4Img from "@/assets/images/icon/pdf-2.svg";
import file5Img from "@/assets/images/icon/scr-1.svg";

export const files = [
  {
    img: file1Img,
    title: "Dashboard.fig",
    date: "06 June 2021 / 155MB",
  },
  {
    img: file2Img,
    title: "Ecommerce.pdf",
    date: "06 June 2021 / 155MB",
  },
  {
    img: file3Img,
    title: "Job portal_app.zip",
    date: "06 June 2021 / 155MB",
  },
  {
    img: file4Img,
    title: "Ecommerce.pdf",
    date: "06 June 2021 / 155MB",
  },
  {
    img: file5Img,
    title: "Screenshot.jpg",
    date: "06 June 2021 / 155MB",
  },
];

// ecommarce data

import blackJumper from "@/assets/images/e-commerce/product-card/classical-black-tshirt.png";
import blackTshirt from "@/assets/images/e-commerce/product-card/black-t-shirt.png";
import checkShirt from "@/assets/images/e-commerce/product-card/check-shirt.png";
import grayJumper from "@/assets/images/e-commerce/product-card/gray-jumper.png";
import grayTshirt from "@/assets/images/e-commerce/product-card/gray-t-shirt.png";
import pinkBlazer from "@/assets/images/e-commerce/product-card/pink-blazer.png";
import redTshirt from "@/assets/images/e-commerce/product-card/red-t-shirt.png";
import yellowFrok from "@/assets/images/e-commerce/product-card/yellow-frok.png";
import yellowJumper from "@/assets/images/e-commerce/product-card/yellow-jumper.png";

export const products = [
  {
    img: blackJumper,
    category: "men",
    name: "Classical Black T-Shirt Classical Black T-Shirt",
    subtitle: "The best cotton black branded shirt.",
    desc: "The best cotton black branded shirt. The best cotton black branded shirt. The best cotton black branded shirt. The best cotton black branded shirt. The best cotton black branded shirt.",
    rating: "4.8",
    price: 489,
    oldPrice: "$700",
    percent: "40%",
    brand: "apple",
  },
  {
    img: blackTshirt,
    category: "men",
    name: "Classical Black T-Shirt",
    subtitle: "The best cotton black branded shirt.",
    desc: "The best cotton black branded shirt",
    rating: "4.8",
    price: 20,
    oldPrice: "$700",
    percent: "40%",
    brand: "apex",
  },
  {
    img: checkShirt,
    category: "women",
    name: "Classical Black T-Shirt",
    subtitle: "The best cotton black branded shirt.",
    desc: "The best cotton black branded shirt",
    rating: "4.8",
    price: 120,
    oldPrice: "$700",
    percent: "40%",
    brand: "easy",
  },
  {
    img: grayJumper,
    category: "women",
    name: "Classical Black T-Shirt",
    subtitle: "The best cotton black branded shirt.",
    desc: "The best cotton black branded shirt",
    rating: "4.8",
    price: 70,
    oldPrice: "$700",
    percent: "40%",
    brand: "pixel",
  },
  {
    img: grayTshirt,
    category: "baby",
    name: "Classical Black T-Shirt",
    subtitle: "The best cotton black branded shirt.",
    desc: "The best cotton black branded shirt",
    rating: "4.8",
    price: 30,
    oldPrice: "$700",
    percent: "40%",
    brand: "apex",
  },
  {
    img: pinkBlazer,
    category: "women",
    name: "Classical Black T-Shirt",
    subtitle: "The best cotton black branded shirt.",
    desc: "The best cotton black branded shirt",
    rating: "4.8",
    price: 40,
    oldPrice: "$700",
    percent: "40%",
    brand: "apple",
  },
  {
    img: redTshirt,
    category: "women",
    name: "Classical Black T-Shirt",
    subtitle: "The best cotton black branded shirt.",
    desc: "The best cotton black branded shirt",
    rating: "4.8",
    price: 90,
    oldPrice: "$700",
    percent: "40%",
    brand: "easy",
  },
  {
    img: yellowFrok,
    category: "women",
    name: "Classical Black T-Shirt",
    subtitle: "The best cotton black branded shirt.",
    desc: "The best cotton black branded shirt",
    rating: "4.8",
    price: 80,
    oldPrice: "$700",
    percent: "40%",
    brand: "pixel",
  },
  {
    img: yellowJumper,
    category: "furniture",
    name: "Classical Black T-Shirt",
    subtitle: "The best cotton black branded shirt.",
    desc: "The best cotton black branded shirt",
    rating: "4.8",
    price: 20,
    oldPrice: "$700",
    percent: "40%",
    brand: "samsung",
  },
];

export const categories = [
  { label: "All", value: "all", count: "9724" },
  { label: "Men", value: "men", count: "1312" },
  { label: "Women", value: "women", count: "3752" },
  { label: "Child", value: "child", count: "985" },
  { label: "Baby", value: "baby", count: "745" },
  { label: "Footwear", value: "footwear", count: "1280" },
  { label: "Furniture", value: "furniture", count: "820" },
  { label: "Mobile", value: "mobile", count: "2460" },
];

export const brands = [
  { label: "Apple", value: "apple", count: "9724" },
  { label: "Apex", value: "apex", count: "1312" },
  { label: "Easy", value: "easy", count: "3752" },
  { label: "Pixel", value: "pixel", count: "985" },
  { label: "Samsung", value: "samsung", count: "2460" },
];

export const price = [
  {
    label: "$0 - $199",
    value: {
      min: 0,
      max: 199,
    },
    count: "9724",
  },
  {
    label: "$200 - $449",
    value: {
      min: 200,
      max: 499,
    },
    count: "1312",
  },
  {
    label: "$450 - $599",
    value: {
      min: 450,
      max: 599,
    },
    count: "3752",
  },
  {
    label: "$600 - $799",
    value: {
      min: 600,
      max: 799,
    },
    count: "985",
  },
  {
    label: "$800 & Above",
    value: {
      min: 800,
      max: 1000,
    },
    count: "745",
  },
];

export const ratings = [
  { name: 5, value: 5, count: "9724" },
  { name: 4, value: 4, count: "1312" },
  { name: 3, value: 3, count: "3752" },
  { name: 2, value: 2, count: "985" },
  { name: 1, value: 1, count: "2460" },
];

export const selectOptions = [
  {
    value: "option1",
    label: "Option 1",
  },
  {
    value: "option2",
    label: "Option 2",
  },
  {
    value: "option3",
    label: "Option 3",
  },
];
export const selectCategory = [
  {
    value: "option1",
    label: "Top Rated",
  },
  {
    value: "option2",
    label: "Option 2",
  },
  {
    value: "option3",
    label: "Option 3",
  },
];

import bkash from "@/assets/images/e-commerce/cart-icon/bkash.png";
import fatoorah from "@/assets/images/e-commerce/cart-icon/fatoorah.png";
import instamojo from "@/assets/images/e-commerce/cart-icon/instamojo.png";
import iyzco from "@/assets/images/e-commerce/cart-icon/iyzco.png";
import nagad from "@/assets/images/e-commerce/cart-icon/nagad.png";
import ngenious from "@/assets/images/e-commerce/cart-icon/ngenious.png";
import payfast from "@/assets/images/e-commerce/cart-icon/payfast.png";
import payku from "@/assets/images/e-commerce/cart-icon/payku.png";
import paypal from "@/assets/images/e-commerce/cart-icon/paypal.png";
import paytm from "@/assets/images/e-commerce/cart-icon/paytm.png";
import razorpay from "@/assets/images/e-commerce/cart-icon/razorpay.png";
import ssl from "@/assets/images/e-commerce/cart-icon/ssl.png";
import stripe from "@/assets/images/e-commerce/cart-icon/stripe.png";
import truck from "@/assets/images/e-commerce/cart-icon/truck.png";
import vougepay from "@/assets/images/e-commerce/cart-icon/vougepay.png";

export const payments = [
  {
    img: bkash,
    value: "bkash",
  },
  {
    img: fatoorah,
    value: "fatoorah",
  },
  {
    img: instamojo,
    value: "instamojo",
  },
  {
    img: iyzco,
    value: "iyzco",
  },
  {
    img: nagad,
    value: "nagad",
  },
  {
    img: ngenious,
    value: "ngenious",
  },

  {
    img: payfast,
    value: "payfast",
  },
  {
    img: payku,
    value: "payku",
  },
  {
    img: paypal,
    value: "paypal",
  },
  {
    img: paytm,
    value: "paytm",
  },
  {
    img: razorpay,
    value: "razorpay",
  },
  {
    img: ssl,
    value: "ssl",
  },
  {
    img: stripe,
    value: "stripe",
  },
  {
    img: truck,
    value: "truck",
  },
  {
    img: vougepay,
    value: "vougepay",
  },
];

export const newsSources = [
  {label: "Logistics Middle East", value: "Logistics Middle East"},
  { label: "India Shipping News", value: "India Shipping News" },
  { label: "Construction Business News Middle East", value: "Construction Business News Middle East" },
  { label: "Bigouden.Tv", value: "Bigouden.Tv" },
  { label: "Bloomberg.com", value: "Bloomberg.com" },
  { label: "Arab News", value: "Arab News" },
  { label: "Intelligence Online", value: "Intelligence Online" },
  { label: "The National", value: "The National" },
  { label: "Khaleej Times", value: "Khaleej Times" },
  { label: "ZAWYA", value: "ZAWYA" },
  { label: "Aviation Week", value: "Aviation Week" },
  { label: "Times of Malta", value: "Times of Malta" },
  { label: "Transport and Logistics Middle East TLME", value: "Transport and Logistics Middle East TLME" },
  { label: "FreightWaves", value: "FreightWaves" },
  { label: "WAM EN", value: "WAM EN" },
  { label: "The Maritime Standard", value: "The Maritime Standard" },
  { label: "Hortidaily", value: "Hortidaily" },
  { label: "Proactive Investors", value: "Proactive Investors" },
  { label: "Gulf Business", value: "Gulf Business" },
  { label: "Breaking Travel News", value: "Breaking Travel News" },
  { label: "Aviation Source", value: "Aviation Source" },
  { label: "Whats On Dubai", value: "Whats On Dubai" },
  { label: "Airline Routes & Ground Services", value: "Airline Routes & Ground Services" },
  { label: "FlightGlobal", value: "FlightGlobal" },
  { label: "Daily News Hungary", value: "Daily News Hungary" },
  { label: "PR Newswire", value: "PR Newswire" },
  { label: "PR TIMES", value: "PR TIMES" },
  { label: "ProductZine", value: "ProductZine" },
  { label: "บ้านเมือง", value: "บ้านเมือง" },
  { label: "ThaiPR.NET", value: "ThaiPR.NET" },
  { label: "The Meade County Messenger", value: "The Meade County Messenger" },
  { label: "挖软件", value: "挖软件" },
  { label: "Anadolu Ajansı", value: "Anadolu Ajansı" },
  { label: "The Sun Daily", value: "The Sun Daily" },
  { label: "The Star", value: "The Star" },
  { label: "The White House", value: "The White House" },
  { label: "Reuters", value: "Reuters" },
  { label: "ReliefWeb", value: "ReliefWeb" },
  { label: "The Guardian", value: "The Guardian" },
  { label: "Lexology", value: "Lexology" },
  { label: "Ministry of Foreign Affairs of Japan", value: "Ministry of Foreign Affairs of Japan" },
  { label: "CNN", value: "CNN" },
  { label: "NASA Earth Observatory", value: "NASA Earth Observatory" },
  { label: "Al Arabiya", value: "Al Arabiya" },
  { label: "WION", value: "WION" },
  { label: "Business Insider", value: "Business Insider" },
  { label: "The Cradle", value: "The Cradle" },
  { label: "Africa Intelligence", value: "Africa Intelligence" },
  { label: "The Times of Israel", value: "The Times of Israel"},
  { label: "The Soufan Center", value: "The Soufan Center"},
  { label: "Khmer Times", value: "Khmer Times"},
  { label: "Mint", value: "Mint"},
  { label: "Dubai Media Office", value: "Dubai Media Office"},
  { label: "Gulf News", value: "Gulf News"},
  { label: "Amwaj.media", value: "Amwaj.media"},
  { label: "Financial Times", value: "Financial Times"},
  { label: "Emirates 24/7", value: "Emirates 24/7"},
  { label: "Al-Monitor", value: "Al-Monitor"},
  { label: "Sport360", value: "Sport360"},
  { label: "Moneycontrol", value: "Moneycontrol"},
  { label: "The Economic Times", value: "The Economic Times"},
  { label: "The Nuclear Threat Initiative", value: "The Nuclear Threat Initiative"},
  { label: "Nuclear Energy Agency", value: "Nuclear Energy Agency"},
  { label: "وكالة أنباء الإمارات", value: "وكالة أنباء الإمارات"},
  { label: "Gulf Today", value: "Gulf Today"},
  { label: "Oil Price", value: "Oil Price"},
  { label: "World Nuclear News", value: "World Nuclear News"},
  { label: "GOV.UK", value: "GOV.UK"},
  { label: "WAM French", value: "WAM French"},
  { label: "NewsOnAIR", value: "NewsOnAIR"},
  { label: "Montreal Gazette", value: "Montreal Gazette"},
  { label: "ETN News", value: "ETN News"},
  { label: "新浪香港", value: "新浪香港"},
  { label: "Republic TV", value: "Republic TV"},
  { label: "New Civil Engineer", value: "New Civil Engineer"},
  { label: "Financial Post", value: "Financial Post"},
  { label: "Executive Intelligence Review", value: "Executive Intelligence Review"},
  { label: "Balkan Green Energy News", value: "Balkan Green Energy News"},
  { label: "Waste360", value: "Waste360"},
  { label: "Travel Daily Media", value: "Travel Daily Media"},
  { label: "WAM Portuguese", value: "WAM Portuguese"},
  { label: "共同通信PRワイヤー", value: "共同通信PRワイヤー"},
  { label: "Construction Week Online", value: "Construction Week Online"},
  { label: "Simply Wall St", value: "Simply Wall St"},
  { label: "TechNode Global", value: "TechNode Global"},
  { label: "SeeDance News", value: "SeeDance News"},
  { label: "Global Investor Group", value: "Global Investor Group"},
  { label: "Time Out Abu Dhabi", value: "Time Out Abu Dhabi"},
  { label: "Sharjah 24", value: "Sharjah 24"},
  { label: "Louis Dreyfus Company", value: "Louis Dreyfus Company"},
  { label: "Global Coffee Report", value: "Global Coffee Report"},
  { label: "Beverage Daily", value: "Beverage Daily"},
  { label: "The Fish Site", value: "The Fish Site"},
  { label: "Arabian Business", value: "Arabian Business"},
  { label: "Daijiworld", value: "Daijiworld"},
  { label: "AiThority", value: "AiThority"},
  { label: "ET Retail", value: "ET Retail"},
  { label: "The Hindu Business Line", value: "The Hindu Business Line"},
  { label: "Largo Consumo", value: "Largo Consumo"},
  { label: "Comunicación Tucumán", value: "Comunicación Tucumán"},
  { label: "Italiafruit News", value: "Italiafruit News"},
  { label: "Fundación Terram", value: "Fundación Terram"},
  { label: "Fruitbook Magazine", value: "Fruitbook Magazine"},
  { label: "Resumen Latinoamericano -", value: "Resumen Latinoamericano -"},
  { label: "Sector Bostero", value: "Sector Bostero"},
  { label: "Bosnische Nationalmannschaft", value: "Bosnische Nationalmannschaft"},
  { label: "Заря", value: "Заря"},
  { label: "한국관광협회중앙회", value: "한국관광협회중앙회"},
  { label: "Naftemporiki", value: "Naftemporiki"},
  { label: "tuttomagazine.news", value: "tuttomagazine.news"},
  { label: "Port Technology", value: "Port Technology"},
  { label: "Yahoo Finance", value: "Yahoo Finance"},
  { label: "PortalPortuario", value: "PortalPortuario"},
  { label: "Kalkine Media", value: "Kalkine Media"},
  { label: "The Manila Times", value: "The Manila Times"},
  { label: "Utilities Middle East", value: "Utilities Middle East"},
  { label: "GlobeNewswire", value: "GlobeNewswire"},
  { label: "Digital Journal", value: "Digital Journal"},
  { label: "Laguna Now", value: "Laguna Now"},
  { label: "Industry Today", value: "Industry Today"},
  { label: "MEED", value: "MEED"},
  { label: "World Steel Association", value: "World Steel Association"},
  { label: "Mining Technology", value: "Mining Technology"},
  { label: "DealFlows SPAC News", value: "DealFlows SPAC News"},
  { label: "YourStory.com", value: "YourStory.com"},
  { label: "Business Recorder", value: "Business Recorder"},
  { label: "The Business Standard", value: "The Business Standard"},
  { label: "The Shift News", value: "The Shift News"},
  { label: "Railway People", value: "Railway People"},
  { label: "FreshPlaza", value: "FreshPlaza"},
  { label: "Simple Flying", value: "Simple Flying"},
  { label: "Daily Journal Online", value: "Daily Journal Online"},
  { label: "U.S. Department of Commerce", value: "U.S. Department of Commerce"},
  { label: "Play the Game", value: "Play the Game"},
  { label: "Manchester City FC", value: "Manchester City FC"},
  { label: "Tactical Report", value: "Tactical Report"},
  { label: "The Arabian Marketer", value: "The Arabian Marketer"},
  { label: "Al Mayadeen English", value: "Al Mayadeen English"},
  { label: "StreetInsider", value: "StreetInsider"},
  { label: "Trend News Agency", value: "Trend News Agency"},
  { label: "News Rebeat", value: "News Rebeat"},
  { label: "openPR.com", value: "openPR.com"},
  { label: "WAM Italian", value: "WAM Italian"},
  { label: "Allianz Commercial", value: "Allianz Commercial"},
  { label: "African Business", value: "African Business"},
  { label: "BusinessWorld Online", value: "BusinessWorld Online"},
  { label: "Dubai Week", value: "Dubai Week"},
  { label: "Rock News", value: "Rock News"},
  { label: "Outlook Traveller", value: "Outlook Traveller"},
  { label: "The Indian Express", value: "The Indian Express"},
  { label: "Times Aerospace", value: "Times Aerospace"},
  { label: "The Times", value: "The Times"},
  { label: "Trade Arabia", value: "Trade Arabia"},
  { label: "International Monetary Fund", value: "International Monetary Fund"},
  { label: "Fitch Ratings", value: "Fitch Ratings"},
  { label: "CNN Brasil", value: "CNN Brasil"},
  { label: "Construction Week", value: "Construction Week"},
  { label: "Interesting Engineering", value: "Interesting Engineering"},
  { label: "Canal Rural", value: "Canal Rural"},
  { label: "Agefi.com", value: "Agefi.com"},
  { label: "Investment Monitor", value: "Investment Monitor"},
  { label: "CNBC-TV18.com", value: "CNBC-TV18.com"},
  { label: "Arab News Pakistan", value: "Arab News Pakistan"},
  { label: "Country Living Magazine", value: "Country Living Magazine"},
  { label: "Foundry", value: "Foundry"},
  { label: "Equity Bulls", value: "Equity Bulls"},
  { label: "Middle East Institute", value: "Middle East Institute"},
  { label: "International Airport Review", value: "International Airport Review"},
  { label: "Africa Science News", value: "Africa Science News"},
  { label: "Vietnam Briefing", value: "Vietnam Briefing"},
  { label: "Asian Aviation", value: "Asian Aviation"},
  { label: "EKZ CrossTour", value: "EKZ CrossTour"},
  { label: "StockNews.com", value: "StockNews.com"},
  { label: "The Hindu", value: "The Hindu"},
  { label: "The Sydney Morning Herald", value: "The Sydney Morning Herald"},
  { label: "SuperYacht Times", value: "SuperYacht Times"},
  { label: "Rail Business Daily", value: "Rail Business Daily"},
  { label: "Curly Tales", value: "Curly Tales"},
  { label: "The Circuit News", value: "The Circuit News"},
  { label: "SeeNews", value: "SeeNews"},
  { label: "JD Supra", value: "JD Supra"},
  { label: "Small Caps", value: "Small Caps"},
  { label: "Telegraph India", value: "Telegraph India"},
  { label: "Global News", value: "Global News"},
  { label: "RMOL", value: "RMOL"},
  { label: "balatonfured.hu", value: "balatonfured.hu"},
  { label: "Tekno", value: "Tekno"},
  { label: "MEP Middle East", value: "MEP Middle East"},
  { label: "EPAM", value: "EPAM"},
  { label: "The Packer", value: "The Packer"},
  { label: "SolarQuarter", value: "SolarQuarter"},
  { label: "Hellenic Shipping News Worldwide", value: "Hellenic Shipping News Worldwide"},
  { label: "Marine Link", value: "Marine Link"},
  { label: "Daily News Egypt", value: "Daily News Egypt"},
  { label: "Organisation for the Prohibition of Chemical Weapons", value: "Organisation for the Prohibition of Chemical Weapons"},
  { label: "GMK Center", value: "GMK Center"},
  { label: "SteelOrbis", value: "SteelOrbis"},
  { label: "CoinGeek", value: "CoinGeek"},
  { label: "Just Horse Racing", value: "Just Horse Racing"},
  { label: "Punctul", value: "Punctul"},
  { label: "PR Week", value: "PR Week"},
  { label: "Oxford Business Group", value: "Oxford Business Group"},
  { label: "Argyle Report", value: "Argyle Report"},
  { label: "Hypebeast", value: "Hypebeast"},
  { label: "The Week", value: "The Week"},
  { label: "Daily Pioneer", value: "Daily Pioneer"},
  { label: "Wyrta", value: "Wyrta"},
  { label: "World Report Now -", value: "World Report Now -"},
  { label: "Renewables Now", value: "Renewables Now"},
  { label: "Seatrade Maritime", value: "Seatrade Maritime"},
  { label: "Fibre2Fashion", value: "Fibre2Fashion"},
  { label: "The Edge Malaysia", value: "The Edge Malaysia"},
  { label: "Mondaq", value: "Mondaq"},
  { label: "PV Magazine", value: "PV Magazine"},
  { label: "Markets Media", value: "Markets Media"},
  { label: "Collider", value: "Collider"},
  { label: "Backstage", value: "Backstage"},
  { label: "Sedona.Biz", value: "Sedona.Biz"},
  { label: "Oregon ArtsWatch", value: "Oregon ArtsWatch"},
  { label: "InfoMoney", value: "InfoMoney"},
  { label: "Football League World", value: "Football League World"},
  { label: "Міністерство аграрної політики та продовольства України", value: "Міністерство аграрної політики та продовольства України"},
  { label: "Energy Global", value: "Energy Global"},
  { label: "Compre Rural", value: "Compre Rural"},
  { label: "PharmaBiz.NET", value: "PharmaBiz.NET"},
  { label: "Zonebourse", value: "Zonebourse"},
  { label: "WAN-IFRA", value: "WAN-IFRA"},
  { label: "Yicai Global", value: "Yicai Global"},
  { label: "PhocusWire", value: "PhocusWire"},
  { label: "Bizblog", value: "Bizblog"},
  { label: "Detik Travel", value: "Detik Travel"},
  { label: "DD News", value: "DD News"},
  { label: "FMIBlog", value: "FMIBlog"},
  { label: "Batir", value: "Batir"},
  { label: "eFinanceThai", value: "eFinanceThai"},
  { label: "Trains", value: "Trains"},
  { label: "American Journal of Transportation", value: "American Journal of Transportation"},
  { label: "Seatrade Cruise News", value: "Seatrade Cruise News"},
  { label: "Jewish News Syndicate", value: "Jewish News Syndicate"},
  { label: "Business Traveller", value: "Business Traveller"},
  { label: "EX-YU Aviation News", value: "EX-YU Aviation News"},
  { label: "Bloomberg Adria", value: "Bloomberg Adria"},
  { label: "thenelsonpost", value: "thenelsonpost"},
  { label: "RallySport", value: "RallySport"},
  { label: "Dowbit.es", value: "Dowbit.es"},
  { label: "AffairsCloud.com", value: "AffairsCloud.com"},
  { label: "Indian Retailer", value: "Indian Retailer"},
  { label: "The Pressbox", value: "The Pressbox"},
  { label: "Campaign Brief Asia", value: "Campaign Brief Asia"},
  { label: "Investing.com", value: "Investing.com"},
  { label: "The Herald", value: "The Herald"},
  { label: "WHEE", value: "WHEE"},
  { label: "Radio Station WHMI 93.5 FM — Livingston County Michigan News ...", value: "Radio Station WHMI 93.5 FM — Livingston County Michigan News ..."},
  { label: "Channel Guide Magazine", value: "Channel Guide Magazine"},
  { label: "The Maritime Executive", value: "The Maritime Executive"},
  { label: "Dentons", value: "Dentons"},
  { label: "Shanghai Daily", value: "Shanghai Daily"},
  { label: "Food Ingredients First", value: "Food Ingredients First"},
  { label: "PYMNTS.com", value: "PYMNTS.com"},
  { label: "ABC de Sevilla", value: "ABC de Sevilla"},
  {   label: "yenidakika.com", value: "yenidakika.com"},
  { label: "Fokus Sulsel", value: "Fokus Sulsel"},
  { label: "CryptoSaurus", value: "CryptoSaurus"},
  { label: "MarketScreener", value: "MarketScreener"},
  { label: "ANI News", value: "ANI News"}
]
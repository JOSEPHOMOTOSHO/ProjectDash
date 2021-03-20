import { FiBookOpen } from "react-icons/fi";
import { BiBookmark } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { BiUser } from "react-icons/bi";

export const NavBar = [
  {
    title: "Courses",
    icon: <FiBookOpen />,
  },

  {
    title: "Programs",
    icon: <BiBookmark />,
  },

  {
    title: "Guardians",
    icon: <FiUsers />,
  },
  {
    title: "Users",
    icon: <BiUser />,
  },
];

//     <div className="NavBar-Container">
//       <FiBookOpen />
//       <span>yam</span>
//       <BiBookmark />
//       <span>yam</span>
//       <FiUsers />
//       <span>yam</span>
//     </div>
//   );
// };

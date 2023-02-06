// component
import Iconify from "../../components/Iconify";

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={25} height={25} />;

const labanderoNav = [
  {
    title: 'Home',
    path: '/home',
    icon: getIcon('material-symbols:home-pin'),
  },
  {
    title: 'Profile',
    path: '/profile',
    icon: getIcon('carbon:user-profile'),
  },
];

export default labanderoNav;

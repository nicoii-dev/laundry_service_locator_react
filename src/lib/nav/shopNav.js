// component
import Iconify from "../../components/Iconify";

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={25} height={25} />;

const shopNav = [
  {
    title: 'Services',
    path: '/services',
    icon: getIcon('material-symbols:laundry-outline-rounded'),
  },
  {
    title: 'Profile',
    path: '/profile',
    icon: getIcon('carbon:user-profile'),
  },
];

export default shopNav;

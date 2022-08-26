import { constantUsers, userSignedUp, noUsers } from './assets/dataUsers';

function UserControl(props) {
  switch (props) {
    case 'constantUsers':
      return constantUsers;
    case 'userSignedUp':
      return userSignedUp;
    case 'noUsers':
      return noUsers;
    default:
      return null;
  }
}

export default UserControl;

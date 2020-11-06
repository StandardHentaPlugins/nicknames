export default class NicknamesPlugin {
  init (henta) {
    const usersPlugin = henta.getPlugin('common/users');
    const dbPlugin = henta.getPlugin('common/db');
  
    usersPlugin.field('nickName', {
      type: dbPlugin.types.STRING,
      allowNull: false,
      defaultValue: ''
    });

    usersPlugin.on('create', (user) => {
      user.nickName = user.firstName
    });
  }
}

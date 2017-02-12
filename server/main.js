import publications from './publications';
import methods from './methods';
import dbMigrations from './configs/dbMigrations';
import Logging from './modules/logging';
import OnlineStatus from './modules/onlineStatus';

// Do not touch - this is updated by gulp.
Meteor.backendVersion = '0.1.0';

publications();
methods();

Meteor.startup(() => {
    dbMigrations();
});

new Logging(); // eslint-disable-line no-new
new OnlineStatus(); // eslint-disable-line no-new

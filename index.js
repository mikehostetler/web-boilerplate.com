var path = require('path'),
		CodeSwarm = require('codeswarm/index'),
		localPath = path.resolve('.');

CodeSwarm.lift({
			appPath: path.dirname(require.resolve('codeswarm/index')),
			paths: {
				tmp					: localPath + '/.tmp',
				'public'    : localPath + '/.tmp/public',
				templates   : localPath + '/assets/templates',
				views				: localPath + '/views',
				layout			: localPath + '/views/layout.ejs'
			}
		}, function() {
			// Callback goes here ...
		});

module.exports = {
	output: {
		library: 'reactor',
		libraryTarget: 'umd'
	},
	externals: [
		{
			react: {
				root: 'React',
				commonjs2: 'react',
				commonjs: 'react',
				amd: 'react'
			}
		},
	]
};

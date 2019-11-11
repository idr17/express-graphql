// Team Type

const graphql = require('graphql')
const axios = require('axios')
const { GraphQLObjectType, GraphQLString, GraphQLList } = graphql

const Team = new GraphQLObjectType({
	name: 'Team',
	fields: () => ({
		id: { type: GraphQLString },
		name: { type: GraphQLString },
		players: {
			type: new GraphQLList(require('./player')),
			resolve(parentValue, args) {
				return axios.get(`http://localhost:3004/teams/${parentValue.id}/players`).then(response => response.data)
			}
		}
	})
})

module.exports = Team
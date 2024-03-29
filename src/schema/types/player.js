// Player Type

const graphql = require('graphql')
const axios = require('axios')
const { GraphQLObjectType, GraphQLString } = graphql

const Player = new GraphQLObjectType({
	name: 'Player',
	fields: () => ({
		id: { type: GraphQLString },
		firstName: { type: GraphQLString },
		lastName: { type: GraphQLString },
		team: {
			type: require('./team'),
			resolve(parentValue, args) {
				return axios.get(`http://localhost:3004/team/${parentValue.id}`).then(response => response.data)
			}
		}
	})
})

module.exports = Player
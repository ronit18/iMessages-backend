import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const typeDefs = `#graphql
  
`;

const resolvers = {
	Query: {},
};

const server = new ApolloServer({
	typeDefs,
	resolvers,
	csrfPrevention: true,
});

const { url } = await startStandaloneServer(server, {
	listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);

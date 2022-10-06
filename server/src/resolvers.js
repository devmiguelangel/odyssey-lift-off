const resolvers = {
  Query: {
    // Returns an array of Tracks that will be used to populate
    // the home page grid of our web client
    tracksForHome: (_, __, { dataSources }) => {
      return dataSources.TrackAPI.getTracksForHome();
    },
  },
  Track: {
    author: ({ authorId }, _, { dataSources }) => {
      return dataSources.TrackAPI.getAuthor(authorId);
    },
  },
};

module.exports = resolvers;

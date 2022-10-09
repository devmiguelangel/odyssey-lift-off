const resolvers = {
  Query: {
    // Returns an array of Tracks that will be used to populate
    // the home page grid of our web client
    tracksForHome: (_, __, { dataSources }) => {
      return dataSources.TrackAPI.getTracksForHome();
    },
    track: (_, { id }, { dataSources }) => {
      return dataSources.TrackAPI.getTrack(id);
    }
  },
  Track: {
    author: ({ authorId }, _, { dataSources }) => {
      return dataSources.TrackAPI.getAuthor(authorId);
    },
    modules: ({ id }, _, { dataSources }) => {
      return dataSources.TrackAPI.getTrackModules(id);
    },
  },
};

module.exports = resolvers;

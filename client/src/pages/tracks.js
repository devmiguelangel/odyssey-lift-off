import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Layout } from '../components';
import QueryResult from '../components/query-result';
import TrackDetail from '../components/track-detail';

const TRACKS = gql`
  query GetTracks {
    tracksForHome {
      id
      title
      thumbnail
      length
      modulesCount
      author {
        id
        name
        photo
      }
    }
  }
`;
/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
  const { loading, error, data } = useQuery(TRACKS);

  return (
    <Layout grid>
      <QueryResult error={error} loading={loading} data={data}>
        {data?.tracksForHome?.map(track => <TrackDetail key={track.id} track={track} />)}
      </QueryResult>
    </Layout>
  );
};

export default Tracks;

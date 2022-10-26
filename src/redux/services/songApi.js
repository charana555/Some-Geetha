import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const songApi = createApi({
  reducerPath: "songApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/v1",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "ddac3e053bmsh79d283f2b0b7642p1999fajsn798c57625004"
      );

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => "/charts/world" }),
  }),
});

export const { useGetTopChartsQuery } = songApi;

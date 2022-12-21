import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUser } from "./user.type";

export const userApi = createApi({
  reducerPath: "/api/user",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (build) => ({
    getUsers: build.query<IUser[], number>({
      query: (limit: 5) => `users?limit=${limit}`,
    }),
  }),
});

export const { useGetUsersQuery } = userApi;

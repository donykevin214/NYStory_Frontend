import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { toast } from "react-toastify";

import { ApiError, StoryRequest, StoryResponse } from "~/interfaces/api.interfaces";
import { setStoryData } from "./story/story.reducer";

const API_PREFIX = "http://localhost:3001/api";

export const displayError = (
    err: ApiError | undefined,
    defaultMessage = "Error while sending the request"
  ) => {
    if (err?.errors?.length) {
      toast(err.errors[0].message, {
        type: "error",
      });
    } else if (err?.message) {
      toast(err.message, {
        type: "error",
      });
    } else if ((err as any)?.error?.message) {
      toast((err as any).error.message, {
        type: "error",
      });
    } else {
      toast(defaultMessage, {
        type: "error",
      });
    }
};

function getHeadersFromToken(token: string, json?: boolean) {
    const headers: Record<string, string> = {};
    if (json) headers["Content-Type"] = "application/json";
    if (token) headers["Authorization"] = `Bearer ${token}`;
    return headers;
}

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: API_PREFIX }),
    tagTypes: ["story"],
    endpoints: (builder) => ({
        getStories: builder.mutation<StoryResponse, StoryRequest>({
            query: (creds) => ({
              body: creds,
              method: "POST",
              url: "/story/getStoryData",
              headers: getHeadersFromToken("", true),
            }),
            async onQueryStarted(_, { queryFulfilled, dispatch }) {
              try {
                const {
                    data: { result }
                } = await queryFulfilled;
                dispatch(setStoryData(result));
              } catch (e: any) {
                displayError(e as ApiError, "Error while getting story data");
              }
            },
            transformErrorResponse(err) {
              return err.data;
            },
          }),
    })
})
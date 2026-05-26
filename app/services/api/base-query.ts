import { useQuery } from "@tanstack/react-query";

import { api } from "./axios";

interface QueryParams {
  endpoint: string;

  queryKey: unknown[];

  params?: Record<string, unknown>;

  enabled?: boolean;
}

export function useBaseQuery<T>({
  endpoint,
  queryKey,
  params,
  enabled = true,
}: QueryParams) {
  return useQuery({
    queryKey,

    queryFn: async () => {
      const response = await api.get<T>(endpoint, {
        params,
      });

      return response.data;
    },

    enabled,
  });
}

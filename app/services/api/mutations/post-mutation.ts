import { useMutation } from "@tanstack/react-query";

import { api } from "@app/services/api/axios";

interface MutationParams<T> {
  endpoint: string;
}

export function usePostMutation<TResponse, TBody>({
  endpoint,
}: MutationParams<TBody>) {
  return useMutation({
    mutationFn: async (body: TBody) => {
      const response = await api.post<TResponse>(endpoint, body);

      return response.data;
    },
  });
}

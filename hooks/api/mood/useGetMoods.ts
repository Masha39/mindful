import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "./queryKeys";
import { Mood } from "./types";

const fetchMoods = async () => {
  const response = await fetch("/api/mood");
  return response.json();
};

export const useGetMoods = () => {
  return useQuery<Mood[]>({
    queryKey: queryKeys.moods,
    queryFn: () => fetchMoods(),
  });
};

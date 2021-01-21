import { createContext } from "react";

export const JobContext = createContext({});

export default function JobContextProvider({ children }) {
  const hello = {};
  return <JobContext.Provider value={{ hello }}>{children}</JobContext.Provider>;
}

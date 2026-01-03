import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jobs")
export default class JobController {
  @operation({
    summary: "Get Jobs",
  })
  @get()
  static getJobs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Job",
  })
  @post("{id}")
  static createJob = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

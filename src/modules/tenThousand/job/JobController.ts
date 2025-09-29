import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jobs")
export default class JobController {
  @operation({
    summary: "Get Jobs",
  })
  @get()
  static getJobs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Job",
  })
  @post("{id}")
  static createJob = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

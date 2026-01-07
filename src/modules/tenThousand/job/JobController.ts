import { procedure, prefix, get, post, operation } from "vovk";

@prefix("job")
export default class JobController {
  @operation({
    summary: "Get Job",
  })
  @get()
  static getJob = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Job",
  })
  @post("{id}")
  static createJob = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

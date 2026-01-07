import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bre")
export default class BreController {
  @operation({
    summary: "Get Bre",
  })
  @get()
  static getBre = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bre",
  })
  @post("{id}")
  static createBre = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

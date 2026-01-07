import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lgr")
export default class LgrController {
  @operation({
    summary: "Get Lgr",
  })
  @get()
  static getLgr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lgr",
  })
  @post("{id}")
  static createLgr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lgn")
export default class LgnController {
  @operation({
    summary: "Get Lgn",
  })
  @get()
  static getLgn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lgn",
  })
  @post("{id}")
  static createLgn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lgm")
export default class LgmController {
  @operation({
    summary: "Get Lgm",
  })
  @get()
  static getLgm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lgm",
  })
  @post("{id}")
  static createLgm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

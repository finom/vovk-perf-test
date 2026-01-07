import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lgd")
export default class LgdController {
  @operation({
    summary: "Get Lgd",
  })
  @get()
  static getLgd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lgd",
  })
  @post("{id}")
  static createLgd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

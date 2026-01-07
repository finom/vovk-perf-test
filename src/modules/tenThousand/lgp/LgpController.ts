import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lgp")
export default class LgpController {
  @operation({
    summary: "Get Lgp",
  })
  @get()
  static getLgp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lgp",
  })
  @post("{id}")
  static createLgp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

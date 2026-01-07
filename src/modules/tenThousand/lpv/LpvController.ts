import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lpv")
export default class LpvController {
  @operation({
    summary: "Get Lpv",
  })
  @get()
  static getLpv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lpv",
  })
  @post("{id}")
  static createLpv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

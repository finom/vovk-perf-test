import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lp")
export default class LpController {
  @operation({
    summary: "Get Lp",
  })
  @get()
  static getLp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lp",
  })
  @post("{id}")
  static createLp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lni")
export default class LniController {
  @operation({
    summary: "Get Lni",
  })
  @get()
  static getLni = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lni",
  })
  @post("{id}")
  static createLni = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

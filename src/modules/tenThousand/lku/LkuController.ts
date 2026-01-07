import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lku")
export default class LkuController {
  @operation({
    summary: "Get Lku",
  })
  @get()
  static getLku = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lku",
  })
  @post("{id}")
  static createLku = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lce")
export default class LceController {
  @operation({
    summary: "Get Lce",
  })
  @get()
  static getLce = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lce",
  })
  @post("{id}")
  static createLce = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

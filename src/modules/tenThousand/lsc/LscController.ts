import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lsc")
export default class LscController {
  @operation({
    summary: "Get Lsc",
  })
  @get()
  static getLsc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lsc",
  })
  @post("{id}")
  static createLsc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

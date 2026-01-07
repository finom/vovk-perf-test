import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bml")
export default class BmlController {
  @operation({
    summary: "Get Bml",
  })
  @get()
  static getBml = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bml",
  })
  @post("{id}")
  static createBml = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fb")
export default class FbController {
  @operation({
    summary: "Get Fb",
  })
  @get()
  static getFb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fb",
  })
  @post("{id}")
  static createFb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

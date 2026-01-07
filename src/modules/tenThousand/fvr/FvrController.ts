import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fvr")
export default class FvrController {
  @operation({
    summary: "Get Fvr",
  })
  @get()
  static getFvr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fvr",
  })
  @post("{id}")
  static createFvr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

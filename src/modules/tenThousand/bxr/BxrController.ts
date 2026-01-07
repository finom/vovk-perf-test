import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bxr")
export default class BxrController {
  @operation({
    summary: "Get Bxr",
  })
  @get()
  static getBxr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bxr",
  })
  @post("{id}")
  static createBxr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

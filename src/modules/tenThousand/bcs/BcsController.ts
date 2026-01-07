import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bcs")
export default class BcsController {
  @operation({
    summary: "Get Bcs",
  })
  @get()
  static getBcs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bcs",
  })
  @post("{id}")
  static createBcs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

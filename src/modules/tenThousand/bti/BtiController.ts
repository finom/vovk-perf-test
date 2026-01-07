import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bti")
export default class BtiController {
  @operation({
    summary: "Get Bti",
  })
  @get()
  static getBti = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bti",
  })
  @post("{id}")
  static createBti = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

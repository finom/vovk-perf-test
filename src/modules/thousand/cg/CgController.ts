import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cg")
export default class CgController {
  @operation({
    summary: "Get Cg",
  })
  @get()
  static getCg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cg",
  })
  @post("{id}")
  static createCg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

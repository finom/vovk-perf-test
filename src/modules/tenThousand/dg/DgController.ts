import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dg")
export default class DgController {
  @operation({
    summary: "Get Dg",
  })
  @get()
  static getDg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dg",
  })
  @post("{id}")
  static createDg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

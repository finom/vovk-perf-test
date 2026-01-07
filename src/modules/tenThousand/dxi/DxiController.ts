import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dxi")
export default class DxiController {
  @operation({
    summary: "Get Dxi",
  })
  @get()
  static getDxi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dxi",
  })
  @post("{id}")
  static createDxi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

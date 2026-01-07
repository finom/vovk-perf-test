import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dxs")
export default class DxsController {
  @operation({
    summary: "Get Dxs",
  })
  @get()
  static getDxs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dxs",
  })
  @post("{id}")
  static createDxs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

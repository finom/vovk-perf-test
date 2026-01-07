import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dxg")
export default class DxgController {
  @operation({
    summary: "Get Dxg",
  })
  @get()
  static getDxg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dxg",
  })
  @post("{id}")
  static createDxg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

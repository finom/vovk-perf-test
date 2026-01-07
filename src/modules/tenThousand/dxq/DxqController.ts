import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dxq")
export default class DxqController {
  @operation({
    summary: "Get Dxq",
  })
  @get()
  static getDxq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dxq",
  })
  @post("{id}")
  static createDxq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

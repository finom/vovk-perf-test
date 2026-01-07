import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dxw")
export default class DxwController {
  @operation({
    summary: "Get Dxw",
  })
  @get()
  static getDxw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dxw",
  })
  @post("{id}")
  static createDxw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

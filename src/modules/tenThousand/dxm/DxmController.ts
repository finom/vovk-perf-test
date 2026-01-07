import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dxm")
export default class DxmController {
  @operation({
    summary: "Get Dxm",
  })
  @get()
  static getDxm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dxm",
  })
  @post("{id}")
  static createDxm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dxz")
export default class DxzController {
  @operation({
    summary: "Get Dxz",
  })
  @get()
  static getDxz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dxz",
  })
  @post("{id}")
  static createDxz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

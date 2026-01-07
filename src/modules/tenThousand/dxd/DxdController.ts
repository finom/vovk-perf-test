import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dxd")
export default class DxdController {
  @operation({
    summary: "Get Dxd",
  })
  @get()
  static getDxd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dxd",
  })
  @post("{id}")
  static createDxd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

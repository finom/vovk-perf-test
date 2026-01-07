import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dxr")
export default class DxrController {
  @operation({
    summary: "Get Dxr",
  })
  @get()
  static getDxr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dxr",
  })
  @post("{id}")
  static createDxr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

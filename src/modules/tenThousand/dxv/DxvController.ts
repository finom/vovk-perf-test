import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dxv")
export default class DxvController {
  @operation({
    summary: "Get Dxv",
  })
  @get()
  static getDxv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dxv",
  })
  @post("{id}")
  static createDxv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

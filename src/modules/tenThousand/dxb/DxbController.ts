import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dxb")
export default class DxbController {
  @operation({
    summary: "Get Dxb",
  })
  @get()
  static getDxb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dxb",
  })
  @post("{id}")
  static createDxb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

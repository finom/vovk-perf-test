import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dxh")
export default class DxhController {
  @operation({
    summary: "Get Dxh",
  })
  @get()
  static getDxh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dxh",
  })
  @post("{id}")
  static createDxh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

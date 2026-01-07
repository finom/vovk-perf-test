import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dxj")
export default class DxjController {
  @operation({
    summary: "Get Dxj",
  })
  @get()
  static getDxj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dxj",
  })
  @post("{id}")
  static createDxj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

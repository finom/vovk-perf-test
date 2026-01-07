import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dxl")
export default class DxlController {
  @operation({
    summary: "Get Dxl",
  })
  @get()
  static getDxl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dxl",
  })
  @post("{id}")
  static createDxl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

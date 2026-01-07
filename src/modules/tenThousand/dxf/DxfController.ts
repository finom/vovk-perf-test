import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dxf")
export default class DxfController {
  @operation({
    summary: "Get Dxf",
  })
  @get()
  static getDxf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dxf",
  })
  @post("{id}")
  static createDxf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

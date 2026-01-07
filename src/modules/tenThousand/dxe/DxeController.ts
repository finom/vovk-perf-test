import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dxe")
export default class DxeController {
  @operation({
    summary: "Get Dxe",
  })
  @get()
  static getDxe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dxe",
  })
  @post("{id}")
  static createDxe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

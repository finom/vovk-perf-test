import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dxp")
export default class DxpController {
  @operation({
    summary: "Get Dxp",
  })
  @get()
  static getDxp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dxp",
  })
  @post("{id}")
  static createDxp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dxn")
export default class DxnController {
  @operation({
    summary: "Get Dxn",
  })
  @get()
  static getDxn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dxn",
  })
  @post("{id}")
  static createDxn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

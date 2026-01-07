import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dxo")
export default class DxoController {
  @operation({
    summary: "Get Dxo",
  })
  @get()
  static getDxo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dxo",
  })
  @post("{id}")
  static createDxo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

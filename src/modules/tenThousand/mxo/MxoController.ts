import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mxo")
export default class MxoController {
  @operation({
    summary: "Get Mxo",
  })
  @get()
  static getMxo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mxo",
  })
  @post("{id}")
  static createMxo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

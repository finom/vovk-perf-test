import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bxo")
export default class BxoController {
  @operation({
    summary: "Get Bxo",
  })
  @get()
  static getBxo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bxo",
  })
  @post("{id}")
  static createBxo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

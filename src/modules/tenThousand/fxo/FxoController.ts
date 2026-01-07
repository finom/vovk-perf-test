import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fxo")
export default class FxoController {
  @operation({
    summary: "Get Fxo",
  })
  @get()
  static getFxo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fxo",
  })
  @post("{id}")
  static createFxo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

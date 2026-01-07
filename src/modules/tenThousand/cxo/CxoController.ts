import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cxo")
export default class CxoController {
  @operation({
    summary: "Get Cxo",
  })
  @get()
  static getCxo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cxo",
  })
  @post("{id}")
  static createCxo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

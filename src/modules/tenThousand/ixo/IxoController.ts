import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ixo")
export default class IxoController {
  @operation({
    summary: "Get Ixo",
  })
  @get()
  static getIxo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ixo",
  })
  @post("{id}")
  static createIxo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

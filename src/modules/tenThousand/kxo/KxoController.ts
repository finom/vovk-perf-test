import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kxo")
export default class KxoController {
  @operation({
    summary: "Get Kxo",
  })
  @get()
  static getKxo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kxo",
  })
  @post("{id}")
  static createKxo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

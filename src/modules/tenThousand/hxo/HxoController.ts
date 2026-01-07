import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hxo")
export default class HxoController {
  @operation({
    summary: "Get Hxo",
  })
  @get()
  static getHxo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hxo",
  })
  @post("{id}")
  static createHxo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

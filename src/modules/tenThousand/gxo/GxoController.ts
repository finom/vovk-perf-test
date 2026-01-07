import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gxo")
export default class GxoController {
  @operation({
    summary: "Get Gxo",
  })
  @get()
  static getGxo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gxo",
  })
  @post("{id}")
  static createGxo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

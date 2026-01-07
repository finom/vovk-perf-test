import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jxo")
export default class JxoController {
  @operation({
    summary: "Get Jxo",
  })
  @get()
  static getJxo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jxo",
  })
  @post("{id}")
  static createJxo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

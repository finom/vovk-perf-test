import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lxo")
export default class LxoController {
  @operation({
    summary: "Get Lxo",
  })
  @get()
  static getLxo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lxo",
  })
  @post("{id}")
  static createLxo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

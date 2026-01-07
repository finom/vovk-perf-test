import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nao")
export default class NaoController {
  @operation({
    summary: "Get Nao",
  })
  @get()
  static getNao = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nao",
  })
  @post("{id}")
  static createNao = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

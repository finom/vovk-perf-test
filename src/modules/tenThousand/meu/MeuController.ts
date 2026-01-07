import { procedure, prefix, get, post, operation } from "vovk";

@prefix("meu")
export default class MeuController {
  @operation({
    summary: "Get Meu",
  })
  @get()
  static getMeu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Meu",
  })
  @post("{id}")
  static createMeu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

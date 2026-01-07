import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mao")
export default class MaoController {
  @operation({
    summary: "Get Mao",
  })
  @get()
  static getMao = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mao",
  })
  @post("{id}")
  static createMao = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

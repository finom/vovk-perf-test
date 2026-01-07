import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aao")
export default class AaoController {
  @operation({
    summary: "Get Aao",
  })
  @get()
  static getAao = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aao",
  })
  @post("{id}")
  static createAao = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

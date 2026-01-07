import { procedure, prefix, get, post, operation } from "vovk";

@prefix("csa")
export default class CsaController {
  @operation({
    summary: "Get Csa",
  })
  @get()
  static getCsa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Csa",
  })
  @post("{id}")
  static createCsa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

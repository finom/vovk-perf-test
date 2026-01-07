import { procedure, prefix, get, post, operation } from "vovk";

@prefix("esq")
export default class EsqController {
  @operation({
    summary: "Get Esq",
  })
  @get()
  static getEsq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Esq",
  })
  @post("{id}")
  static createEsq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eao")
export default class EaoController {
  @operation({
    summary: "Get Eao",
  })
  @get()
  static getEao = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eao",
  })
  @post("{id}")
  static createEao = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hpj")
export default class HpjController {
  @operation({
    summary: "Get Hpj",
  })
  @get()
  static getHpj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hpj",
  })
  @post("{id}")
  static createHpj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

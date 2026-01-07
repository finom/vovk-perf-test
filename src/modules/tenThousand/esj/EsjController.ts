import { procedure, prefix, get, post, operation } from "vovk";

@prefix("esj")
export default class EsjController {
  @operation({
    summary: "Get Esj",
  })
  @get()
  static getEsj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Esj",
  })
  @post("{id}")
  static createEsj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

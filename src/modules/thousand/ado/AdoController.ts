import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ado")
export default class AdoController {
  @operation({
    summary: "Get Ado",
  })
  @get()
  static getAdo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ado",
  })
  @post("{id}")
  static createAdo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

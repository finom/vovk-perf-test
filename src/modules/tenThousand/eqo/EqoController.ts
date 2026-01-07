import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eqo")
export default class EqoController {
  @operation({
    summary: "Get Eqo",
  })
  @get()
  static getEqo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eqo",
  })
  @post("{id}")
  static createEqo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eqn")
export default class EqnController {
  @operation({
    summary: "Get Eqn",
  })
  @get()
  static getEqn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eqn",
  })
  @post("{id}")
  static createEqn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

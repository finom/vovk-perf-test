import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eqm")
export default class EqmController {
  @operation({
    summary: "Get Eqm",
  })
  @get()
  static getEqm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eqm",
  })
  @post("{id}")
  static createEqm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

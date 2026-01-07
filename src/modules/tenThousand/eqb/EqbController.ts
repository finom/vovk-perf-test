import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eqb")
export default class EqbController {
  @operation({
    summary: "Get Eqb",
  })
  @get()
  static getEqb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eqb",
  })
  @post("{id}")
  static createEqb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eqh")
export default class EqhController {
  @operation({
    summary: "Get Eqh",
  })
  @get()
  static getEqh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eqh",
  })
  @post("{id}")
  static createEqh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

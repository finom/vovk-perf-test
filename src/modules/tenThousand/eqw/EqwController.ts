import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eqw")
export default class EqwController {
  @operation({
    summary: "Get Eqw",
  })
  @get()
  static getEqw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eqw",
  })
  @post("{id}")
  static createEqw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

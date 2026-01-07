import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eqj")
export default class EqjController {
  @operation({
    summary: "Get Eqj",
  })
  @get()
  static getEqj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eqj",
  })
  @post("{id}")
  static createEqj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

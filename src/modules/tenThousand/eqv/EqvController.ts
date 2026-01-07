import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eqv")
export default class EqvController {
  @operation({
    summary: "Get Eqv",
  })
  @get()
  static getEqv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eqv",
  })
  @post("{id}")
  static createEqv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

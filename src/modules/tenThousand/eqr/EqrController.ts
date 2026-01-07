import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eqr")
export default class EqrController {
  @operation({
    summary: "Get Eqr",
  })
  @get()
  static getEqr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eqr",
  })
  @post("{id}")
  static createEqr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

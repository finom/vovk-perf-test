import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eqx")
export default class EqxController {
  @operation({
    summary: "Get Eqx",
  })
  @get()
  static getEqx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eqx",
  })
  @post("{id}")
  static createEqx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

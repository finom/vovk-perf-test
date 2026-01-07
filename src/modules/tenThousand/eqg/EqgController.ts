import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eqg")
export default class EqgController {
  @operation({
    summary: "Get Eqg",
  })
  @get()
  static getEqg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eqg",
  })
  @post("{id}")
  static createEqg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eqq")
export default class EqqController {
  @operation({
    summary: "Get Eqq",
  })
  @get()
  static getEqq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eqq",
  })
  @post("{id}")
  static createEqq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

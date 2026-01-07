import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eqc")
export default class EqcController {
  @operation({
    summary: "Get Eqc",
  })
  @get()
  static getEqc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eqc",
  })
  @post("{id}")
  static createEqc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

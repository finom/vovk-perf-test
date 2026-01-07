import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eqd")
export default class EqdController {
  @operation({
    summary: "Get Eqd",
  })
  @get()
  static getEqd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eqd",
  })
  @post("{id}")
  static createEqd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eqy")
export default class EqyController {
  @operation({
    summary: "Get Eqy",
  })
  @get()
  static getEqy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eqy",
  })
  @post("{id}")
  static createEqy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

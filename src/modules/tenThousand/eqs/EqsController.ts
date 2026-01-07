import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eqs")
export default class EqsController {
  @operation({
    summary: "Get Eqs",
  })
  @get()
  static getEqs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eqs",
  })
  @post("{id}")
  static createEqs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("exp")
export default class ExpController {
  @operation({
    summary: "Get Exp",
  })
  @get()
  static getExp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Exp",
  })
  @post("{id}")
  static createExp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

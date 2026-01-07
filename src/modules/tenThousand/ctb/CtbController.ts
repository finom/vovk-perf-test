import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ctb")
export default class CtbController {
  @operation({
    summary: "Get Ctb",
  })
  @get()
  static getCtb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ctb",
  })
  @post("{id}")
  static createCtb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

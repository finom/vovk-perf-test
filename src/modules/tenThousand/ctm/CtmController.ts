import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ctm")
export default class CtmController {
  @operation({
    summary: "Get Ctm",
  })
  @get()
  static getCtm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ctm",
  })
  @post("{id}")
  static createCtm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

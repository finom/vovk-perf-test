import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jlr")
export default class JlrController {
  @operation({
    summary: "Get Jlr",
  })
  @get()
  static getJlr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jlr",
  })
  @post("{id}")
  static createJlr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ast")
export default class AstController {
  @operation({
    summary: "Get Ast",
  })
  @get()
  static getAst = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ast",
  })
  @post("{id}")
  static createAst = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

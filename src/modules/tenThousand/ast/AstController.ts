import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ast")
export default class AstController {
  @operation({
    summary: "Get Ast",
  })
  @get()
  static getAst = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ast",
  })
  @post("{id}")
  static createAst = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

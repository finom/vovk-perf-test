import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("asts")
export default class AstController {
  @operation({
    summary: "Get Asts",
  })
  @get()
  static getAsts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ast",
  })
  @post("{id}")
  static createAst = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

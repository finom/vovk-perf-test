import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lexes")
export default class LexController {
  @operation({
    summary: "Get Lexes",
  })
  @get()
  static getLexes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lex",
  })
  @post("{id}")
  static createLex = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

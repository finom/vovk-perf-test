import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jqjs")
export default class JqjController {
  @operation({
    summary: "Get Jqjs",
  })
  @get()
  static getJqjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jqj",
  })
  @post("{id}")
  static createJqj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

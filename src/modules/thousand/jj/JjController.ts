import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jjs")
export default class JjController {
  @operation({
    summary: "Get Jjs",
  })
  @get()
  static getJjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jj",
  })
  @post("{id}")
  static createJj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

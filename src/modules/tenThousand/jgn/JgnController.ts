import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jgns")
export default class JgnController {
  @operation({
    summary: "Get Jgns",
  })
  @get()
  static getJgns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jgn",
  })
  @post("{id}")
  static createJgn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jots")
export default class JotController {
  @operation({
    summary: "Get Jots",
  })
  @get()
  static getJots = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jot",
  })
  @post("{id}")
  static createJot = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

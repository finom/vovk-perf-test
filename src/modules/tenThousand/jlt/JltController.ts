import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jlts")
export default class JltController {
  @operation({
    summary: "Get Jlts",
  })
  @get()
  static getJlts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jlt",
  })
  @post("{id}")
  static createJlt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

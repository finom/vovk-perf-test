import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("afls")
export default class AflController {
  @operation({
    summary: "Get Afls",
  })
  @get()
  static getAfls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Afl",
  })
  @post("{id}")
  static createAfl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

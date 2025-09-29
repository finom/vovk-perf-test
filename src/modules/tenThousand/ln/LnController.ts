import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lns")
export default class LnController {
  @operation({
    summary: "Get Lns",
  })
  @get()
  static getLns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ln",
  })
  @post("{id}")
  static createLn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

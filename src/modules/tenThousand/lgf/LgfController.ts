import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lgfs")
export default class LgfController {
  @operation({
    summary: "Get Lgfs",
  })
  @get()
  static getLgfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lgf",
  })
  @post("{id}")
  static createLgf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

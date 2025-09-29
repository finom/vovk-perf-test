import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aots")
export default class AotController {
  @operation({
    summary: "Get Aots",
  })
  @get()
  static getAots = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aot",
  })
  @post("{id}")
  static createAot = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

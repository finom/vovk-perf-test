import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mprs")
export default class MprController {
  @operation({
    summary: "Get Mprs",
  })
  @get()
  static getMprs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mpr",
  })
  @post("{id}")
  static createMpr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

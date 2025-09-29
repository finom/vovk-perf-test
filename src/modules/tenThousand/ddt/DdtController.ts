import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ddts")
export default class DdtController {
  @operation({
    summary: "Get Ddts",
  })
  @get()
  static getDdts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ddt",
  })
  @post("{id}")
  static createDdt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

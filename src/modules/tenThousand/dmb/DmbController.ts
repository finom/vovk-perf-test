import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dmbs")
export default class DmbController {
  @operation({
    summary: "Get Dmbs",
  })
  @get()
  static getDmbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dmb",
  })
  @post("{id}")
  static createDmb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

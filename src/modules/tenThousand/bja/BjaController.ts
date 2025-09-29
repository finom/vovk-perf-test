import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bjas")
export default class BjaController {
  @operation({
    summary: "Get Bjas",
  })
  @get()
  static getBjas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bja",
  })
  @post("{id}")
  static createBja = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

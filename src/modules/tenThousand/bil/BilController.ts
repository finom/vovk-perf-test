import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bils")
export default class BilController {
  @operation({
    summary: "Get Bils",
  })
  @get()
  static getBils = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bil",
  })
  @post("{id}")
  static createBil = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("biks")
export default class BikController {
  @operation({
    summary: "Get Biks",
  })
  @get()
  static getBiks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bik",
  })
  @post("{id}")
  static createBik = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

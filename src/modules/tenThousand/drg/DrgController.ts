import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("drgs")
export default class DrgController {
  @operation({
    summary: "Get Drgs",
  })
  @get()
  static getDrgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Drg",
  })
  @post("{id}")
  static createDrg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

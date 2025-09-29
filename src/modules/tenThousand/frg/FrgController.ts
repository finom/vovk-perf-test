import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("frgs")
export default class FrgController {
  @operation({
    summary: "Get Frgs",
  })
  @get()
  static getFrgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Frg",
  })
  @post("{id}")
  static createFrg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("frts")
export default class FrtController {
  @operation({
    summary: "Get Frts",
  })
  @get()
  static getFrts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Frt",
  })
  @post("{id}")
  static createFrt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

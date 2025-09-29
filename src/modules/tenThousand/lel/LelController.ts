import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lels")
export default class LelController {
  @operation({
    summary: "Get Lels",
  })
  @get()
  static getLels = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lel",
  })
  @post("{id}")
  static createLel = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

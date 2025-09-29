import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("frbs")
export default class FrbController {
  @operation({
    summary: "Get Frbs",
  })
  @get()
  static getFrbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Frb",
  })
  @post("{id}")
  static createFrb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

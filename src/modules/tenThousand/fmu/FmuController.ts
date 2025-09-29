import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fmus")
export default class FmuController {
  @operation({
    summary: "Get Fmus",
  })
  @get()
  static getFmus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fmu",
  })
  @post("{id}")
  static createFmu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

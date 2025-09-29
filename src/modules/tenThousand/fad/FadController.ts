import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fads")
export default class FadController {
  @operation({
    summary: "Get Fads",
  })
  @get()
  static getFads = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fad",
  })
  @post("{id}")
  static createFad = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fgs")
export default class FgController {
  @operation({
    summary: "Get Fgs",
  })
  @get()
  static getFgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fg",
  })
  @post("{id}")
  static createFg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

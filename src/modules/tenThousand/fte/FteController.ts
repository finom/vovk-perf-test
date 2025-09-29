import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ftes")
export default class FteController {
  @operation({
    summary: "Get Ftes",
  })
  @get()
  static getFtes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fte",
  })
  @post("{id}")
  static createFte = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fyas")
export default class FyaController {
  @operation({
    summary: "Get Fyas",
  })
  @get()
  static getFyas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fya",
  })
  @post("{id}")
  static createFya = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

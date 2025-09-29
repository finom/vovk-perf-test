import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dyas")
export default class DyaController {
  @operation({
    summary: "Get Dyas",
  })
  @get()
  static getDyas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dya",
  })
  @post("{id}")
  static createDya = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

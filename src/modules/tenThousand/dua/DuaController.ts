import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("duas")
export default class DuaController {
  @operation({
    summary: "Get Duas",
  })
  @get()
  static getDuas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dua",
  })
  @post("{id}")
  static createDua = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

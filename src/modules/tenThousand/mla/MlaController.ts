import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mlas")
export default class MlaController {
  @operation({
    summary: "Get Mlas",
  })
  @get()
  static getMlas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mla",
  })
  @post("{id}")
  static createMla = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

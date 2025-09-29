import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("foas")
export default class FoaController {
  @operation({
    summary: "Get Foas",
  })
  @get()
  static getFoas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Foa",
  })
  @post("{id}")
  static createFoa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

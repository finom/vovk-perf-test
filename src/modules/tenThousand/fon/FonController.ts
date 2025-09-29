import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fons")
export default class FonController {
  @operation({
    summary: "Get Fons",
  })
  @get()
  static getFons = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fon",
  })
  @post("{id}")
  static createFon = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

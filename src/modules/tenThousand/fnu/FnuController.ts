import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fnus")
export default class FnuController {
  @operation({
    summary: "Get Fnus",
  })
  @get()
  static getFnus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fnu",
  })
  @post("{id}")
  static createFnu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

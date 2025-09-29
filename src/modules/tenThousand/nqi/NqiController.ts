import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nqis")
export default class NqiController {
  @operation({
    summary: "Get Nqis",
  })
  @get()
  static getNqis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nqi",
  })
  @post("{id}")
  static createNqi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

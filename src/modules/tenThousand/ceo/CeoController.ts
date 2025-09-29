import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ceos")
export default class CeoController {
  @operation({
    summary: "Get Ceos",
  })
  @get()
  static getCeos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ceo",
  })
  @post("{id}")
  static createCeo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

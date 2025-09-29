import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nqms")
export default class NqmController {
  @operation({
    summary: "Get Nqms",
  })
  @get()
  static getNqms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nqm",
  })
  @post("{id}")
  static createNqm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nies")
export default class NieController {
  @operation({
    summary: "Get Nies",
  })
  @get()
  static getNies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nie",
  })
  @post("{id}")
  static createNie = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

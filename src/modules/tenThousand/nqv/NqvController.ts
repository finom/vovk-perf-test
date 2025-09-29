import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nqvs")
export default class NqvController {
  @operation({
    summary: "Get Nqvs",
  })
  @get()
  static getNqvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nqv",
  })
  @post("{id}")
  static createNqv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

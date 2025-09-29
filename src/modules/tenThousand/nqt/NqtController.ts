import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nqts")
export default class NqtController {
  @operation({
    summary: "Get Nqts",
  })
  @get()
  static getNqts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nqt",
  })
  @post("{id}")
  static createNqt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

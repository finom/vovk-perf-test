import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nfis")
export default class NfiController {
  @operation({
    summary: "Get Nfis",
  })
  @get()
  static getNfis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nfi",
  })
  @post("{id}")
  static createNfi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ksies")
export default class KsyController {
  @operation({
    summary: "Get Ksies",
  })
  @get()
  static getKsies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ksy",
  })
  @post("{id}")
  static createKsy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

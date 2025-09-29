import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mwas")
export default class MwaController {
  @operation({
    summary: "Get Mwas",
  })
  @get()
  static getMwas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mwa",
  })
  @post("{id}")
  static createMwa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

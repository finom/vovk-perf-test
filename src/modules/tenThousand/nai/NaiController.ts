import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nais")
export default class NaiController {
  @operation({
    summary: "Get Nais",
  })
  @get()
  static getNais = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nai",
  })
  @post("{id}")
  static createNai = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

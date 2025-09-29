import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lgas")
export default class LgaController {
  @operation({
    summary: "Get Lgas",
  })
  @get()
  static getLgas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lga",
  })
  @post("{id}")
  static createLga = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

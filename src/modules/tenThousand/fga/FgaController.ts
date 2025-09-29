import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fgas")
export default class FgaController {
  @operation({
    summary: "Get Fgas",
  })
  @get()
  static getFgas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fga",
  })
  @post("{id}")
  static createFga = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

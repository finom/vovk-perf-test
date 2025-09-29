import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("egas")
export default class EgaController {
  @operation({
    summary: "Get Egas",
  })
  @get()
  static getEgas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ega",
  })
  @post("{id}")
  static createEga = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("atas")
export default class AtaController {
  @operation({
    summary: "Get Atas",
  })
  @get()
  static getAtas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ata",
  })
  @post("{id}")
  static createAta = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

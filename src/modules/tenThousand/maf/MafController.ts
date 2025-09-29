import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mafs")
export default class MafController {
  @operation({
    summary: "Get Mafs",
  })
  @get()
  static getMafs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Maf",
  })
  @post("{id}")
  static createMaf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

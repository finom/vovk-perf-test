import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mohs")
export default class MohController {
  @operation({
    summary: "Get Mohs",
  })
  @get()
  static getMohs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Moh",
  })
  @post("{id}")
  static createMoh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

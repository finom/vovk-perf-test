import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mbis")
export default class MbiController {
  @operation({
    summary: "Get Mbis",
  })
  @get()
  static getMbis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mbi",
  })
  @post("{id}")
  static createMbi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

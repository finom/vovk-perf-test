import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mifs")
export default class MifController {
  @operation({
    summary: "Get Mifs",
  })
  @get()
  static getMifs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mif",
  })
  @post("{id}")
  static createMif = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

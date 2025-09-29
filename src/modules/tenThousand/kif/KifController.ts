import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kifs")
export default class KifController {
  @operation({
    summary: "Get Kifs",
  })
  @get()
  static getKifs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kif",
  })
  @post("{id}")
  static createKif = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

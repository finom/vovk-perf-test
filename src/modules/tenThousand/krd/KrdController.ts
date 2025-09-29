import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("krds")
export default class KrdController {
  @operation({
    summary: "Get Krds",
  })
  @get()
  static getKrds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Krd",
  })
  @post("{id}")
  static createKrd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

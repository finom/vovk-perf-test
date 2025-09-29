import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ksvs")
export default class KsvController {
  @operation({
    summary: "Get Ksvs",
  })
  @get()
  static getKsvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ksv",
  })
  @post("{id}")
  static createKsv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

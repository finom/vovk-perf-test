import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kgvs")
export default class KgvController {
  @operation({
    summary: "Get Kgvs",
  })
  @get()
  static getKgvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kgv",
  })
  @post("{id}")
  static createKgv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

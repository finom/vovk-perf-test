import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("egvs")
export default class EgvController {
  @operation({
    summary: "Get Egvs",
  })
  @get()
  static getEgvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Egv",
  })
  @post("{id}")
  static createEgv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

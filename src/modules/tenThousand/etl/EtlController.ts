import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("etls")
export default class EtlController {
  @operation({
    summary: "Get Etls",
  })
  @get()
  static getEtls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Etl",
  })
  @post("{id}")
  static createEtl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

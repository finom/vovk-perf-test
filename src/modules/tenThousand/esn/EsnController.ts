import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("esns")
export default class EsnController {
  @operation({
    summary: "Get Esns",
  })
  @get()
  static getEsns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Esn",
  })
  @post("{id}")
  static createEsn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

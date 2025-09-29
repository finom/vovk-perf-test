import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("npis")
export default class NpiController {
  @operation({
    summary: "Get Npis",
  })
  @get()
  static getNpis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Npi",
  })
  @post("{id}")
  static createNpi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("asns")
export default class AsnController {
  @operation({
    summary: "Get Asns",
  })
  @get()
  static getAsns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Asn",
  })
  @post("{id}")
  static createAsn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

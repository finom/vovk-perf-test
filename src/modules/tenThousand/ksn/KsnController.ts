import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ksns")
export default class KsnController {
  @operation({
    summary: "Get Ksns",
  })
  @get()
  static getKsns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ksn",
  })
  @post("{id}")
  static createKsn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

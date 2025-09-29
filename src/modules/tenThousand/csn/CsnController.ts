import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("csns")
export default class CsnController {
  @operation({
    summary: "Get Csns",
  })
  @get()
  static getCsns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Csn",
  })
  @post("{id}")
  static createCsn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

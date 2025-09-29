import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dsns")
export default class DsnController {
  @operation({
    summary: "Get Dsns",
  })
  @get()
  static getDsns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dsn",
  })
  @post("{id}")
  static createDsn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

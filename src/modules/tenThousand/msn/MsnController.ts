import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("msns")
export default class MsnController {
  @operation({
    summary: "Get Msns",
  })
  @get()
  static getMsns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Msn",
  })
  @post("{id}")
  static createMsn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

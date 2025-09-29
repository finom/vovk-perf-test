import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bsns")
export default class BsnController {
  @operation({
    summary: "Get Bsns",
  })
  @get()
  static getBsns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bsn",
  })
  @post("{id}")
  static createBsn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

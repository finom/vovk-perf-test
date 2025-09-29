import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bbus")
export default class BbuController {
  @operation({
    summary: "Get Bbus",
  })
  @get()
  static getBbus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bbu",
  })
  @post("{id}")
  static createBbu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

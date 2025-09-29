import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("brcs")
export default class BrcController {
  @operation({
    summary: "Get Brcs",
  })
  @get()
  static getBrcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Brc",
  })
  @post("{id}")
  static createBrc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

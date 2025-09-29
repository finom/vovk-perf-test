import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gsns")
export default class GsnController {
  @operation({
    summary: "Get Gsns",
  })
  @get()
  static getGsns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gsn",
  })
  @post("{id}")
  static createGsn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("awts")
export default class AwtController {
  @operation({
    summary: "Get Awts",
  })
  @get()
  static getAwts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Awt",
  })
  @post("{id}")
  static createAwt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

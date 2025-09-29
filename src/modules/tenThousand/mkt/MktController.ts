import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mkts")
export default class MktController {
  @operation({
    summary: "Get Mkts",
  })
  @get()
  static getMkts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mkt",
  })
  @post("{id}")
  static createMkt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cyns")
export default class CynController {
  @operation({
    summary: "Get Cyns",
  })
  @get()
  static getCyns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cyn",
  })
  @post("{id}")
  static createCyn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

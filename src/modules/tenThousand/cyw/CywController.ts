import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cyws")
export default class CywController {
  @operation({
    summary: "Get Cyws",
  })
  @get()
  static getCyws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cyw",
  })
  @post("{id}")
  static createCyw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

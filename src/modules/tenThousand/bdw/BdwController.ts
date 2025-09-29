import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bdws")
export default class BdwController {
  @operation({
    summary: "Get Bdws",
  })
  @get()
  static getBdws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bdw",
  })
  @post("{id}")
  static createBdw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

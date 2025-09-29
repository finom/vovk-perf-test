import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bws")
export default class BwsController {
  @operation({
    summary: "Get Bws",
  })
  @get()
  static getBws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bws",
  })
  @post("{id}")
  static createBws = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

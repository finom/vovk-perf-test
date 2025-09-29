import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mws")
export default class MwsController {
  @operation({
    summary: "Get Mws",
  })
  @get()
  static getMws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mws",
  })
  @post("{id}")
  static createMws = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

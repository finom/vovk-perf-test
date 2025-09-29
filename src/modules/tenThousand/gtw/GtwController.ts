import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gtws")
export default class GtwController {
  @operation({
    summary: "Get Gtws",
  })
  @get()
  static getGtws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gtw",
  })
  @post("{id}")
  static createGtw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

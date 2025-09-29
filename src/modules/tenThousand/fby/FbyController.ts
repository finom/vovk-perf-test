import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fbies")
export default class FbyController {
  @operation({
    summary: "Get Fbies",
  })
  @get()
  static getFbies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fby",
  })
  @post("{id}")
  static createFby = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

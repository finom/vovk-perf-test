import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fbts")
export default class FbtController {
  @operation({
    summary: "Get Fbts",
  })
  @get()
  static getFbts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fbt",
  })
  @post("{id}")
  static createFbt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

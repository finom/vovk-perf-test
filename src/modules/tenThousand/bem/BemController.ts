import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bems")
export default class BemController {
  @operation({
    summary: "Get Bems",
  })
  @get()
  static getBems = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bem",
  })
  @post("{id}")
  static createBem = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

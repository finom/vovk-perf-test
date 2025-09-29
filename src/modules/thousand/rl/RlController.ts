import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("rls")
export default class RlController {
  @operation({
    summary: "Get Rls",
  })
  @get()
  static getRls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Rl",
  })
  @post("{id}")
  static createRl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

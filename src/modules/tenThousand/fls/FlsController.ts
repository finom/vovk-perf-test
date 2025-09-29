import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fls")
export default class FlsController {
  @operation({
    summary: "Get Fls",
  })
  @get()
  static getFls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fls",
  })
  @post("{id}")
  static createFls = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

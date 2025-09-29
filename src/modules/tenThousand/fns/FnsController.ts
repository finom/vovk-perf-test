import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fns")
export default class FnsController {
  @operation({
    summary: "Get Fns",
  })
  @get()
  static getFns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fns",
  })
  @post("{id}")
  static createFns = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

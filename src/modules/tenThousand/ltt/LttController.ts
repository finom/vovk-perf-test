import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ltts")
export default class LttController {
  @operation({
    summary: "Get Ltts",
  })
  @get()
  static getLtts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ltt",
  })
  @post("{id}")
  static createLtt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

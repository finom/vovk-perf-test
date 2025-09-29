import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mges")
export default class MgeController {
  @operation({
    summary: "Get Mges",
  })
  @get()
  static getMges = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mge",
  })
  @post("{id}")
  static createMge = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

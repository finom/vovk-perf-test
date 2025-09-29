import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mts")
export default class MtsController {
  @operation({
    summary: "Get Mts",
  })
  @get()
  static getMts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mts",
  })
  @post("{id}")
  static createMts = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mtts")
export default class MttController {
  @operation({
    summary: "Get Mtts",
  })
  @get()
  static getMtts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mtt",
  })
  @post("{id}")
  static createMtt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

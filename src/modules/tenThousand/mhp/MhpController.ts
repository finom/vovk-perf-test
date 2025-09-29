import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mhps")
export default class MhpController {
  @operation({
    summary: "Get Mhps",
  })
  @get()
  static getMhps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mhp",
  })
  @post("{id}")
  static createMhp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

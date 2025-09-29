import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mhis")
export default class MhiController {
  @operation({
    summary: "Get Mhis",
  })
  @get()
  static getMhis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mhi",
  })
  @post("{id}")
  static createMhi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

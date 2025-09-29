import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dvls")
export default class DvlController {
  @operation({
    summary: "Get Dvls",
  })
  @get()
  static getDvls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dvl",
  })
  @post("{id}")
  static createDvl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

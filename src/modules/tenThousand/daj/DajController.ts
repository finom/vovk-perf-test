import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dajs")
export default class DajController {
  @operation({
    summary: "Get Dajs",
  })
  @get()
  static getDajs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Daj",
  })
  @post("{id}")
  static createDaj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

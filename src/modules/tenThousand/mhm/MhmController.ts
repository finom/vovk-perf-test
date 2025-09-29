import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mhms")
export default class MhmController {
  @operation({
    summary: "Get Mhms",
  })
  @get()
  static getMhms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mhm",
  })
  @post("{id}")
  static createMhm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

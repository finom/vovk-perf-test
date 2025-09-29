import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dyus")
export default class DyuController {
  @operation({
    summary: "Get Dyus",
  })
  @get()
  static getDyus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dyu",
  })
  @post("{id}")
  static createDyu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

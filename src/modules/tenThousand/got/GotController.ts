import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gots")
export default class GotController {
  @operation({
    summary: "Get Gots",
  })
  @get()
  static getGots = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Got",
  })
  @post("{id}")
  static createGot = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

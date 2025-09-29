import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gns")
export default class GnsController {
  @operation({
    summary: "Get Gns",
  })
  @get()
  static getGns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gns",
  })
  @post("{id}")
  static createGns = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

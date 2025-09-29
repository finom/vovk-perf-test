import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gns")
export default class GnController {
  @operation({
    summary: "Get Gns",
  })
  @get()
  static getGns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gn",
  })
  @post("{id}")
  static createGn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

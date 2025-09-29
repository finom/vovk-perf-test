import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("zns")
export default class ZnController {
  @operation({
    summary: "Get Zns",
  })
  @get()
  static getZns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Zn",
  })
  @post("{id}")
  static createZn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

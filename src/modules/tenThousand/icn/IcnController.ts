import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("icns")
export default class IcnController {
  @operation({
    summary: "Get Icns",
  })
  @get()
  static getIcns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Icn",
  })
  @post("{id}")
  static createIcn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

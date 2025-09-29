import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iuys")
export default class IuyController {
  @operation({
    summary: "Get Iuys",
  })
  @get()
  static getIuys = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iuy",
  })
  @post("{id}")
  static createIuy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

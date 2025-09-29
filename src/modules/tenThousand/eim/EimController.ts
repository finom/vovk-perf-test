import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eims")
export default class EimController {
  @operation({
    summary: "Get Eims",
  })
  @get()
  static getEims = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eim",
  })
  @post("{id}")
  static createEim = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

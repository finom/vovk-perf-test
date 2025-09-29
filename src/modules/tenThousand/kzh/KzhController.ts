import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kzhs")
export default class KzhController {
  @operation({
    summary: "Get Kzhs",
  })
  @get()
  static getKzhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kzh",
  })
  @post("{id}")
  static createKzh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

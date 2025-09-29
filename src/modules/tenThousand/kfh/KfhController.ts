import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kfhs")
export default class KfhController {
  @operation({
    summary: "Get Kfhs",
  })
  @get()
  static getKfhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kfh",
  })
  @post("{id}")
  static createKfh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kjzs")
export default class KjzController {
  @operation({
    summary: "Get Kjzs",
  })
  @get()
  static getKjzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kjz",
  })
  @post("{id}")
  static createKjz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

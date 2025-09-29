import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kgzs")
export default class KgzController {
  @operation({
    summary: "Get Kgzs",
  })
  @get()
  static getKgzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kgz",
  })
  @post("{id}")
  static createKgz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

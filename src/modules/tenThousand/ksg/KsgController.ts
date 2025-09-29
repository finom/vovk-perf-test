import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ksgs")
export default class KsgController {
  @operation({
    summary: "Get Ksgs",
  })
  @get()
  static getKsgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ksg",
  })
  @post("{id}")
  static createKsg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kcs")
export default class KcsController {
  @operation({
    summary: "Get Kcs",
  })
  @get()
  static getKcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kcs",
  })
  @post("{id}")
  static createKcs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

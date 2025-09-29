import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kwts")
export default class KwtController {
  @operation({
    summary: "Get Kwts",
  })
  @get()
  static getKwts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kwt",
  })
  @post("{id}")
  static createKwt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

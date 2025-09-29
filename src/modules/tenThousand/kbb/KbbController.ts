import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kbbs")
export default class KbbController {
  @operation({
    summary: "Get Kbbs",
  })
  @get()
  static getKbbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kbb",
  })
  @post("{id}")
  static createKbb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

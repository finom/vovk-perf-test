import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hbbs")
export default class HbbController {
  @operation({
    summary: "Get Hbbs",
  })
  @get()
  static getHbbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hbb",
  })
  @post("{id}")
  static createHbb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

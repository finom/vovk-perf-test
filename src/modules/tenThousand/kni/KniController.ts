import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("knis")
export default class KniController {
  @operation({
    summary: "Get Knis",
  })
  @get()
  static getKnis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kni",
  })
  @post("{id}")
  static createKni = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

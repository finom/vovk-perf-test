import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("atgs")
export default class AtgController {
  @operation({
    summary: "Get Atgs",
  })
  @get()
  static getAtgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Atg",
  })
  @post("{id}")
  static createAtg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

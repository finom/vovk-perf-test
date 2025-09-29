import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kbs")
export default class KbController {
  @operation({
    summary: "Get Kbs",
  })
  @get()
  static getKbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kb",
  })
  @post("{id}")
  static createKb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

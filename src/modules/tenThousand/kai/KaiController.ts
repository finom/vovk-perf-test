import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kais")
export default class KaiController {
  @operation({
    summary: "Get Kais",
  })
  @get()
  static getKais = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kai",
  })
  @post("{id}")
  static createKai = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

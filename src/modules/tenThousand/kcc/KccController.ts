import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kccs")
export default class KccController {
  @operation({
    summary: "Get Kccs",
  })
  @get()
  static getKccs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kcc",
  })
  @post("{id}")
  static createKcc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kies")
export default class KieController {
  @operation({
    summary: "Get Kies",
  })
  @get()
  static getKies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kie",
  })
  @post("{id}")
  static createKie = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

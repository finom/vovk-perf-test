import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kches")
export default class KchController {
  @operation({
    summary: "Get Kches",
  })
  @get()
  static getKches = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kch",
  })
  @post("{id}")
  static createKch = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

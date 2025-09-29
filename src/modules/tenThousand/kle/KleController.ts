import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kles")
export default class KleController {
  @operation({
    summary: "Get Kles",
  })
  @get()
  static getKles = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kle",
  })
  @post("{id}")
  static createKle = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

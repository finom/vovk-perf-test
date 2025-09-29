import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jhis")
export default class JhiController {
  @operation({
    summary: "Get Jhis",
  })
  @get()
  static getJhis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jhi",
  })
  @post("{id}")
  static createJhi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

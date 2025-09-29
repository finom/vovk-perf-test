import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aps")
export default class ApController {
  @operation({
    summary: "Get Aps",
  })
  @get()
  static getAps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ap",
  })
  @post("{id}")
  static createAp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

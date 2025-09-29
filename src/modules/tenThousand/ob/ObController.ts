import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("obs")
export default class ObController {
  @operation({
    summary: "Get Obs",
  })
  @get()
  static getObs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ob",
  })
  @post("{id}")
  static createOb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eps")
export default class EpsController {
  @operation({
    summary: "Get Eps",
  })
  @get()
  static getEps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eps",
  })
  @post("{id}")
  static createEps = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

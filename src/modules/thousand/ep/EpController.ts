import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eps")
export default class EpController {
  @operation({
    summary: "Get Eps",
  })
  @get()
  static getEps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ep",
  })
  @post("{id}")
  static createEp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

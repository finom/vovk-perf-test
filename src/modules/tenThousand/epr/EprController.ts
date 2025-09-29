import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eprs")
export default class EprController {
  @operation({
    summary: "Get Eprs",
  })
  @get()
  static getEprs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Epr",
  })
  @post("{id}")
  static createEpr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

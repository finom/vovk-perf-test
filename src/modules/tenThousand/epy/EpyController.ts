import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("epies")
export default class EpyController {
  @operation({
    summary: "Get Epies",
  })
  @get()
  static getEpies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Epy",
  })
  @post("{id}")
  static createEpy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

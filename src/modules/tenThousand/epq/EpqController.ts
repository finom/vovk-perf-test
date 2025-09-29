import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("epqs")
export default class EpqController {
  @operation({
    summary: "Get Epqs",
  })
  @get()
  static getEpqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Epq",
  })
  @post("{id}")
  static createEpq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

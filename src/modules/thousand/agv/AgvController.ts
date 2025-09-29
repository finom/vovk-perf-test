import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("agvs")
export default class AgvController {
  @operation({
    summary: "Get Agvs",
  })
  @get()
  static getAgvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Agv",
  })
  @post("{id}")
  static createAgv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

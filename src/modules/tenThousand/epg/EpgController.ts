import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("epgs")
export default class EpgController {
  @operation({
    summary: "Get Epgs",
  })
  @get()
  static getEpgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Epg",
  })
  @post("{id}")
  static createEpg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

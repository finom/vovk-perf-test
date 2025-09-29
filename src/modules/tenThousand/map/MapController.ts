import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("maps")
export default class MapController {
  @operation({
    summary: "Get Maps",
  })
  @get()
  static getMaps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Map",
  })
  @post("{id}")
  static createMap = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

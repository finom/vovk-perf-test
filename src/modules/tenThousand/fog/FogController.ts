import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fogs")
export default class FogController {
  @operation({
    summary: "Get Fogs",
  })
  @get()
  static getFogs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fog",
  })
  @post("{id}")
  static createFog = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

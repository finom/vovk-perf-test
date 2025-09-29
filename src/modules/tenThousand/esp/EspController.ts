import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("esps")
export default class EspController {
  @operation({
    summary: "Get Esps",
  })
  @get()
  static getEsps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Esp",
  })
  @post("{id}")
  static createEsp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

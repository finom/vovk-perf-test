import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gjis")
export default class GjiController {
  @operation({
    summary: "Get Gjis",
  })
  @get()
  static getGjis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gji",
  })
  @post("{id}")
  static createGji = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

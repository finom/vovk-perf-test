import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gdis")
export default class GdiController {
  @operation({
    summary: "Get Gdis",
  })
  @get()
  static getGdis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gdi",
  })
  @post("{id}")
  static createGdi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

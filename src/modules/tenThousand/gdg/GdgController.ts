import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gdgs")
export default class GdgController {
  @operation({
    summary: "Get Gdgs",
  })
  @get()
  static getGdgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gdg",
  })
  @post("{id}")
  static createGdg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

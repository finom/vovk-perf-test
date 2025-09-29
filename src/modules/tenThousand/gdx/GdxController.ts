import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gdxes")
export default class GdxController {
  @operation({
    summary: "Get Gdxes",
  })
  @get()
  static getGdxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gdx",
  })
  @post("{id}")
  static createGdx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

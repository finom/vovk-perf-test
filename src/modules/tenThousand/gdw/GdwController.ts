import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gdws")
export default class GdwController {
  @operation({
    summary: "Get Gdws",
  })
  @get()
  static getGdws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gdw",
  })
  @post("{id}")
  static createGdw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

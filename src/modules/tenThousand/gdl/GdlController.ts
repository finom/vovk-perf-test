import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gdls")
export default class GdlController {
  @operation({
    summary: "Get Gdls",
  })
  @get()
  static getGdls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gdl",
  })
  @post("{id}")
  static createGdl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

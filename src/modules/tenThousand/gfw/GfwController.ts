import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gfws")
export default class GfwController {
  @operation({
    summary: "Get Gfws",
  })
  @get()
  static getGfws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gfw",
  })
  @post("{id}")
  static createGfw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

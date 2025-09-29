import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gqws")
export default class GqwController {
  @operation({
    summary: "Get Gqws",
  })
  @get()
  static getGqws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gqw",
  })
  @post("{id}")
  static createGqw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

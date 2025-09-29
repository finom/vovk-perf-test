import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gxus")
export default class GxuController {
  @operation({
    summary: "Get Gxus",
  })
  @get()
  static getGxus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gxu",
  })
  @post("{id}")
  static createGxu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

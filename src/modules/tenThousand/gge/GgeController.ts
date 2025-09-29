import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gges")
export default class GgeController {
  @operation({
    summary: "Get Gges",
  })
  @get()
  static getGges = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gge",
  })
  @post("{id}")
  static createGge = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
